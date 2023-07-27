/**
 * @param {Date} from
 * @param {Date} to
 */
const getDiffInHrs = (from, to) => Math.floor(Math.abs((new Date(from) - new Date(to)) / 36e5));

module.exports = getDiffInHrs;