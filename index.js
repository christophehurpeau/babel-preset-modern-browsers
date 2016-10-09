function preset(context, opts = {}) {
    const moduleTypes = ["commonjs"];
    const loose = opts.loose !== undefined ? opts.loose : false;
    const modules = opts.modules !== undefined ? opts.modules : 'commonjs';
    const fullSupport = opts.fullSupport !== undefined ? opts.fullSupport : false;
    const objectRest = opts.objectRest !== undefined ? opts.objectRest : false;

    if (modules !== false && moduleTypes.indexOf(modules) === -1) {
      throw new Error("Preset es2015 'modules' option must be 'false' to indicate no modules\n" +
        "or 'commonjs' (default)");
    }
    if (typeof loose !== "boolean") throw new Error("Preset modern-browsers 'loose' option must be a boolean.");
    if (typeof fullSupport !== "boolean") throw new Error("Preset modern-browsers 'fullSupport' option must be a boolean.");
    if (typeof objectRest !== "boolean") throw new Error("Preset modern-browsers 'objectRest' option must be a boolean.");

    const optsLoose = { loose };

    return {
        plugins: [
            // es2015
            require('babel-plugin-check-es2015-constants'),

            require('babel-plugin-transform-es2015-block-scoping'),
            (objectRest || true) && require('babel-plugin-transform-es2015-function-name'),

            fullSupport && [require('babel-plugin-transform-es2015-for-of'), optsLoose],
            (objectRest || fullSupport) && require('babel-plugin-transform-es2015-parameters'),
            (objectRest || fullSupport) && [require('babel-plugin-transform-es2015-destructuring'), optsLoose],

            modules === "commonjs" && [require("babel-plugin-transform-es2015-modules-commonjs"), optsLoose],

            // es2016
            require('babel-plugin-transform-exponentiation-operator'),
        ].filter(Boolean),
    };
}

module.exports = preset({});

Object.defineProperty(module.exports, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
});
