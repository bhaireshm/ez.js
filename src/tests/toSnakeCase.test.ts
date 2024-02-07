import toSnakeCase from '../helpers/toSnakeCase';

describe('toSnakeCase function', () => {
  // test('converts camelCase to snake_case', () => {
  //   const result = toSnakeCase('camel CaseString');
  //   expect(result).toBe('camel_casestring');
  // });

  // test('converts PascalCase to snake_case', () => {
  //   const result = toSnakeCase('PascalCaseString');
  //   expect(result).toBe('pascal_case_string');
  // });

  // test('handles empty string', () => {
  //   const result = toSnakeCase('');
  //   expect(result).toBe('');
  // });

  test('handles already snake_case string', () => {
    const result = toSnakeCase('already_snake_case');
    expect(result).toBe('already_snake_case');
  });

  // test('handles single character string', () => {
  //   const result = toSnakeCase('A');
  //   expect(result).toBe('_');
  // });

  // test('handles string with spaces', () => {
  //   const result = toSnakeCase('String with Spaces');
  //   expect(result).toBe('string_with_spaces');
  // });
});
