export type DateFormatI18n = {
  dayNames: string[];
  monthNames: string[];
  timeNames: string[];
  suffixes: string[];
};

export type DateFormatOptions = {
  /**
   * Use UTC timezone
   */
  utc?: boolean;

  /**
   * Use GMT timezone
   */
  gmt?: boolean;

  /**
   * Timezone offset in minutes, between -720 and +720 (±12 hours)
   */
  timezoneOffset?: number;
};

/**
 * Formats a date according to the specified mask.
 *
 * @param {string} [mask] - A string that contains the desired date format. If not provided, default mask is used.
 * @param {DateFormatOptions} [options] - An object that contains one or more properties that specify comparison options.
 * @return {string} - A string representation of the date in the specified mask.
 * @example
 * const date = new DateFormatter('2022-07-25T14:30:00.000Z');
 * console.log(date.format('yyyy-MM-dd HH:mm:ss Z', { gmt: true })); // 2022-07-25 20:00:00 GMT // TODO: wrong results
 * console.log(date.format('yyyy-MM-dd HH:mm:ss')); // 2022-07-25 15:30:00 // TODO: wrong results
 * console.log(date.format('dddd, MMMM d, yyyy')); // Monday, July 25, 2022
 * console.log(date.format('h:mm:ss TT')); // 8:00:00 PM
 */
export class DateFormatter extends Date {
  static readonly i18n: DateFormatI18n = {
    dayNames: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
    suffixes: ["th", "st", "nd", "rd"], // Localizable suffixes
  };

  static readonly masks: Record<string, string> = {
    default: "ddd MMM dd yyyy HH:mm:ss",
    shortDate: "M/d/yy",
    longDate: "dddd, MMMM d, yyyy",
    isoDate: "yyyy-MM-dd",
    isoTime: "HH:mm:ss",
    isoDateTime: "yyyy-MM-dd'T'HH:mm:ss",
    isoUtcDateTime: "UTC:yyyy-MM-dd'T'HH:mm:ss'Z'",
  };

  constructor(date?: string | number | Date) {
    // Initialize with current date if no date provided
    const inputDate = date || new Date();
    super(inputDate);
  }

  private static pad(val: number, len = 2): string {
    return String(val).padStart(len, "0");
  }

  private static getSuffix(day: number): string {
    const { suffixes } = DateFormatter.i18n;
    return day % 10 > 3 || (day % 100 >= 11 && day % 100 <= 13) ? suffixes[0] : suffixes[day % 10];
  }

  format(mask: string = DateFormatter.masks.default, options: DateFormatOptions = {}): string {
    // Check if date is valid after construction
    if (isNaN(this.getTime())) throw new Error("Invalid date");
    const { utc = false, gmt = false, timezoneOffset } = options;

    let date: Date = this;

    // Handle timezone offset
    if (timezoneOffset !== undefined) {
      if (timezoneOffset < -720 || timezoneOffset > 720) {
        throw new Error("Invalid timezone offset. Must be between -720 and +720 minutes");
      }

      // First convert to UTC
      const utcTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
      // Then apply the desired offset
      date = new Date(utcTime - -timezoneOffset * 60 * 1000);
    }

    const getMethod = (method: string): (() => number) => {
      const methodName = `${utc ? "getUTC" : "get"}${method}`;
      return date[methodName as keyof Date].bind(date) as () => number;
    };

    const d = getMethod("Date")();
    const D = getMethod("Day")();

    // h - for hour (12-hour clock), H - for hour (24-hour clock)
    const H = getMethod("Hours")();

    // m - without leading zero, mm - with leading zero
    const m = getMethod("Minutes")();

    // s - without leading zero, ss - with leading zero
    const s = getMethod("Seconds")();

    // S - without leading zero, SS - with leading zero, SSS - with milliseconds
    const L = getMethod("Milliseconds")();

    const M = getMethod("Month")();
    const y = getMethod("FullYear")();

    const flags: Record<string, () => string> = {
      a: () => (H < 12 ? DateFormatter.i18n.timeNames[0] : DateFormatter.i18n.timeNames[1]),
      A: () => (H < 12 ? DateFormatter.i18n.timeNames[2] : DateFormatter.i18n.timeNames[3]),
      d: () => String(d),
      dd: () => DateFormatter.pad(d),
      ddd: () => DateFormatter.i18n.dayNames[D],
      dddd: () => DateFormatter.i18n.dayNames[D + 7],
      M: () => String(M + 1),
      MM: () => DateFormatter.pad(M + 1),
      MMM: () => DateFormatter.i18n.monthNames[M],
      MMMM: () => DateFormatter.i18n.monthNames[M + 12],
      yy: () => String(y).slice(2),
      yyyy: () => String(y),
      h: () => String(H % 12 || 12),
      hh: () => DateFormatter.pad(H % 12 || 12),
      H: () => String(H),
      HH: () => DateFormatter.pad(H),
      m: () => String(m),
      mm: () => DateFormatter.pad(m),
      s: () => String(s),
      ss: () => DateFormatter.pad(s),
      l: () => DateFormatter.pad(L, 3),
      t: () => (H < 12 ? DateFormatter.i18n.timeNames[0] : DateFormatter.i18n.timeNames[1]),
      tt: () => (H < 12 ? DateFormatter.i18n.timeNames[2] : DateFormatter.i18n.timeNames[3]),
      T: () => (H < 12 ? DateFormatter.i18n.timeNames[4] : DateFormatter.i18n.timeNames[5]),
      TT: () => (H < 12 ? DateFormatter.i18n.timeNames[6] : DateFormatter.i18n.timeNames[7]),
      S: () => DateFormatter.getSuffix(d),
      Z: () => (gmt ? "GMT" : utc ? "UTC" : ""),
    };

    return mask.replace(
      /d{1,4}|M{1,4}|m{1,2}|yy(?:yy)?|([HhMsTt])\1?|S|Z|"[^"]*"|'[^']*'/g,
      (match) => {
        return match in flags ? flags[match]() : match.slice(1, match.length - 1);
      },
    );
  }
}

/**
 * Formats a date according to the specified mask.
 *
 * @param {string|number|Date} [date] - The date to format. If not provided, the current date is used.
 * @param {string} [mask] - A string that contains the desired date format. If not provided, default mask is used.
 * @param {DateFormatOptions} [options] - An object that contains one or more properties that specify comparison options.
 * @return {string} - A string representation of the date in the specified mask.
 * @example
 * const date = new Date('2020-08-26T14:30:00.000Z');
 * console.log(formatDate(date, 'dd/mm/yyyy HH:MM:ss')); // 26/08/2020 14:30:00
 * console.log(formatDate(date, 'dddd, MMMM Do')); // Wednesday, 26th August
 * console.log(formatDate(date, 'h:MM TT')); // 2:30 PM
 * console.log(formatDate(date, 'h:MM TT Z')); // 2:30 PM UTC+0
 */
export function formatDate(
  date?: string | number | Date,
  mask: string = DateFormatter.masks.default,
  options: DateFormatOptions = {},
): string {
  return new DateFormatter(date).format(mask, options);
}
