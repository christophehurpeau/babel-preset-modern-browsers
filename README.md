# babel-preset-modern-browsers

[![NPM Version](http://img.shields.io/npm/v/babel-preset-modern-browsers.svg?style=flat-square)](https://www.npmjs.org/package/babel-preset-modern-browsers)
![Edge 14](https://img.shields.io/badge/Edge-14-green.svg?style=flat-square)
![Firefox 47](https://img.shields.io/badge/Firefox-47-green.svg?style=flat-square)
![Chrome 51](https://img.shields.io/badge/Chrome-51-green.svg?style=flat-square)
![Opera 38](https://img.shields.io/badge/Opera-38-green.svg?style=flat-square)
![Safari 10](https://img.shields.io/badge/Safari-10-green.svg?style=flat-square)
![Safari 9](https://img.shields.io/badge/Safari-9-orange.svg?style=flat-square)

Transpile with babel only for modern browsers.


* [Installation](#installation)
* [Usage](#usage)
* [Presets](#presets)
* [Compatibility Table](#compatibility-table)
* [Release Dates](#release-dates)

## Installation

```sh
npm install --save-dev babel-preset-modern-browsers
```

## Usage

Add the following line to your `.babelrc` file:

```json
{
  "presets": ["modern-browsers", "modern-browsers/safari9"]
}
```

### Presets

- modern-browsers
- modern-browsers/webpack2 use this instead if you use webpack
- modern-browsers/safari9 ![Safari 9](https://img.shields.io/badge/Safari-9-green.svg?style=flat-square) Add this if you need better safari9 support
- modern-browsers/full-support add support for features below
- modern-browsers/object-rest add if you need object-rest (stage 2)

Note: to support `async` functions and other proposals, you can add babel preset `stage-1` ot the stage you want. There is also [babel-preset-modern-browsers-stage-1](https://www.npmjs.com/package/babel-preset-modern-browsers-stage-1).

## Features supported only with full-support

- default parameters: temporal dead zone, separate scope and new Function() support
- for...of: iterator closing
- destructuring: iterator closing, separate scope and new Function() support

More info in the compatibility table below

## Features not supported

- generators: iterator closing on firefox

## Compatibility Table


| Feature | Edge | Firefox | Chrome | Opera | Safari |
| ------- | ---- | ------- | ------ | ----- | ------ |
| <h3>ES2015</h3> ||||||
| <h4>Syntax</h4> ||||||
| [default parameters, without temporal dead zone, separate scope and new Function() support](https://kangax.github.io/compat-table/es6/#test-default_function_parameters) | 14 | 43 | 49 | 36 | 10 |
| [default parameters, with temporal dead zone and separate scope](https://kangax.github.io/compat-table/es6/#test-default_function_parameters) | 14 | 51 | 49 | 36 | 10 |
| [default parameters, with new Function() support](https://kangax.github.io/compat-table/es6/#test-default_function_parameters) | 14 | No | 49 | 36 | 10 |
| ↳ [transform-es2015-parameters](https://babeljs.io/docs/plugins/transform-es2015-parameters) ||||||
| [rest parameters](https://kangax.github.io/compat-table/es6/#test-rest_parameters) | 12 | 43 | 47 | 34 | 10 |
| ↳ [transform-es2015-parameters](https://babeljs.io/docs/plugins/transform-es2015-parameters) ||||||
| [spread](https://kangax.github.io/compat-table/es6/#test-spread) | 13 | 36 | 46 | 33 | 10 |
| ↳ [transform-es2015-spread](https://babeljs.io/docs/plugins/transform-es2015-spread) ||||||
| [computed properties](https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_computed_properties) | 12 | 34 | 44 | 31 | 7.1 |
| ↳ [transform-es2015-computed-properties](https://babeljs.io/docs/plugins/transform-es2015-computed-properties) ||||||
| [shorthand properties](https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_shorthand_properties) | 12 | 33 | 43 | 30 | 9 |
| ↳ [transform-es2015-shorthand-properties](https://babeljs.io/docs/plugins/transform-es2015-shorthand-properties) ||||||
| [`for...of`, without iterator closing](https://kangax.github.io/compat-table/es6/#test-for..of_loops) | 13 | 36 | 39 | 26 | 10 |
| [`for...of`, with iterator closing](https://kangax.github.io/compat-table/es6/#test-for..of_loops) | 14 | No | 51 | 38 | 10 |
| ↳ [transform-es2015-for-of](https://babeljs.io/docs/plugins/transform-es2015-for-of) ||||||
| [template string](https://kangax.github.io/compat-table/es6/#test-template_strings) | 13 | 34 | 41 | 28 | 9 |
| ↳ [transform-es2015-template-literals](https://babeljs.io/docs/plugins/transform-es2015-template-literals) ||||||
| [Regexp sticky](https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_y_flag) | 13 | 31 | 49 | 36 | 10 |
| ↳ [transform-es2015-sticky-regex](https://babeljs.io/docs/plugins/transform-es2015-sticky-regex) ||||||
| [Regexp unicode](https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_u_flag) | 12 | 46 | 51 | 38 | 10 |
| ↳ [transform-es2015-unicode-regex](https://babeljs.io/docs/plugins/transform-es2015-unicode-regex) ||||||
| [destructuring, without iterator closing, separate scope, new Function() support](https://kangax.github.io/compat-table/es6/) | 14 | 47 | 49 | 36 | 10 |
| [destructuring, with iterator closing, separate scope, new Function() support](https://kangax.github.io/compat-table/es6/) | No | No | 52 | 39 | 10 |
| ↳ [transform-es2015-destructuring](https://babeljs.io/docs/plugins/transform-es2015-destructuring) ||||||
| [Unicode Strings](https://kangax.github.io/compat-table/es6/#test-Unicode_code_point_escapes_in_strings) | 12 | 45 | 44 | 31 | 9 |
| [Octal/Binary Numbers](https://kangax.github.io/compat-table/es6/#test-octal_and_binary_literals) | 12 | 36 | 41 | 28 | 9 |
| ↳ [transform-es2015-literals](https://babeljs.io/docs/plugins/transform-es2015-literals) ||||||
| <h4>Bindings</h4> ||||||
| [`const`](https://kangax.github.io/compat-table/es6/#test-const) | 14 | 51 | 49 | 36 | 10 |
| [`let`](https://kangax.github.io/compat-table/es6/#test-let) | 14 | 51 | 49 | 36 | 10 |
| ↳ [transform-es2015-block-scoping](https://babeljs.io/docs/plugins/transform-es2015-block-scoping) ||||||
| [`block-level function declaration`](https://kangax.github.io/compat-table/es6/#test-block-level_function_declaration) | 11 | 46 | 41 | 28 | 10 |
| ↳ [transform-es2015-block-scoped-functions](https://babeljs.io/docs/plugins/transform-es2015-block-scoped-functions) ||||||
| <h4>Functions</h4> ||||||
| [arrow functions](https://kangax.github.io/compat-table/es6/#test-arrow_functions) | 13 | 45 | 49 | 36 | 10 |
| ↳ [transform-es2015-arrow-functions](https://babeljs.io/docs/plugins/transform-es2015-arrow-functions) ||||||
| [classes](https://kangax.github.io/compat-table/es6/#test-arrow_functions) | 13 | 45 | 49 | 36 | 10 |
| ↳ [transform-es2015-classes](https://babeljs.io/docs/plugins/transform-es2015-classes) ||||||
| [super](https://kangax.github.io/compat-table/es6/#test-super) | 13 | 45 | 49 | 36 | 10 |
| ↳ [transform-es2015-object-super](https://babeljs.io/docs/plugins/transform-es2015-object-super) ||||||
| [generators without `yield *`, iterator closing](https://kangax.github.io/compat-table/es6/#test-generators) | 13 | 45 | 49 | 36 | 10 |
| [generators, `yield *`, iterator closing](https://kangax.github.io/compat-table/es6/#test-generators) | 13 | No | 51 | 38 | 10 |
| ↳ [transform-regenerator](https://babeljs.io/docs/plugins/transform-regenerator) ||||||
| <h4>Built-ins</h4> ||||||
| [typeof Symbol](https://kangax.github.io/compat-table/es6/#test-Symbol_typeof_support) | 12 | 36 | 38 | 25 | 9 |
| ↳ [transform-es2015-typeof-symbol](https://babeljs.io/docs/plugins/transform-es2015-typeof-symbol) ||||||
| <h4>Built-in extensions</h4> ||||||
| [function name](https://kangax.github.io/compat-table/es6/#test-function_name_property) | Partial | Partial | 52 | 39 | 10 |
| ↳ [transform-es2015-function-name](https://babeljs.io/docs/plugins/transform-es2015-function-name) ||||||
| <h3>ES2016</h3> ||||||
| [exponentiation operator](http://kangax.github.io/compat-table/es2016plus/#test-exponentiation_(**)_operator) | 14 | No | 52 | 39 | 10 |
| ↳ [transform-exponentiation-operator](https://babeljs.io/docs/plugins/transform-exponentiation-operator) ||||||

## Release Dates

### [Firefox](https://wiki.mozilla.org/RapidRelease/Calendar)

| Date       | Version |
| ---------- | ------- |
| 2016-12-13 | 50.0.1 |
| 2016-11-08 | 50 |
| 2016-09-20 | 49 |
| 2016-08-02 | 48 |
| 2016-06-07 | 47 |
| 2016-04-26 | 46 |
| 2016-03-08 | 45 |
| 2016-01-26 | 44 |

### [Chrome](https://www.chromium.org/developers/calendar)

| Date       | Version |
| ---------- | ------- |
| 2016-12-06? | 55 |
| 2016-10-18? | 54 |
| 2016-08-31  | 53 |
| 2016-07-20  | 52 |
| 2016-05-25  | 51 |
| 2016-04-13  | 50 |
| 2016-03-02  | 49 |

## Thanks

- Inspired by [https://github.com/askmatey/babel-preset-modern](https://github.com/askmatey/babel-preset-modern)
