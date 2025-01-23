/** Used to compose unicode character classes. */
const AstralRange = "\\ud800-\\udfff";
const ComboMarksRange = "\\u0300-\\u036f";
const reComboHalfMarksRange = "\\ufe20-\\ufe2f";
const ComboSymbolsRange = "\\u20d0-\\u20ff";
const ComboMarksExtendedRange = "\\u1ab0-\\u1aff";
const ComboMarksSupplementRange = "\\u1dc0-\\u1dff";
const ComboRange =
  ComboMarksRange +
  reComboHalfMarksRange +
  ComboSymbolsRange +
  ComboMarksExtendedRange +
  ComboMarksSupplementRange;
const DingbatRange = "\\u2700-\\u27bf";
const LowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
const MathOpRange = "\\xac\\xb1\\xd7\\xf7";
const NonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
const PunctuationRange = "\\u2000-\\u206f";
const SpaceRange =
  " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
const UpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
const VarRange = "\\ufe0e\\ufe0f";
const BreakRange = MathOpRange + NonCharRange + PunctuationRange + SpaceRange;

/** Used to compose unicode capture groups. */
const Apos = "['\u2019]";
const Break = `[${BreakRange}]`;
const Combo = `[${ComboRange}]`;
const Digit = "\\d";
const Dingbat = `[${DingbatRange}]`;
const Lower = `[${LowerRange}]`;
const Misc = `[^${AstralRange}${BreakRange + Digit + DingbatRange + LowerRange + UpperRange}]`;
const Fitz = "\\ud83c[\\udffb-\\udfff]";
const Modifier = `(?:${Combo}|${Fitz})`;
const NonAstral = `[^${AstralRange}]`;
const Regional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
const SurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
const Upper = `[${UpperRange}]`;
const ZWJ = "\\u200d";

/** Used to compose unicode regexes. */
const MiscLower = `(?:${Lower}|${Misc})`;
const MiscUpper = `(?:${Upper}|${Misc})`;
const OptContrLower = `(?:${Apos}(?:d|ll|m|re|s|t|ve))?`;
const OptContrUpper = `(?:${Apos}(?:D|LL|M|RE|S|T|VE))?`;
const reOptMod = `${Modifier}?`;
const OptVar = `[${VarRange}]?`;
const OptJoin = `(?:${ZWJ}(?:${[NonAstral, Regional, SurrPair].join("|")})${OptVar + reOptMod})*`;
const OrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
const OrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
const Seq = OptVar + reOptMod + OptJoin;
const Emoji = `(?:${[Dingbat, Regional, SurrPair].join("|")})${Seq}`;

const reUnicodeWords = RegExp(
  [
    `${Upper}?${Lower}+${OptContrLower}(?=${[Break, Upper, "$"].join("|")})`,
    `${MiscUpper}+${OptContrUpper}(?=${[Break, Upper + MiscLower, "$"].join("|")})`,
    `${Upper}?${MiscLower}+${OptContrLower}`,
    `${Upper}+${OptContrUpper}`,
    OrdUpper,
    OrdLower,
    `${Digit}+`,
    Emoji,
  ].join("|"),
  "g",
);

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
export default function unicode(string: string) {
  return string.match(reUnicodeWords);
}

export const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2}[a-z]|[\\d][a-zA-Z]|[a-zA-Z][\\d]|[^a-zA-Z0-9 ]/,
);

/** Used to match words composed of alphanumeric characte. */
export const reAsciiWord = /[^\\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
