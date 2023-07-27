const dateDiff = require("./getDateDifference");
const getDiffInHrs = require("./getDateDifferenceInHours");

function EZJS() {

    let DT = { now: Date.now };

    DT["diff"] = function (f, t) { getDiffInHrs(f, t) };
    DT["diff"] = function (f, t, o = {}) { if (o) dateDiff(f, t) };

    DT.diff();
}