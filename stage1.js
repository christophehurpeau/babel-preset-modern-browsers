module.exports = {
    plugins: [
        // Stage 3
        require("babel-plugin-transform-async-to-generator"),
        require("babel-plugin-transform-exponentiation-operator"),

        // Stage 2
        require("babel-plugin-syntax-trailing-function-commas"),
        require("babel-plugin-transform-object-rest-spread"),

        // Stage 1
        require("babel-plugin-transform-class-constructor-call"),
        require("babel-plugin-transform-class-properties"),
        require("babel-plugin-transform-decorators"),
        require("babel-plugin-transform-export-extensions")
    ]
};
