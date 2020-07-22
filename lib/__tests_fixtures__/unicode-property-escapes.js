'use strict';

exports.actual = `
const regexGreekSymbol = /\\p{Script=Greek}/u;
regexGreekSymbol.test('π');
`;

exports.expected = `
"use strict";

const regexGreekSymbol = /\\p{Script=Greek}/u;
regexGreekSymbol.test('π');
`;
