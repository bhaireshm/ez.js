/**
 * @param {Date} from
 * @param {Date} to
 */
export const getDiffInHrs = (from, to) => Math.floor(Math.abs((new Date(from) - new Date(to)) / 36e5));