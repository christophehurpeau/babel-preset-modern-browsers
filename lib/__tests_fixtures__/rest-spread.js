'use strict';

exports.actual = `
const spread = { a: 1, b: 2, c: 3 };
const { a, ...rest } = spread;
const O = {a: 1, ...spread};
`;

exports.expected = `
"use strict";

const spread = {
  a: 1,
  b: 2,
  c: 3
};
const {
  a,
  ...rest
} = spread;
const O = {
  a: 1,
  ...spread
};
`;
