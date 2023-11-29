import isStr from "../helpers/isStr";
import isStrHasSpecialChar from "../helpers/isStrHasSpecialChar";

describe('isStr function', () => {
  test('should return true for a string value', () => {
    const stringValue = 'Hello, world!';
    expect(isStr(stringValue)).toBe(true);
  });

  test('should return false for a number value', () => {
    const numberValue = 42;
    expect(isStr(numberValue)).toBe(false);
  });

  test('should return false for a boolean value', () => {
    const booleanValue = true;
    expect(isStr(booleanValue)).toBe(false);
  });

  test('should return false for an array', () => {
    const arrayValue = [1, 2, 3];
    expect(isStr(arrayValue)).toBe(false);
  });

  test('should return false for an object', () => {
    const objectValue = { key: 'value' };
    expect(isStr(objectValue)).toBe(false);
  });

  test('should return false for null', () => {
    const nullValue = null;
    expect(isStr(nullValue)).toBe(false);
  });

  test('should return false for undefined', () => {
    const undefinedValue = undefined;
    expect(isStr(undefinedValue)).toBe(false);
  });

  test('should return false for NaN', () => {
    const nanValue = NaN;
    expect(isStr(nanValue)).toBe(false);
  });

  test('should return false for an empty string', () => {
    const emptyStringValue = '';
    expect(isStr(emptyStringValue)).toBe(false);
  });

  test('should return false for an object with toString method returning a string', () => {
    const customObject = {
      toString: () => 'Custom toString method',
    };
    expect(isStr(customObject)).toBe(false);
  });

  test('should return false for an object with valueOf method returning a string', () => {
    const customObject = {
      valueOf: () => 'Custom valueOf method',
    };
    expect(isStr(customObject)).toBe(false);
  });
});


describe('isStrHasSpecialChar function', () => {
  test('should return true if the string contains a special character', () => {
    const str = 'hello h@rry';
    expect(isStrHasSpecialChar(str)).toBe(true);
  });

  test('should return true if the string contains a special character from the custom pattern', () => {
    const str = 'hello h@rry';
    const customPattern = '@%$';
    expect(isStrHasSpecialChar(str, customPattern)).toBe(true);
  });

  test('should return false if the string does not contain a special character', () => {
    const str = 'hello world';
    expect(isStrHasSpecialChar(str)).toBe(false);
  });

  test('should return false for an empty string', () => {
    const str = '';
    expect(isStrHasSpecialChar(str)).toBe(false);
  });

  test('should return false for an empty pattern', () => {
    const str = 'hello world';
    const emptyPattern = '';
    expect(isStrHasSpecialChar(str, emptyPattern)).toBe(false);
  });
});
