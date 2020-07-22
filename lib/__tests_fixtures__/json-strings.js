'use strict';

exports.actual = `
console.log('\u2028');
`;

exports.expected = `
"use strict";

console.log('\u2028');
`;
