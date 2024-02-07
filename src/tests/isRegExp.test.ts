import isRegExp from '../helpers/isRegExp';

describe('isRegexp', () => {
  it('should return true for a regular expression', () => {
    expect(isRegExp(/[a-z]/)).toBe(true);
  });

  it('should return false for non-regular expressions', () => {
    const testCases = [null, undefined, 'hello', 42, { key: 'value' }];

    testCases.forEach((testCase) => {
      expect(isRegExp(testCase)).toBe(false);
    });
  });
});
