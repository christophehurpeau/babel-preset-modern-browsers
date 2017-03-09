# babel-preset-modern-browsers [![NPM version][npm-image]][npm-url]

![Edge 14][edge-14]
![Firefox 52][firefox-52]
![Chrome 55][chrome-55]
![Opera 39][opera-39]
![Safari 10][safari-10]

Babel presets for modern browsers

[![Dependency ci Status][dependencyci-image]][dependencyci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

* [Installation](#installation)
* [Usage](#usage)
* [Presets](#presets)
* [Compatibility Table](#compatibility-table)
* [Release Dates](#release-dates)

## Alternatives

- https://github.com/babel/babel-preset-env

## Installation

```sh
npm install --save-dev babel-preset-modern-browsers
```

## Usage

Add the following line to your `.babelrc` file:

```js
{
  "presets": ["modern-browsers"]
}
```

### Options

- `loose`: Enable “loose” transformations for any plugins in this preset that allow them (Disabled by default).
- `modules` - Enable transformation of ES6 module syntax to another module type (Enabled by default to "commonjs"). Can be false to not transform modules, or "commonjs"
- `fullSupport` - Add support for features below
- `es2016` - Enable es2016 features (Enabled by default)
- `es2017` - Enable es2017 features (Enabled by default)


```js
{
  presets: [
    ["modern-browsers", { "loose": true }]
  ]
}
```


```js
{
  presets: [
    [require("babel-preset-modern-browsers").buildPreset, { "loose": true }]
  ]
}
```

Note: to support `async` functions and other proposals, you can add babel preset `stage-X` or the stage you want:

```js
{
  "presets": [
    ["modern-browsers", { objectRest: true }],
    "stage-1"
  ]
}
```

This preset covers `es2015`, `es2016` and `es2017`.

## Features supported only with full-support

- default parameters: new Function() support
- for...of: iterator closing
- destructuring: iterator closing

More info in the compatibility table below

## Compatibility Table


| Feature | Edge | Firefox | Chrome | Opera | Safari |
| ------- | ---- | ------- | ------ | ----- | ------ |
| <h3>ES2015</h3> ||||||
| <h4>Syntax</h4> ||||||
| [default parameters, without new Function() support](https://kangax.github.io/compat-table/es6/#test-default_function_parameters) | ![Edge 14][edge-14] | ![Firefox 51][firefox-51] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| [default parameters, with new Function() support](https://kangax.github.io/compat-table/es6/#test-default_function_parameters) | ![Edge 14][edge-14] | ![Firefox 53][firefox-53] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (fullSupport) [transform-es2015-parameters](https://babeljs.io/docs/plugins/transform-es2015-parameters) ||||||
| [rest parameters](https://kangax.github.io/compat-table/es6/#test-rest_parameters) | ![Edge 12][edge-12] | ![Firefox 43][firefox-43] | ![Chrome 47][chrome-47] | ![Opera 34][opera-34] | ![Safari 10][safari-10] |
| ↳ (fullSupport) [transform-es2015-parameters](https://babeljs.io/docs/plugins/transform-es2015-parameters) ||||||
| [spread](https://kangax.github.io/compat-table/es6/#test-spread) | ![Edge 13][edge-13] | ![Firefox 36][firefox-36] | ![Chrome 46][chrome-46] | ![Opera 33][opera-33] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-spread](https://babeljs.io/docs/plugins/transform-es2015-spread) ||||||
| [computed properties](https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_computed_properties) | ![Edge 12][edge-12] | ![Firefox 34][firefox-34] | ![Chrome 44][chrome-44] | ![Opera 31][opera-31] | ![Safari 7.1][safari-7.1] |
| ↳ (unused) [transform-es2015-computed-properties](https://babeljs.io/docs/plugins/transform-es2015-computed-properties) ||||||
| [shorthand properties](https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_shorthand_properties) | ![Edge 12][edge-12] | ![Firefox 33][firefox-33] | ![Chrome 43][chrome-43] | ![Opera 30][opera-30] | ![Safari 9][safari-9] |
| ↳ (unused) [transform-es2015-shorthand-properties](https://babeljs.io/docs/plugins/transform-es2015-shorthand-properties) ||||||
| [`for...of`, without iterator closing](https://kangax.github.io/compat-table/es6/#test-for..of_loops) | ![Edge 13][edge-13] | ![Firefox 36][firefox-36] | ![Chrome 39][chrome-39] | ![Opera 26][opera-26] | ![Safari 10][safari-10] |
| [`for...of`, with iterator closing](https://kangax.github.io/compat-table/es6/#test-for..of_loops) | ![Edge 14][edge-14] | ![Firefox 53][firefox-53] | ![Chrome 51][chrome-51] | ![Opera 38][opera-38] | ![Safari 10][safari-10] |
| ↳ (fullSupport) [transform-es2015-for-of](https://babeljs.io/docs/plugins/transform-es2015-for-of) ||||||
| [template string](https://kangax.github.io/compat-table/es6/#test-template_strings) | ![Edge 13][edge-13] | ![Firefox 34][firefox-34] | ![Chrome 41][chrome-41] | ![Opera 28][opera-28] | ![Safari 9][safari-9] |
| ↳ (unused) [transform-es2015-template-literals](https://babeljs.io/docs/plugins/transform-es2015-template-literals) ||||||
| [Regexp sticky](https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_y_flag) | ![Edge 13][edge-13] | ![Firefox 31][firefox-31] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused)  [transform-es2015-sticky-regex](https://babeljs.io/docs/plugins/transform-es2015-sticky-regex) ||||||
| [Regexp unicode](https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_u_flag) | ![Edge 12][edge-12] | ![Firefox 46][firefox-46] | ![Chrome 51][chrome-51] | ![Opera 38][opera-38] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-unicode-regex](https://babeljs.io/docs/plugins/transform-es2015-unicode-regex) ||||||
| [destructuring, without iterator closing, new Function() support](https://kangax.github.io/compat-table/es6/) | ![Edge 14][edge-14] | ![Firefox 51][firefox-51] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| [destructuring, with iterator closing, new Function() support](https://kangax.github.io/compat-table/es6/) | ![Edge 15][edge-15] | ![Firefox 53][firefox-53] | ![Chrome 52][chrome-52] | ![Opera 39][opera-39] | ![Safari 10][safari-10] |
| ↳ (fullSupport) [transform-es2015-destructuring](https://babeljs.io/docs/plugins/transform-es2015-destructuring) ||||||
| [Unicode Strings](https://kangax.github.io/compat-table/es6/#test-Unicode_code_point_escapes_in_strings) | ![Edge 12][edge-12] | ![Firefox 45][firefox-45] | ![Chrome 44][chrome-44] | ![Opera 31][opera-31] | ![Safari 9][safari-9] |
| [Octal/Binary Numbers](https://kangax.github.io/compat-table/es6/#test-octal_and_binary_literals) | ![Edge 12][edge-12] | ![Firefox 36][firefox-36] | ![Chrome 41][chrome-41] | ![Opera 28][opera-28] | ![Safari 9][safari-9] |
| ↳ (unused) [transform-es2015-literals](https://babeljs.io/docs/plugins/transform-es2015-literals) ||||||
| <h4>Bindings</h4> ||||||
| [`const`](https://kangax.github.io/compat-table/es6/#test-const) | ![Edge 14][edge-14] | ![Firefox 51][firefox-51] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| [`let`](https://kangax.github.io/compat-table/es6/#test-let) | ![Edge 14][edge-14] | ![Firefox 51][firefox-51] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused)  [transform-es2015-block-scoping](https://babeljs.io/docs/plugins/transform-es2015-block-scoping) ||||||
| [`block-level function declaration`](https://kangax.github.io/compat-table/es6/#test-block-level_function_declaration) | ![Edge 11][edge-11] | ![Firefox 46][firefox-46] | ![Chrome 41][chrome-41] | ![Opera 28][opera-28] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-block-scoped-functions](https://babeljs.io/docs/plugins/transform-es2015-block-scoped-functions) ||||||
| <h4>Functions</h4> ||||||
| [arrow functions](https://kangax.github.io/compat-table/es6/#test-arrow_functions) | ![Edge 13][edge-13] | ![Firefox 45][firefox-45] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (used, [needed with function-name](https://github.com/babel/babel/pull/4849)) [transform-es2015-arrow-functions](https://babeljs.io/docs/plugins/transform-es2015-arrow-functions) ||||||
| [classes](https://kangax.github.io/compat-table/es6/#test-arrow_functions) | ![Edge 13][edge-13] | ![Firefox 45][firefox-45] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-classes](https://babeljs.io/docs/plugins/transform-es2015-classes) ||||||
| [super](https://kangax.github.io/compat-table/es6/#test-super) | ![Edge 13][edge-13] | ![Firefox 45][firefox-45] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-object-super](https://babeljs.io/docs/plugins/transform-es2015-object-super) ||||||
| [generators without `yield *`, iterator closing](https://kangax.github.io/compat-table/es6/#test-generators) | ![Edge 13][edge-13] | ![Firefox 45][firefox-45] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| [generators, `yield *`, iterator closing](https://kangax.github.io/compat-table/es6/#test-generators) | ![Edge 13][edge-13] | ![Firefox 53][firefox-53] | ![Chrome 51][chrome-51] | ![Opera 38][opera-38] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-regenerator](https://babeljs.io/docs/plugins/transform-regenerator) ||||||
| <h4>Built-ins</h4> ||||||
| [typeof Symbol](https://kangax.github.io/compat-table/es6/#test-Symbol_typeof_support) | ![Edge 12][edge-12] | ![Firefox 36][firefox-36] | ![Chrome 38][chrome-38] | ![Opera 25][opera-25] | ![Safari 9][safari-9] |
| ↳ (unused) [transform-es2015-typeof-symbol](https://babeljs.io/docs/plugins/transform-es2015-typeof-symbol) ||||||
| <h4>Built-in extensions</h4> ||||||
| [function name](https://kangax.github.io/compat-table/es6/#test-function_name_property) | ![Edge Partial][edge-partial] | ![Firefox 53][firefox-53] | ![Chrome 52][chrome-52] | ![Opera 39][opera-39] | ![Safari 10][safari-10] |
| ↳ (used) [transform-es2015-function-name](https://babeljs.io/docs/plugins/transform-es2015-function-name) ||||||
| <h3>ES2016</h3> ||||||
| [exponentiation operator](http://kangax.github.io/compat-table/es2016plus/#test-exponentiation_(**)_operator) | ![Edge 14][edge-14] | ![Firefox 52][firefox-52] | ![Chrome 52][chrome-52] | ![Opera 39][opera-39] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-exponentiation-operator](https://babeljs.io/docs/plugins/transform-exponentiation-operator) ||||||
| <h3>ES2017</h3> ||||||
| [trailing commas in function](http://kangax.github.io/compat-table/es2016plus/#test-trailing_commas_in_function_syntax) | ![Edge 14][edge-14] | ![Firefox 52][firefox-52] | ![Chrome 58][chrome-58] | ![Opera 45][opera-45] | ![Safari 10][safari-10] |
| ↳ (used) [babel-plugin-syntax-trailing-function-commas](https://babeljs.io/docs/plugins/syntax-trailing-function-commas) ||||||
| [async function](http://kangax.github.io/compat-table/es2016plus/#test-async_functions) | ![Edge None][edge-none] | ![Firefox 52][firefox-52] | ![Chrome 55][chrome-55] | ![Opera 42][opera-42] | ![Safari 10.1][safari-10.1] |
| ↳ (used) [babel-plugin-transform-async-to-generator](https://babeljs.io/docs/plugins/transform-async-to-generator) ||||||

## Release Dates

### [Firefox](https://wiki.mozilla.org/RapidRelease/Calendar)

| Date       | Version |
| ---------- | ------- |
| 2017-06-13 | ![Firefox 54][firefox-54] |
| 2017-04-18 | ![Firefox 53][firefox-53] |
| 2017-03-07 | ![Firefox 52][firefox-52] |
| 2017-01-24 | ![Firefox 51][firefox-51] |
| 2016-12-13 | 50.0.1 |
| 2016-11-08 | ![Firefox 50][firefox-50] |
| 2016-09-20 | ![Firefox 49][firefox-49] |
| 2016-08-02 | ![Firefox 48][firefox-48] |
| 2016-06-07 | ![Firefox 47][firefox-47] |

### [Chrome (Desktop release date)](https://www.chromium.org/developers/calendar)

| Date       | Version |
| ---------- | ------- |
| 2017-06-06? | ![Chrome 59][chrome-59] |
| 2017-04-25? | ![Chrome 58][chrome-58] |
| 2017-03-14? | ![Chrome 57][chrome-57] |
| 2017-01-25  | ![Chrome 56][chrome-56] |
| 2016-12-06  | ![Chrome 55][chrome-55] |
| 2016-10-12  | ![Chrome 54][chrome-54] |
| 2016-08-31  | ![Chrome 53][chrome-53] |
| 2016-07-20  | ![Chrome 52][chrome-52] |

## Thanks

- Inspired by [https://github.com/askmatey/babel-preset-modern](https://github.com/askmatey/babel-preset-modern)

[edge-11]: https://img.shields.io/badge/Edge-11-green.svg?style=flat-square
[edge-12]: https://img.shields.io/badge/Edge-12-green.svg?style=flat-square
[edge-13]: https://img.shields.io/badge/Edge-13-green.svg?style=flat-square
[edge-14]: https://img.shields.io/badge/Edge-14-green.svg?style=flat-square
[edge-15]: https://img.shields.io/badge/Edge-15-green.svg?style=flat-square
[edge-partial]: https://img.shields.io/badge/Edge-Partial-red.svg?style=flat-square
[edge-none]: https://img.shields.io/badge/Edge-None-red.svg?style=flat-square

[firefox-31]: https://img.shields.io/badge/Firefox-31-green.svg?style=flat-square
[firefox-33]: https://img.shields.io/badge/Firefox-33-green.svg?style=flat-square
[firefox-34]: https://img.shields.io/badge/Firefox-34-green.svg?style=flat-square
[firefox-36]: https://img.shields.io/badge/Firefox-36-green.svg?style=flat-square
[firefox-43]: https://img.shields.io/badge/Firefox-43-green.svg?style=flat-square
[firefox-45]: https://img.shields.io/badge/Firefox-45-green.svg?style=flat-square
[firefox-46]: https://img.shields.io/badge/Firefox-46-green.svg?style=flat-square
[firefox-47]: https://img.shields.io/badge/Firefox-47-green.svg?style=flat-square
[firefox-48]: https://img.shields.io/badge/Firefox-48-green.svg?style=flat-square
[firefox-49]: https://img.shields.io/badge/Firefox-49-green.svg?style=flat-square
[firefox-50]: https://img.shields.io/badge/Firefox-50-green.svg?style=flat-square
[firefox-51]: https://img.shields.io/badge/Firefox-51-green.svg?style=flat-square
[firefox-52]: https://img.shields.io/badge/Firefox-52-green.svg?style=flat-square
[firefox-53]: https://img.shields.io/badge/Firefox%20Beta-53-red.svg?style=flat-square
[firefox-54]: https://img.shields.io/badge/Firefox%20Aurora-54-red.svg?style=flat-square
[firefox-55]: https://img.shields.io/badge/Firefox%20Nightly-55-red.svg?style=flat-square
[firefox-partial]: https://img.shields.io/badge/Firefox-Partial-red.svg?style=flat-square
[firefox-none]: https://img.shields.io/badge/Firefox-None-red.svg?style=flat-square

[chrome-38]: https://img.shields.io/badge/Chrome-38-green.svg?style=flat-square
[chrome-39]: https://img.shields.io/badge/Chrome-39-green.svg?style=flat-square
[chrome-41]: https://img.shields.io/badge/Chrome-41-green.svg?style=flat-square
[chrome-43]: https://img.shields.io/badge/Chrome-43-green.svg?style=flat-square
[chrome-44]: https://img.shields.io/badge/Chrome-44-green.svg?style=flat-square
[chrome-46]: https://img.shields.io/badge/Chrome-46-green.svg?style=flat-square
[chrome-47]: https://img.shields.io/badge/Chrome-47-green.svg?style=flat-square
[chrome-49]: https://img.shields.io/badge/Chrome-49-green.svg?style=flat-square
[chrome-51]: https://img.shields.io/badge/Chrome-51-green.svg?style=flat-square
[chrome-52]: https://img.shields.io/badge/Chrome-52-green.svg?style=flat-square
[chrome-53]: https://img.shields.io/badge/Chrome-53-green.svg?style=flat-square
[chrome-54]: https://img.shields.io/badge/Chrome-54-green.svg?style=flat-square
[chrome-55]: https://img.shields.io/badge/Chrome-55-green.svg?style=flat-square
[chrome-56]: https://img.shields.io/badge/Chrome-56-green.svg?style=flat-square
[chrome-57]: https://img.shields.io/badge/Chrome%20Beta-57-red.svg?style=flat-square
[chrome-58]: https://img.shields.io/badge/Chrome%20Canary-58-red.svg?style=flat-square
[chrome-59]: https://img.shields.io/badge/Chrome-59-red.svg?style=flat-square

[opera-25]: https://img.shields.io/badge/Opera-25-green.svg?style=flat-square
[opera-26]: https://img.shields.io/badge/Opera-26-green.svg?style=flat-square
[opera-28]: https://img.shields.io/badge/Opera-28-green.svg?style=flat-square
[opera-30]: https://img.shields.io/badge/Opera-30-green.svg?style=flat-square
[opera-31]: https://img.shields.io/badge/Opera-31-green.svg?style=flat-square
[opera-33]: https://img.shields.io/badge/Opera-33-green.svg?style=flat-square
[opera-34]: https://img.shields.io/badge/Opera-34-green.svg?style=flat-square
[opera-36]: https://img.shields.io/badge/Opera-36-green.svg?style=flat-square
[opera-38]: https://img.shields.io/badge/Opera-38-green.svg?style=flat-square
[opera-39]: https://img.shields.io/badge/Opera-39-green.svg?style=flat-square
[opera-42]: https://img.shields.io/badge/Opera-42-green.svg?style=flat-square
[opera-45]: https://img.shields.io/badge/Opera-45-green.svg?style=flat-square

[safari-7.1]: https://img.shields.io/badge/Safari-7.1-green.svg?style=flat-square
[safari-9]: https://img.shields.io/badge/Safari-9-green.svg?style=flat-square
[safari-10]: https://img.shields.io/badge/Safari-10-green.svg?style=flat-square
[safari-10.1]: https://img.shields.io/badge/Safari-10.1-red.svg?style=flat-square

[npm-image]: https://img.shields.io/npm/v/babel-preset-modern-browsers.svg?style=flat-square
[npm-url]: https://npmjs.org/package/babel-preset-modern-browsers
[daviddm-image]: https://david-dm.org/christophehurpeau/babel-preset-modern-browsers.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/babel-preset-modern-browsers
[dependencyci-image]: https://dependencyci.com/github/christophehurpeau/babel-preset-modern-browsers/badge?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/christophehurpeau/babel-preset-modern-browsers
