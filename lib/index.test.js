'use strict';

const fs = require('fs');
const { transform } = require('@babel/core');

const presetPath = require.resolve('.');

const tests = fs
  .readdirSync(`${__dirname}/__tests_fixtures__`)
  .filter((name) => name.endsWith('.js'));

tests.forEach((filename) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const testContent = require(`${__dirname}/__tests_fixtures__/${filename}`);

  test(testContent.name || filename, () => {
    try {
      const output = transform(testContent.actual, {
        babelrc: false,
        presets: [[presetPath, testContent.presetOptions || {}]],
      });

      const actual = output.code.trim();
      const expected = testContent.expected.trim();

      expect(actual).toBe(expected);
    } catch (err) {
      if (err._babel && err instanceof SyntaxError) {
        console.log(`Unexpected error in test: ${test.name || filename}`);
        console.log(`${err.name}: ${err.message}\n${err.codeFrame}`);
        // eslint-disable-next-line unicorn/no-process-exit
        process.exit(1);
      } else {
        throw err;
      }
    }
  });
});
