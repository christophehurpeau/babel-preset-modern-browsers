module.exports = {
    plugins: [
        require("babel-plugin-transform-es2015-modules-commonjs"),
        require('babel-plugin-check-es2015-constants'),

        require('babel-plugin-transform-es2015-function-name'),
        require('babel-plugin-transform-es2015-block-scoping'),
        require('babel-plugin-transform-exponentiation-operator'),
    ]
};
