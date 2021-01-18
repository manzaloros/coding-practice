const solution = require('../non-leetcode-toy-problems/breakCamelCase.js');

test('true should be true', () => {
  expect(true).toBe(true);
});

describe('testing break camel case', () => {
  it('breaks up the camel cased word correctly', () => {
    const string = 'camelCasing';
    const inputActual = solution(string);
    const inputExpected = 'camel Casing';
    expect(inputActual).toEqual(inputExpected);
  });
});
