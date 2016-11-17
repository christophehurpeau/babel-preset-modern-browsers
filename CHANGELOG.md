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
