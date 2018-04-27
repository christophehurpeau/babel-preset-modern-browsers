/* eslint-disable global-require */

'use strict';

module.exports = function preset(context, opts = {}) {
  const modules = opts.modules !== undefined ? opts.modules : 'commonjs';

  ['safari10', 'edge', 'loose', 'es2016', 'es2017', 'es2018', 'shippedProposals'].forEach(
    optionName => {
      if (opts[optionName] !== undefined && typeof opts[optionName] !== 'boolean') {
        throw new Error(`Preset modern-browsers '${optionName}' option must be a boolean.`);
      }
    }
  );

  if (modules !== false && modules !== 'commonjs') {
    throw new Error(
      "Preset modern-browsers 'modules' option must be 'false' to indicate no modules\n" +
        "or 'commonjs' (default)"
    );
  }

  const edge = opts.edge !== undefined ? opts.edge : true;
  const loose = opts.loose !== undefined ? opts.loose : false;
  const es2018 = opts.es2018 !== undefined ? opts.es2018 : true;
  const shippedProposals = opts.shippedProposals !== undefined ? opts.shippedProposals : true;

  if (opts.esnext !== undefined) {
    throw new Error("Preset modern-browsers 'esnext' option was removed");
  }

  const optsLoose = { loose };

  return {
    plugins: [
      /* es2015 */
      modules === 'commonjs' && [require('@babel/plugin-transform-modules-commonjs'), optsLoose],

      edge && require('@babel/plugin-transform-arrow-functions'), // needed for function-name
      edge && require('@babel/plugin-transform-function-name'),

      /* es2018 */
      es2018 &&
        (edge
          ? [require('@babel/plugin-proposal-object-rest-spread'), { loose, useBuiltIns: true }]
          : require('@babel/plugin-syntax-object-rest-spread')),

      es2018 && [
        require('@babel/plugin-proposal-unicode-property-regex'),
        { useUnicodeFlag: true },
      ],

      es2018 && edge
        ? require('@babel/plugin-proposal-async-generator-functions')
        : require('@babel/plugin-syntax-async-generators'),

      /* shippedProposals */
      shippedProposals &&
        shippedProposals &&
        require('@babel/plugin-syntax-optional-catch-binding'),
    ].filter(Boolean),
  };
};
