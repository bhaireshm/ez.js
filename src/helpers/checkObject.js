import { isEmpty } from "./isEmpty";

module.exports = function checkObject(data, columns) {
  let obj = {};
  Object.entries(data).forEach((ele, i) => {
    columns.forEach(col => {
      if (ele[0] == col.field || ele[0] == 'id') {
        obj[ele[0]] = ele[1];
      }
    });
  });
  for (let key in obj) {
    if (isEmpty(obj[key])) return false
  }
  return true;
}