import { reverseEachWordInSentence, reverseSentence, reverseStr } from '../helpers/reverseStr';

describe('reverseStr function', () => {
  test('should reverse a string without spaces', () => {
    expect(reverseStr('hello')).toBe('olleh');
    expect(reverseStr('world')).toBe('dlrow');
  });
});

describe('reverseEachWordInSentence function', () => {
  test('should reverse each word in a sentence', () => {
    expect(reverseEachWordInSentence('Hello world')).toBe('olleH dlrow');
    expect(reverseEachWordInSentence('TypeScript is great')).toBe('tpircSepyT si taerg');
  });
});

describe('reverseSentence function', () => {
  test('should reverse the order of words in a sentence', () => {
    expect(reverseSentence('Hello world')).toBe('world Hello');
    expect(reverseSentence('TypeScript is great')).toBe('great is TypeScript');
  });
});
