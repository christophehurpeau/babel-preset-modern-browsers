module.exports = {
    plugins: [
        require('babel-plugin-transform-es2015-arrow-functions'),
        require('babel-plugin-transform-es2015-block-scoped-functions'),
        require('babel-plugin-transform-es2015-classes'),
        require('babel-plugin-transform-es2015-object-super'),
        require('babel-plugin-transform-es2015-for-of'),
        require('babel-plugin-transform-es2015-sticky-regex'),
        require('babel-plugin-transform-es2015-unicode-regex'),
        require('babel-plugin-transform-es2015-spread'),
        require('babel-plugin-transform-es2015-destructuring'),
        require("babel-plugin-transform-es2015-parameters"),
    ],
};
