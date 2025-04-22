# API folder

## Client Creation Approach:
- Base Pattern: Primary `apiClient` is created with `axios.create()`
- Module Pattern: Secondary clients created with `apiClient.create()` that extend the base client

## Service Class Implementation Styles
- Static Method Pattern: Uses static class methods for API calls
- Instance Method Pattern: Uses instance methods with constructore injected API client

## Structure of the folder

There are two file configuration in the API folder for all the different components.
1. config.js
2. index.js

In config.js the Api Client is created using `axios` method that requires the:
1. baseURL- base API path
2. headers- json is accepted

ApiUtils.getAuthToken()- will get the authentication token after login
Through this process authorization of the user is done.

The `index.js` file define sevice classes that encapsulate related API operations for a specific domain (eg. auth, charts, endpoints). These service classes:

- Import the API client from the corresponding `config.js` file
- Define methods that represent specific API endpoints
- Handle the actual HTTP requests using API client
- Return processesd response data

## Implementation of the API Request Process

1. Base API Client Setup(Root config.js)- First a base API client is created using Axios:

```javascript
    import axios from "axios";
    import apiConstants from "./utils/constants";
    import {notifyError} from "@/components/Notification";
    import ApiUtils from "./utils";

    const apiClient = axios.create({
        baseURL: apiConstants.BACKEND_API_BASE_URL,
        headers:{
            "Content-Type":"application/json",
            "Authorization": ApiUtils.getAuthToken() 
            ? `Bearer ${ApiUtils.getAuthToken()}` 
            : undefined,
        },
    });


    // Request interceptor
    apiClient.interceptors.request.use(
        (config) => {
            // The token is taken from the LocalStorage
            const token = ApiUtils.getAuthtoken();
            if(token){
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        }
        (error)=>{
            notifyError(error);
            return Promise.reject(error);
        }
    )

    // Response interceptor
    apiClient.interceptors.response.use(
        (response)=>{
            response.data.modified = true;
            return response;
        },
        (error) => {
            const errorMessage = error.response?.data?.messsage || error.message ||"An error occured";
            console.log("Error ")
        }
    )
```

2. Module Specific API Client (Module config.js)
A domain-specific API client extends the base client:

```javascript
    //services/auth/config.js

    import apiConstants from "@/services/utils/constants";
    import apiClient from "../config";

    const authApiClient = apiClient.create({
        baseURL: `${apiClient.defaults.baseURL}`${apiConstants.auth.BASE_ROUTE};

        headers:{
            ...apiClient.defaults.headers;
        },
    });

    export default authApiClient;
```

3. Service Class Definition (Module index.js)

```javascript
    iimport apiConstants from "@/services/utils/constants";
    import apiClient from "../config";

    class AuthApiService{
        static async login(payload, signal){
            const response = await authApiClient.post(apiConstants.auth.LOGIN, payload,{signal,
        })

        static async getCurrentUser(signal) {
            const response = await authApiClient.get(apiConstants.auth.GET_CURRENT_USER, {
            signal,
        });
         return response.data;
            }
        }

        export default AuthApiService;
    }
```

4. API Constants Definition

```javascript
    const apiConstants = {
        BACKEND_API_BASE_URL: "https://api.example.com",
        auth: {
            BASE_ROUTE: "/auth",
            LOGIN: "/login",
            GET_CURRENT_USER: "/user",
            FORGOT_PASSWORD: "/forgot-password",
            ... //Other modules
        }
    }

    export default apiConstants;
```

## Process Flow Summary
1. User Action Triggers API Call
- User submits login form
- Form handler creates payload and calls service method

2. Service Method Makes API Call
- `AuthApiService.function()` is called with `payload` and `signal`
- Service method uses the auth API client to make a POST request
- Client appends the endpoint to the base URL

3. Request Processing
- Request interceptors adds auth token if available
- Request os sent to server

4. Response Processing
- Response interceptor processes the response
- Adds `modified: true` flag to data
- Handles errors and show notifications
- Returns data to service method

5. Service Method Returns Data
-  Service method extracts and return `response.data`
-  Component receives the processed data

6. Component Handles Result
- Stores authentication token
- Shows success notification
- Fetches user profile
- Redirects to dashboard