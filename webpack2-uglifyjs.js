module.exports = {
    plugins: [
    	// https://github.com/mishoo/UglifyJS2/issues/1098
        require("babel-plugin-transform-es2015-spread")
    ].concat(require('./webpack2').plugins)
};
