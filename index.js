/* eslint-disable global-require */

function preset(context, opts) {
  opts = opts || {}; // support node 4
  const moduleTypes = ['commonjs'];
  const safari10 = opts.safari10 !== undefined ? opts.safari10 : false;
  const edge = opts.edge !== undefined ? opts.edge : false;
  const loose = opts.loose !== undefined ? opts.loose : false;
  const modules = opts.modules !== undefined ? opts.modules : 'commonjs';
  const es2016 = opts.es2016 !== undefined ? opts.es2016 : true;
  const es2017 = opts.es2017 !== undefined ? opts.es2017 : true;
  if (opts.objectRest) {
    console.log(
        'warning: Babel now supports object rest without additional plugins. '
        + 'You can remove the option.'
      );
  }

  if (modules !== false && moduleTypes.indexOf(modules) === -1) {
    throw new Error("Preset es2015 'modules' option must be 'false' to indicate no modules\n" +
        "or 'commonjs' (default)");
  }
  if (typeof safari10 !== 'boolean') throw new Error("Preset modern-browsers 'safari10' option must be a boolean.");
  if (typeof loose !== 'boolean') throw new Error("Preset modern-browsers 'loose' option must be a boolean.");
  if (typeof es2016 !== 'boolean') throw new Error("Preset modern-browsers 'es2016' option must be a boolean.");
  if (typeof es2017 !== 'boolean') throw new Error("Preset modern-browsers 'es2017' option must be a boolean.");

  const optsLoose = { loose };

  return {
    plugins: [
      /* es2015 */
      require('babel-plugin-check-es2015-constants'),

      edge && require('babel-plugin-transform-es2015-arrow-functions'), // needed for function-name
      edge && require('babel-plugin-transform-es2015-function-name'),

      modules === 'commonjs' && [require('babel-plugin-transform-es2015-modules-commonjs'), optsLoose],

      /* es2017 */
      es2017 && require('babel-plugin-syntax-trailing-function-commas'),
    ].filter(Boolean),
  };
}

module.exports = preset({});

Object.defineProperty(module.exports, 'buildPreset', {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
});
