module.exports = {
    plugins: [
        require("babel-plugin-transform-es2015-modules-commonjs"),
        require('babel-plugin-check-es2015-constants'),

        require('babel-plugin-transform-es2015-shorthand-properties'),
        require('babel-plugin-transform-es2015-block-scoping'),
        require('babel-plugin-transform-es2015-destructuring'),
        require('babel-plugin-transform-es2015-for-of'),
        require('babel-plugin-transform-es2015-function-name'),
        require('babel-plugin-transform-es2015-parameters'),
    ]
};
