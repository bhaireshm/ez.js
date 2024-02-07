import { isBool } from '../helpers';

describe('isBool', () => {
  it('returns true for boolean values', () => {
    expect(isBool(true)).toBe(true);
    expect(isBool(false)).toBe(true);
    expect(isBool(Boolean(true))).toBe(true);
    expect(isBool(Boolean(false))).toBe(true);
  });

  it('returns false for non-boolean values', () => {
    expect(isBool('')).toBe(false);
    expect(isBool(0)).toBe(false);
    expect(isBool(1)).toBe(false);
    expect(isBool(null)).toBe(false);
    expect(isBool(undefined)).toBe(false);
    expect(isBool({})).toBe(false);
    expect(isBool([])).toBe(false);
    expect(isBool(() => { })).toBe(false);
    expect(isBool(new Date())).toBe(false);
    expect(isBool(/regex/)).toBe(false);
  });
});
