const path = require("path");

module.exports = {
    // devServer: {
    //     port: 5000,
    // },
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};
