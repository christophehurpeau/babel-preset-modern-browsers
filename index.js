/* eslint-disable global-require */

'use strict';

module.exports = function preset(context, opts) {
  opts = opts || {}; // support node 4
  const modules = opts.modules !== undefined ? opts.modules : 'commonjs';

  const edge = opts.edge !== undefined ? opts.edge : true;
  const loose = opts.loose !== undefined ? opts.loose : false;
  const es2017 = opts.es2017 !== undefined ? opts.es2017 : true;
  const es2018 = opts.es2018 !== undefined ? opts.es2018 : true;

  if (modules !== false && modules !== 'commonjs') {
    throw new Error(
      "Preset modern-browsers 'modules' option must be 'false' to indicate no modules\n" +
        "or 'commonjs' (default)"
    );
  }

  [
    'safari10',
    'edge',
    'loose',
    'es2016',
    'es2017',
    'es2018',
    'shippedProposals',
    'esnext',
  ].forEach(optionName => {
    if (opts[optionName] !== undefined && typeof opts[optionName] !== 'boolean') {
      throw new Error(`Preset modern-browsers '${optionName}' option must be a boolean.`);
    }
  });

  if (opts.esnext !== undefined) {
    throw new Error("Preset modern-browsers 'esnext' option was removed");
  }

  const optsLoose = { loose };

  return {
    plugins: [
      /* es2015 */
      require('babel-plugin-check-es2015-constants'),

      edge && require('babel-plugin-transform-es2015-arrow-functions'), // needed for function-name
      edge && require('babel-plugin-transform-es2015-function-name'),

      modules === 'commonjs' && [
        require('babel-plugin-transform-es2015-modules-commonjs'),
        optsLoose,
      ],

      /* es2017 */
      es2017 && require('babel-plugin-syntax-trailing-function-commas'),

      /* esnext */
      es2018 &&
        (edge
          ? require('babel-plugin-transform-object-rest-spread')
          : require('babel-plugin-syntax-object-rest-spread')),
    ].filter(Boolean),
  };
};
