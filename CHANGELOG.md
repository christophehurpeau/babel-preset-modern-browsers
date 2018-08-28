<a name="12.0.0"></a>
# [12.0.0](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v12.0.0-beta.1...v12.0.0) (2018-08-28)

babel 7


<a name="12.0.0-beta.1"></a>
# [12.0.0-beta.1](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v12.0.0-beta.0...v12.0.0-beta.1) (2018-04-27)

drop node 4 support


<a name="12.0.0-beta.0"></a>
# [12.0.0-beta.0](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v11.0.1...v12.0.0-beta.0) (2018-04-06)


### Features

* babel 7 and shipped proposals ([1dda800](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/1dda800))


<a name="11.0.1"></a>
## [11.0.1](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v11.0.0...v11.0.1) (2018-04-06)


<a name="11.0.0"></a>
# [11.0.0](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v10.0.1...v11.0.0) (2018-04-06)


### Features

* option es2018, remove option esnext and safari 10 ([e5836f5](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/e5836f5))


### BREAKING CHANGES

* option esnext and safari 10 removed


<a name="10.0.1"></a>
## [10.0.1](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v10.0.0...v10.0.1) (2017-10-22)

- update doc
- update dependencies


<a name="10.0.0"></a>
# [10.0.0](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v9.0.2...v10.0.0) (2017-08-15)


### Features

* add dynamic import syntax ([d0e7a7e](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/d0e7a7e))
* add object rest/spread ([d3c695f](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/d3c695f))
* enable `edge` and `safari10` by default ([c3212e7](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/c3212e7))
* firefox 53, safari 10.1 and edge 15 ([b66b6cd](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/b66b6cd))


<a name="9.0.2"></a>
## [9.0.2](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v9.0.1...v9.0.2) (2017-03-09)


<a name="9.0.1"></a>
## [9.0.1](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v9.0.0...v9.0.1) (2017-03-09)


### Bug Fixes

* reenable transform-async-to-generator ([7b26e8f](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/7b26e8f))


<a name="9.0.0"></a>
# [9.0.0](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v8.1.2...v9.0.0) (2017-03-08)


### Features

* async functions and exponentiation operator ([1f1682e](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/1f1682e))


### BREAKING CHANGES

* drop support firefox < 42, chrome < 55, opera < 42, safari < 10.1, option `safari10`


<a name="8.1.2"></a>
## [8.1.2](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v8.1.1...v8.1.2) (2017-03-03)

support node 4


<a name="8.1.1"></a>
## [8.1.1](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v8.1.0...v8.1.1) (2017-02-27)


### Bug Fixes

* missing dependencies ([f925a55](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/f925a55)), closes [#16](https://github.com/christophehurpeau/babel-preset-modern-browsers/issues/16)


<a name="8.1.0"></a>
# [8.1.0](https://github.com/christophehurpeau/babel-preset-modern-browsers/compare/v8.0.0...v8.1.0) (2017-02-25)


### Features

* add es2017 plugins and es2016, es2017 option ([ade31a8](https://github.com/christophehurpeau/babel-preset-modern-browsers/commit/ade31a8))


## 8.0

- Firefox 51 release   
Firefox 50 is no longer supported (removed `babel-plugin-transform-es2015-block-scoping`)
 
 
## 7.0

- remove object-rest (now supported in [babel 6.19](https://babeljs.io/blog/2016/11/16/6.19.0))
- add babel-plugin-transform-es2015-arrow-functions

## 6.0

- drop safari 9 support
- preset options

## 5.1

- added object-rest

## 5.0

- removed stage1, see #4 for discussion
- updated compatibility table

## 4.0

- uglify fixed issue https://github.com/mishoo/UglifyJS2/issues/1098L remove uglifyjs special preset
- add full-support preset: parameters, for...of and destructuring (see readme for details)
- Breaking: firefox 46 and edge 13 are no longer supported (upgrade to edge 14 and Firefox 47)

## 3.0

Webpack fixed https://github.com/webpack/webpack/issues/2522 and https://github.com/webpack/webpack/issues/2523
For preset `webpack2` and `webpack2-uglifyjs`, plugins `babel-plugin-transform-es2015-modules-commonjs` and `babel-plugin-transform-es2015-shorthand-properties` are removed.
Requires webpack `v2.1.0-beta.9`


## 2.0

Firefox 46 release
Firefox 45 is no longer supported
