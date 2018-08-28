<h3 align="center">
  babel-preset-modern-browsers
</h3>

<p align="center">
  Babel presets for modern browsers
</p>

<p align="center">
  <a href="https://npmjs.org/package/babel-preset-modern-browsers"><img src="https://img.shields.io/npm/v/babel-preset-modern-browsers.svg?style=flat-square"></a>
  <a href="https://david-dm.org/christophehurpeau/babel-preset-modern-browsers"><img src="https://david-dm.org/christophehurpeau/babel-preset-modern-browsers.svg?style=flat-square"></a>
  <a href="https://dependencyci.com/github/christophehurpeau/babel-preset-modern-browsers"><img src="https://dependencyci.com/github/christophehurpeau/babel-preset-modern-browsers/badge?style=flat-square"></a>
</p>

* [Installation](#installation)
* [Usage](#usage)
* [Presets](#presets)
* [Compatibility Table](#compatibility-table)
* [Release Dates](#release-dates)

This preset covers `es2015`, `es2016`, `es2017` and `es2018`.

More info in the compatibility table below

# babel 7

Since v12, this package requires `@babel/core@7.0.0`. If you use babel 6, you can still use the version "11.0.1" of this package. If you want to migrate, you can read the [announcement](https://babeljs.io/blog/2018/08/27/7.0.0) and the [official migration guide](https://babeljs.io/docs/en/v7-migration).

## Alternatives

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), especially `targets.esmodules`

## Modern browsers

- with `edge: true`: ![Edge 15][edge-15] ![Firefox 53][firefox-53] ![Chrome 55][chrome-55] ![Opera 42][opera-42] ![Safari 10.1][safari-10.1]
- with `edge: false`: ![Firefox 57][firefox-57] ![Chrome 63][chrome-63] ![Opera 50][opera-50] ![Safari 10.1][safari-11.1]

## Installation

```sh
npm install --save-dev babel-preset-modern-browsers@next @babel/core
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
- `es2018` - Enable es2018 features (Enabled by default)
- `shippedProposals` - Enable features in stages but already available in browsers (Enabled by default)
- `edge` - Support Edge (Enabled by default)

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
    [require("babel-preset-modern-browsers"), { "loose": true }]
  ]
}
```

#### Edge

Missing features added for `edge` option:

- function-name
- object rest/spread properties

## Compatibility Table

Note: most unused plugins are babel 6 plugins, I didn't update them for the documentation.


| Feature | Edge | Firefox | Chrome | Opera | Safari |
| ------- | ---- | ------- | ------ | ----- | ------ |
| <h3>Shipped Proposals</h3> ||||||
| [Optional catch binding](http://kangax.github.io/compat-table/es2016plus/#test-optional_catch_binding) | ![Edge None][edge-none] | ![Firefox 58][firefox-58] | ![Chrome 66][chrome-66] | ![Opera 53][opera-53] | ![Safari 11.1][safari-11.1] |
| ↳ (used) [syntax-optional-catch-binding](https://www.npmjs.com/package/@babel/plugin-syntax-optional-catch-binding) ||||||
| <h3>ES2018</h3> ||||||
| [Object Rest/Spread Properties](https://kangax.github.io/compat-table/es2016plus/#test-object_rest/spread_properties) | ![Edge None][edge-none] | ![Firefox 55][firefox-55] | ![Chrome 60][chrome-60] | ![Opera 47][opera-47] | ![Safari 11.1][safari-11.1] |
| ↳ `edge`: [proposal-object-rest-spread](https://www.npmjs.com/package/@babel/plugin-proposal-object-rest-spread)<br>else [syntax-object-rest-spread](https://www.npmjs.com/package/@babel/plugin-syntax-object-rest-spread) ||||||
| [RegExp Unicode Property Escapes](https://kangax.github.io/compat-table/es2016plus/#test-RegExp_Unicode_Property_Escapes) | ![Edge None][edge-none] | ![Firefox None][firefox-none] | ![Chrome 64][chrome-64] | ![Opera 51][opera-51] | ![Safari 11.1][safari-11.1] |
| ↳ (used) [proposal-unicode-property-regex](https://www.npmjs.com/package/@babel/proposal-unicode-property-regex) ||||||
| [Asynchronous Iterators](https://kangax.github.io/compat-table/es2016plus/#test-Asynchronous_Iterators) | ![Edge None][edge-none] | ![Firefox 57][firefox-57] | ![Chrome 63][chrome-63] | ![Opera 50][opera-50] | ![Safari 11.1][safari-11.1] |
| ↳ `edge`: [plugin-proposal-async-generator-functions](https://www.npmjs.com/package/@babel/plugin-proposal-async-generator-functions)<br>else [syntax-async-generators](https://www.npmjs.com/package/@babel/plugin-syntax-async-generators) ||||||
| <h3>ES2017</h3> ||||||
| [trailing commas in function](http://kangax.github.io/compat-table/es2016plus/#test-trailing_commas_in_function_syntax) | ![Edge 14][edge-14] | ![Firefox 52][firefox-52] | ![Chrome 58][chrome-58] | ![Opera 45][opera-45] | ![Safari 10][safari-10] |
| ↳ (used) [syntax-trailing-function-commas](https://babeljs.io/docs/plugins/syntax-trailing-function-commas) ||||||
| [async function](http://kangax.github.io/compat-table/es2016plus/#test-async_functions) | ![Edge 15][edge-15] | ![Firefox 52][firefox-52] | ![Chrome 55][chrome-55] | ![Opera 42][opera-42] | ![Safari 10.1][safari-10.1] |
| ↳ (unused) [transform-async-to-generator](https://babeljs.io/docs/plugins/transform-async-to-generator) ||||||
| <h3>ES2016</h3> ||||||
| [exponentiation operator](http://kangax.github.io/compat-table/es2016plus/#test-exponentiation_(**)_operator) | ![Edge 14][edge-14] | ![Firefox 52][firefox-52] | ![Chrome 52][chrome-52] | ![Opera 39][opera-39] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-exponentiation-operator](https://babeljs.io/docs/plugins/transform-exponentiation-operator) ||||||
| <h3>ES2015</h3> | ![Edge Partial][edge-partial] | ![Firefox 53][firefox-53] | ![Chrome 52][chrome-52] | ![Opera 39][opera-39] | ![Safari 10][safari-10] |
| <h4>Syntax</h4> ||||||
| [default parameters](https://kangax.github.io/compat-table/es6/#test-default_function_parameters) | ![Edge 14][edge-14] | ![Firefox 53][firefox-53] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-parameters](https://babeljs.io/docs/plugins/transform-es2015-parameters) ||||||
| [rest parameters](https://kangax.github.io/compat-table/es6/#test-rest_parameters) | ![Edge 12][edge-12] | ![Firefox 43][firefox-43] | ![Chrome 47][chrome-47] | ![Opera 34][opera-34] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-parameters](https://babeljs.io/docs/plugins/transform-es2015-parameters) ||||||
| [spread](https://kangax.github.io/compat-table/es6/#test-spread) | ![Edge 13][edge-13] | ![Firefox 36][firefox-36] | ![Chrome 46][chrome-46] | ![Opera 33][opera-33] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-spread](https://babeljs.io/docs/plugins/transform-es2015-spread) ||||||
| [computed properties](https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_computed_properties) | ![Edge 12][edge-12] | ![Firefox 34][firefox-34] | ![Chrome 44][chrome-44] | ![Opera 31][opera-31] | ![Safari 7.1][safari-7.1] |
| ↳ (unused) [transform-es2015-computed-properties](https://babeljs.io/docs/plugins/transform-es2015-computed-properties) ||||||
| [shorthand properties](https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_shorthand_properties) | ![Edge 12][edge-12] | ![Firefox 33][firefox-33] | ![Chrome 43][chrome-43] | ![Opera 30][opera-30] | ![Safari 9][safari-9] |
| ↳ (unused) [transform-es2015-shorthand-properties](https://babeljs.io/docs/plugins/transform-es2015-shorthand-properties) ||||||
| [`for...of`](https://kangax.github.io/compat-table/es6/#test-for..of_loops) | ![Edge 14][edge-14] | ![Firefox 53][firefox-53] | ![Chrome 51][chrome-51] | ![Opera 38][opera-38] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-for-of](https://babeljs.io/docs/plugins/transform-es2015-for-of) ||||||
| [template string](https://kangax.github.io/compat-table/es6/#test-template_strings) | ![Edge 13][edge-13] | ![Firefox 34][firefox-34] | ![Chrome 41][chrome-41] | ![Opera 28][opera-28] | ![Safari 9][safari-9] |
| ↳ (unused) [transform-es2015-template-literals](https://babeljs.io/docs/plugins/transform-es2015-template-literals) ||||||
| [Regexp sticky](https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_y_flag) | ![Edge 13][edge-13] | ![Firefox 31][firefox-31] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused)  [transform-es2015-sticky-regex](https://babeljs.io/docs/plugins/transform-es2015-sticky-regex) ||||||
| [Regexp unicode](https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_u_flag) | ![Edge 12][edge-12] | ![Firefox 46][firefox-46] | ![Chrome 51][chrome-51] | ![Opera 38][opera-38] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-unicode-regex](https://babeljs.io/docs/plugins/transform-es2015-unicode-regex) ||||||
| [destructuring](https://kangax.github.io/compat-table/es6/) | ![Edge 15][edge-15] | ![Firefox 53][firefox-53] | ![Chrome 52][chrome-52] | ![Opera 39][opera-39] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-destructuring](https://babeljs.io/docs/plugins/transform-es2015-destructuring) ||||||
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
| ↳ (used with `edge`, [with function-name](https://github.com/babel/babel/pull/4849)) [transform-es2015-arrow-functions](https://babeljs.io/docs/plugins/transform-es2015-arrow-functions) ||||||
| [classes](https://kangax.github.io/compat-table/es6/#test-arrow_functions) | ![Edge 13][edge-13] | ![Firefox 45][firefox-45] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-classes](https://babeljs.io/docs/plugins/transform-es2015-classes) ||||||
| [super](https://kangax.github.io/compat-table/es6/#test-super) | ![Edge 13][edge-13] | ![Firefox 45][firefox-45] | ![Chrome 49][chrome-49] | ![Opera 36][opera-36] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-es2015-object-super](https://babeljs.io/docs/plugins/transform-es2015-object-super) ||||||
| [generators](https://kangax.github.io/compat-table/es6/#test-generators) | ![Edge 13][edge-13] | ![Firefox 53][firefox-53] | ![Chrome 51][chrome-51] | ![Opera 38][opera-38] | ![Safari 10][safari-10] |
| ↳ (unused) [transform-regenerator](https://babeljs.io/docs/plugins/transform-regenerator) ||||||
| <h4>Built-ins</h4> ||||||
| [typeof Symbol](https://kangax.github.io/compat-table/es6/#test-Symbol_typeof_support) | ![Edge 12][edge-12] | ![Firefox 36][firefox-36] | ![Chrome 38][chrome-38] | ![Opera 25][opera-25] | ![Safari 9][safari-9] |
| ↳ (unused) [transform-es2015-typeof-symbol](https://babeljs.io/docs/plugins/transform-es2015-typeof-symbol) ||||||
| <h4>Built-in extensions</h4> ||||||
| [function name](https://kangax.github.io/compat-table/es6/#test-function_name_property) | ![Edge Partial][edge-partial] | ![Firefox 53][firefox-53] | ![Chrome 52][chrome-52] | ![Opera 39][opera-39] | ![Safari 10][safari-10] |
| ↳ (used with `edge`) [transform-es2015-function-name](https://babeljs.io/docs/plugins/transform-es2015-function-name) ||||||


## Release Dates

### [Firefox](https://wiki.mozilla.org/RapidRelease/Calendar)

| Date       | Version | ESR |
| ---------- | ------- | --- |
| 2018-12-11 | ![Firefox 64][firefox-64] ||
| 2018-10-23 | ![Firefox 63][firefox-63] ||
| 2018-09-05 | ![Firefox 62][firefox-62] ||
| 2018-06-26 | ![Firefox 61][firefox-61] ||
| 2018-05-09 | ![Firefox 60][firefox-60] | ESR |
| 2018-03-13 | ![Firefox 59][firefox-59] ||
| 2018-01-16 | ![Firefox 58][firefox-58] ||

### [Chrome (Desktop release date)](https://www.chromium.org/developers/calendar)  ([Version History](https://en.wikipedia.org/wiki/Google_Chrome_version_history))

| Date       | Version |
| ---------- | ------- |
| 2018-10-16 | ![Chrome 70][chrome-70] |
| 2018-09-04 | ![Chrome 69][chrome-69] |
| 2018-07-24 | ![Chrome 68][chrome-68] |
| 2018-05-29 | ![Chrome 67][chrome-67] |
| 2018-04-17 | ![Chrome 66][chrome-66] |
| 2018-03-06 | ![Chrome 65][chrome-65] |
| 2018-01-23 | ![Chrome 64][chrome-64] |

### [Safari](https://developer.apple.com/safari/) ([Version History](https://en.wikipedia.org/wiki/Safari_version_history))

| Date       | Version |
| ---------- | ------- |
| 2018-03-29 | [![Safari 11.1][safari-11.1]](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_11_1.html#//apple_ref/doc/uid/TP40014305-CH14-SW1) |
| 2017-09-19 | [![Safari 11.0][safari-11]](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Safari_11_0/Safari_11_0.html) |
| 2017-03-27 | [![Safari 10.1][safari-10.1]](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_1.html) |
| 2016-09-20 | [![Safari 10.0][safari-10]](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html) |

### [Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/) ([Version History](https://en.wikipedia.org/wiki/Microsoft_Edge#Release_history))

| Date       | Version |
| ---------- | ------- |
| 2018-04-30 | [![Edge 17][edge-17]](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/17134/?compareWith=16299) |
| 2017-09-26 | [![Edge 16][edge-16]](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/16299/?compareWith=15063) |
| 2017-03-20 | [![Edge 15][edge-15]](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/15063/?compareWith=14393) |

## Thanks

- Inspired by [https://github.com/askmatey/babel-preset-modern](https://github.com/askmatey/babel-preset-modern)

[edge-11]: https://img.shields.io/badge/Edge-11-green.svg?style=flat-square
[edge-12]: https://img.shields.io/badge/Edge-12-green.svg?style=flat-square
[edge-13]: https://img.shields.io/badge/Edge-13-green.svg?style=flat-square
[edge-14]: https://img.shields.io/badge/Edge-14-green.svg?style=flat-square
[edge-15]: https://img.shields.io/badge/Edge-15-green.svg?style=flat-square
[edge-16]: https://img.shields.io/badge/Edge-16-green.svg?style=flat-square
[edge-17]: https://img.shields.io/badge/Edge-17-green.svg?style=flat-square
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
[firefox-53]: https://img.shields.io/badge/Firefox-53-green.svg?style=flat-square
[firefox-54]: https://img.shields.io/badge/Firefox-54-green.svg?style=flat-square
[firefox-55]: https://img.shields.io/badge/Firefox-55-green.svg?style=flat-square
[firefox-56]: https://img.shields.io/badge/Firefox-56-green.svg?style=flat-square
[firefox-56]: https://img.shields.io/badge/Firefox-56-green.svg?style=flat-square
[firefox-57]: https://img.shields.io/badge/Firefox-57-green.svg?style=flat-square
[firefox-58]: https://img.shields.io/badge/Firefox-58-green.svg?style=flat-square
[firefox-59]: https://img.shields.io/badge/Firefox-59-green.svg?style=flat-square
[firefox-60]: https://img.shields.io/badge/Firefox-60-green.svg?style=flat-square
[firefox-61]: https://img.shields.io/badge/Firefox-61-green.svg?style=flat-square
[firefox-62]: https://img.shields.io/badge/Firefox-62-red.svg?style=flat-square
[firefox-63]: https://img.shields.io/badge/Firefox%20Beta-63-red.svg?style=flat-square
[firefox-64]: https://img.shields.io/badge/Firefox%20Central-64-red.svg?style=flat-square
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
[chrome-57]: https://img.shields.io/badge/Chrome-57-green.svg?style=flat-square
[chrome-58]: https://img.shields.io/badge/Chrome-58-green.svg?style=flat-square
[chrome-59]: https://img.shields.io/badge/Chrome-59-green.svg?style=flat-square
[chrome-60]: https://img.shields.io/badge/Chrome-60-green.svg?style=flat-square
[chrome-61]: https://img.shields.io/badge/Chrome-61-green.svg?style=flat-square
[chrome-62]: https://img.shields.io/badge/Chrome-62-green.svg?style=flat-square
[chrome-63]: https://img.shields.io/badge/Chrome-63-green.svg?style=flat-square
[chrome-64]: https://img.shields.io/badge/Chrome-64-green.svg?style=flat-square
[chrome-65]: https://img.shields.io/badge/Chrome-65-green.svg?style=flat-square
[chrome-66]: https://img.shields.io/badge/Chrome-66-green.svg?style=flat-square
[chrome-67]: https://img.shields.io/badge/Chrome-67-green.svg?style=flat-square
[chrome-68]: https://img.shields.io/badge/Chrome-68-green.svg?style=flat-square
[chrome-69]: https://img.shields.io/badge/Chrome%20Beta-69-red.svg?style=flat-square
[chrome-70]: https://img.shields.io/badge/Chrome%20Canary-70-red.svg?style=flat-square

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
[opera-47]: https://img.shields.io/badge/Opera-47-green.svg?style=flat-square
[opera-50]: https://img.shields.io/badge/Opera-50-green.svg?style=flat-square
[opera-51]: https://img.shields.io/badge/Opera-51-green.svg?style=flat-square
[opera-52]: https://img.shields.io/badge/Opera-52-green.svg?style=flat-square
[opera-53]: https://img.shields.io/badge/Opera-53-green.svg?style=flat-square

[safari-7.1]: https://img.shields.io/badge/Safari-7.1-green.svg?style=flat-square
[safari-9]: https://img.shields.io/badge/Safari-9-green.svg?style=flat-square
[safari-10]: https://img.shields.io/badge/Safari-10-green.svg?style=flat-square
[safari-10.1]: https://img.shields.io/badge/Safari-10.1-green.svg?style=flat-square
[safari-11]: https://img.shields.io/badge/Safari-11-green.svg?style=flat-square
[safari-11.1]: https://img.shields.io/badge/Safari-11.1-green.svg?style=flat-square
[safari-none]: https://img.shields.io/badge/Safari-None-red.svg?style=flat-square
