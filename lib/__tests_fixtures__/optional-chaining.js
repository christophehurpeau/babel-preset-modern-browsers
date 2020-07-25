'use strict';

exports.actual = `
const foo = { baz: 42 };
const bar = null;
console.log(foo?.baz === 42 && bar?.baz === undefined);
`;

exports.expected = `
"use strict";

const foo = {
  baz: 42
};
const bar = null;
console.log(foo?.baz === 42 && bar?.baz === undefined);
`;
