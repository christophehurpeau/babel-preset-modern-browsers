# babel-preset-modern-browsers

[![NPM Version](http://img.shields.io/npm/v/babel-preset-modern-browsers.svg?style=flat-square)](https://www.npmjs.org/package/babel-preset-modern-browsers)
![Edge 14](https://img.shields.io/badge/Edge-14-green.svg?style=flat-square)
![Firefox 47](https://img.shields.io/badge/Firefox-47-green.svg?style=flat-square)
![Chrome 51](https://img.shields.io/badge/Chrome-51-green.svg?style=flat-square)
![Opera 38](https://img.shields.io/badge/Opera-38-green.svg?style=flat-square)
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
  "presets": ["modern-browsers", "modern-browsers/safari9", "modern-browsers/stage1"]
}
```

### Presets

- modern-browsers
- modern-browsers/webpack2 use this instead if you use webpack
- modern-browsers/safari9 ![Safari 9](https://img.shields.io/badge/Safari-9-green.svg?style=flat-square) Add this if you need better safari9 support
- modern-browsers/stage1 add stage 1 or higher features
- modern-browsers/full-support add support for features below

## Features supported only with full-support

- default parameters: temporal dead zone, separate scope and new Function() support
- for...of: iterator closing
- destructuring: iterator closing, separate scope and new Function() support

More info in the compatibility table below

## Features not supported

- generators: iterator closing on firefox

## Compatibility Table

<table width="100%">
    <thead>
        <th>Feature</th>
        <th>Edge</th>
        <th>Firefox</th>
        <th>Chrome</th>
        <th>Opera</th>
        <th>Safari</th>
    </thead>
    <tr>
        <td colspan="8">
            <h4>Syntax</h4>
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-default_function_parameters">default parameters, without temporal dead zone, separate scope and new Function() support</a>
        </td>
        <td>14</td>
        <td>43</td>
        <td>49</td>
        <td>36</td>
        <td>No</td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-default_function_parameters">default parameters, with temporal dead zone, separate scope and new Function() support</a>
        </td>
        <td>14</td>
        <td>No</td>
        <td>49</td>
        <td>36</td>
        <td>No</td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-rest_parameters">rest parameters</a>
        </td>
        <td>12</td>
        <td>43</td>
        <td>47</td>
        <td>34</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-parameters">transform-es2015-parameters</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-spread">spread</a>
        </td>
        <td>13</td>
        <td>36</td>
        <td>46</td>
        <td>33</td>
        <td>Partial</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-spread">transform-es2015-spread</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_computed_properties">computed properties</a>
        </td>
        <td>12</td>
        <td>34</td>
        <td>44</td>
        <td>31</td>
        <td>7.1</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-computed-properties">transform-es2015-computed-properties</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-object_literal_extensions_shorthand_properties">shorthand properties</a>
        </td>
        <td>12</td>
        <td>33</td>
        <td>43</td>
        <td>30</td>
        <td>9</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-shorthand-properties">transform-es2015-shorthand-properties</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-for..of_loops"><code>for...of</code>, without iterator closing</a>
        </td>
        <td>13</td>
        <td>36</td>
        <td>39</td>
        <td>26</td>
        <td>Partial</td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-for..of_loops"><code>for...of</code>, with iterator closing</a>
        </td>
        <td>No</td>
        <td>No</td>
        <td>51</td>
        <td>38</td>
        <td>Partial</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-for-of">transform-es2015-for-of</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-template_strings">template string</a>
        </td>
        <td>13</td>
        <td>34</td>
        <td>41</td>
        <td>28</td>
        <td>9</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-template-literals">transform-es2015-template-literals</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_y_flag">Regexp sticky</a>
        </td>
        <td>13</td>
        <td>31</td>
        <td>49</td>
        <td>36</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-sticky-regex">transform-es2015-sticky-regex</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-RegExp_y_and_u_flags_u_flag">Regexp unicode</a>
        </td>
        <td>12</td>
        <td>46</td>
        <td>51</td>
        <td>38</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-unicode-regex">transform-es2015-unicode-regex</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/">destructuring, without iterator closing, separate scope, new Function() support</a>
        </td>
        <td>14</td>
        <td>47</td>
        <td>49</td>
        <td>36</td>
        <td>Partial</td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/">destructuring, with iterator closing, separate scope, new Function() support</a>
        </td>
        <td>No</td>
        <td>No</td>
        <td>52</td>
        <td>39</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-destructuring">transform-es2015-destructuring</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-Unicode_code_point_escapes_in_strings">Unicode Strings</a>
        </td>
        <td>12</td>
        <td>45</td>
        <td>44</td>
        <td>31</td>
        <td>9</td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-octal_and_binary_literals">Octal/Binary Numbers</a>
        </td>
        <td>12</td>
        <td>36</td>
        <td>41</td>
        <td>28</td>
        <td>9</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-literals">transform-es2015-literals</a>
        </td>
    </tr>

    <tr>
        <td colspan="8">
            <h4>Bindings</h4>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-const"><code>const</code></a>
        </td>
        <td>14</td>
        <td>Partial</td>
        <td>49</td>
        <td>36</td>
        <td>No</td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-let"><code>let</code></a>
        </td>
        <td>14</td>
        <td>Partial</td>
        <td>49</td>
        <td>36</td>
        <td>Partial</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-block-scoping">transform-es2015-block-scoping</a> (also known as “lexical declarations”)
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-block-level_function_declaration"><code>block-level function declaration</code></a>
        </td>
        <td>11</td>
        <td>46</td>
        <td>41</td>
        <td>28</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-block-scoped-functions">transform-es2015-block-scoped-functions</a>
        </td>
    </tr>

    <tr>
        <td colspan="8">
            <h4>Functions</h4>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-arrow_functions">arrow functions</a>
        </td>
        <td>13</td>
        <td>45</td>
        <td>49</td>
        <td>36</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-arrow-functions">transform-es2015-arrow-functions</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-arrow_functions">classes</a>
        </td>
        <td>13</td>
        <td>45</td>
        <td>49</td>
        <td>36</td>
        <td>9 (partial)</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-classes">transform-es2015-classes</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-super">super</a>
        </td>
        <td>13</td>
        <td>45</td>
        <td>49</td>
        <td>36</td>
        <td>Partial</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-object-super">transform-es2015-object-super</a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-generators">generators without <code>yield *</code>, iterator closing</a>
        </td>
        <td>13</td>
        <td>45</td>
        <td>49</td>
        <td>36</td>
        <td>No</td>
    </tr>
    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-generators">generators, <code>yield *</code>, iterator closing</a>
        </td>
        <td>13</td>
        <td>No</td>
        <td>51</td>
        <td>38</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-regenerator">transform-regenerator</a>
        </td>
    </tr>

    <tr>
        <td colspan="8">
            <h4>Built-ins</h4>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-Symbol_typeof_support">typeof Symbol</a>
        </td>
        <td>12</td>
        <td>36</td>
        <td>38</td>
        <td>25</td>
        <td>9</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-typeof-symbol">transform-es2015-typeof-symbol</a>
        </td>
    </tr>

    <tr>
        <td colspan="8">
            <h4>Built-in extensions</h4>
        </td>
    </tr>

    <tr>
        <td>
            <a href="https://kangax.github.io/compat-table/es6/#test-function_name_property">function name</a>
        </td>
        <td>Partial</td>
        <td>Partial</td>
        <td>52</td>
        <td>39</td>
        <td>Partial</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-es2015-function-name">transform-es2015-function-name</a>
        </td>
    </tr>

    <tr>
        <td colspan="8">
            <h4>Finished Proposals</h4>
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://kangax.github.io/compat-table/esnext/#test-exponentiation_(**)_operator">exponentiation operator</a>
        </td>
        <td>14</td>
        <td>No</td>
        <td>52</td>
        <td>39</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/transform-exponentiation-operator">transform-exponentiation-operator</a>
        </td>
    </tr>
    <tr>
        <td colspan="8">
            <h4>Stage 3</h4>
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://kangax.github.io/compat-table/esnext/#test-async_functions"><code>async</code>/<code>await</code></a>
        </td>
        <td>14</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/babel-plugin-syntax-trailing-function-commas">transform-async-to-generator</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://kangax.github.io/compat-table/esnext/#test-trailing_commas_in_function_syntax">trailing commas in function</a>
        </td>
        <td>14</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td colspan="8">
            ↳ <a href="https://babeljs.io/docs/plugins/babel-plugin-syntax-trailing-function-commas">babel-plugin-syntax-trailing-function-commas</a>
        </td>
    </tr>
</table>

## Release Dates

### [Firefox](https://wiki.mozilla.org/RapidRelease/Calendar)

| Date       | Version |
| ---------- | ------- |
| 2016-09-13 | 49 |
| 2016-08-02 | 48 |
| 2016-06-07 | 47 |
| 2016-04-26 | 46 |
| 2016-03-08 | 45 |
| 2016-01-26 | 44 |

### [Chrome](https://www.chromium.org/developers/calendar)

| Date       | Version |
| ---------- | ------- |
| 2016-09-06? | 53 |
| 2016-07-26? | 52 |
| 2016-05-25  | 51 |
| 2016-04-13  | 50 |
| 2016-03-02  | 49 |

## Thanks

- Inspired by [https://github.com/askmatey/babel-preset-modern](https://github.com/askmatey/babel-preset-modern)
