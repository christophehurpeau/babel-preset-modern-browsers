module.exports = {
    plugins: [
        require("babel-plugin-transform-es2015-modules-commonjs")
    ].concat(require('./webpack2').plugins)
};
