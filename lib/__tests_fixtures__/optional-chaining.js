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
console.log((foo === null || foo === void 0 ? void 0 : foo.baz) === 42 && (bar === null || bar === void 0 ? void 0 : bar.baz) === undefined);
`;
