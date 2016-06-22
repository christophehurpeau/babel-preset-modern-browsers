module.exports = {
    plugins: [
        // Finished proposals : https://github.com/tc39/proposals/blob/master/finished-proposals.md
        require("babel-plugin-transform-exponentiation-operator"),

        // https://github.com/tc39/proposals
        // Stage 3
        require("babel-plugin-transform-async-to-generator"),
        require("babel-plugin-syntax-trailing-function-commas"),

        // Stage 2
        require("babel-plugin-transform-object-rest-spread"),

        // Stage 1
        require("babel-plugin-transform-class-constructor-call"),
        require("babel-plugin-transform-class-properties"),
        require("babel-plugin-transform-decorators"),
        require("babel-plugin-transform-export-extensions")
    ]
};
