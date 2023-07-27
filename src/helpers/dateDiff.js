/**
 * @param {Date} from 
 * @param {Date} to 
 */
function dateDiff(from, to) {
  from = new Date(from);
  to = new Date(to);
  let diffMs = to - from; // milliseconds between from & to
  let diffDays = Math.floor(diffMs / 86400000); // days
  let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  let str = "";
  str += diffDays ? diffDays + "d " : "";
  str += diffHrs ? diffHrs + "h" : "";
  str += diffMins ? " " + diffMins + "m" : "";
  return {
    short: str.trimEnd().trimStart().replace(/ {2}/g, " "),
    full: `${diffDays} day(s) ${diffHrs} hours, ${diffMins} minutes`,
    days: diffDays,
    hours: diffHrs,
    minutes: diffMins,
  };
}

module.exports = dateDiff;