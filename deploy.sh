#!/bin/bash

# Variables
REMOTE_USER="manoj"
REMOTE_HOST="192.168.22.73"
REMOTE_PATH="/home/manoj/development/am_drupal_frontend_v3/src/modules/custom/react_app/static"
REMOTE_PATH_FOR_MEDIA="/home/manoj/development/am_drupal_frontend_v3/src/static/media"
BUILD_PATH="./build/static"
BUILD_PATH_FOR_MEDIA="./build/static/media"
TWIG_FILE="/home/manoj/development/am_drupal_frontend_v3/src/modules/custom/react_app/templates/react-template.html.twig" # Update with the correct path to your Twig file
REMOTE_PASS="manojdev#321"  # You can store the password in a secure way, like an environment variable.

# Build the React app
echo "Building the React app..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

# Remove the existing Media folder on the remote server
echo "Removing existing static media folder on remote server..."
sshpass -p $REMOTE_PASS ssh "$REMOTE_USER@$REMOTE_HOST" "echo $REMOTE_PASS | sudo -S rm -rf $REMOTE_PATH_FOR_MEDIA"

# Securely copy the build/static/media folder to the remote server
echo "Deploying static media to remote server..."
sshpass -p $REMOTE_PASS scp -r "$BUILD_PATH_FOR_MEDIA" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH_FOR_MEDIA"




# Remove the existing static folder on the remote server
echo "Removing existing static folder on remote server..."
sshpass -p $REMOTE_PASS ssh "$REMOTE_USER@$REMOTE_HOST" "echo $REMOTE_PASS | sudo -S rm -rf $REMOTE_PATH"

# Securely copy the build/static folder to the remote server
echo "Deploying to remote server..."
sshpass -p $REMOTE_PASS scp -r "$BUILD_PATH" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"

# Check if scp was successful
if [ $? -eq 0 ]; then
    echo "Deployment successful!"

    # Set the correct permissions on the remote server using sudo with -S option
    echo "Setting permissions for static media on the remote server..."
     sshpass -p $REMOTE_PASS ssh "$REMOTE_USER@$REMOTE_HOST" "echo $REMOTE_PASS | sudo -S chown -R www-data:www-data $REMOTE_PATH_FOR_MEDIA && \
        echo $REMOTE_PASS | sudo -S find $REMOTE_PATH_FOR_MEDIA -type d -exec chmod 755 {} \; && \
        echo $REMOTE_PASS | sudo -S find $REMOTE_PATH_FOR_MEDIA -type f -exec chmod 644 {} \;"

    echo "Setting permissions for static css js on the remote server..."
    sshpass -p $REMOTE_PASS ssh "$REMOTE_USER@$REMOTE_HOST" "echo $REMOTE_PASS | sudo -S chown -R www-data:www-data $REMOTE_PATH && \
        echo $REMOTE_PASS | sudo -S find $REMOTE_PATH -type d -exec chmod 755 {} \; && \
        echo $REMOTE_PASS | sudo -S find $REMOTE_PATH -type f -exec chmod 644 {} \;"

    # Update the Twig file with the new file paths
    echo "Updating Twig file with new file paths..."
    sshpass -p $REMOTE_PASS ssh "$REMOTE_USER@$REMOTE_HOST" <<EOF
        # Get the latest CSS and JS file names
        NEW_CSS_FILE="\$(ls $REMOTE_PATH/css/main.*.css | sort -V | tail -n 1)"  # Get the latest CSS file based on version
        NEW_JS_FILE="\$(ls $REMOTE_PATH/js/main.*.js | sort -V | tail -n 1)"    # Get the latest JS file based on version
        
        # Extract the new version numbers from the file names
        NEW_CSS_VERSION="\$(basename \$NEW_CSS_FILE | grep -oP '(?<=main\.)[^\.\s]+')"
        NEW_JS_VERSION="\$(basename \$NEW_JS_FILE | grep -oP '(?<=main\.)[^\.\s]+')"

        # Update the Twig file with new paths
        sed -i "s|{{ file_url('modules/custom/react_app/static/css/main.*.css') }}|{{ file_url('modules/custom/react_app/static/css/main.\$NEW_CSS_VERSION.css') }}|g" $TWIG_FILE
        sed -i "s|{{ file_url('modules/custom/react_app/static/js/main.*.js') }}|{{ file_url('modules/custom/react_app/static/js/main.\$NEW_JS_VERSION.js') }}|g" $TWIG_FILE
EOF

else
    echo "Deployment failed."
fi

