module.exports = {
    plugins: [
        require("babel-plugin-transform-es2015-spread")
    ].concat(require('./webpack2').plugins)
};
