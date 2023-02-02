/**
 * Creates table with custom data.
 *
 * @param {Object} tableData
 * @param {Object[]} tableData.data - Array of objects
 * @param {String[]} tableData.fields - Fields to be shown
 * @param {String[]} tableData.fieldTitles - Field Names
 * @param {Object} tableData.tableProps - Field Names
 * @param {String} tableData.tableProps.id - Table id
 * @param {String[]} tableData.tableProps.classList - Table custom class list
 * @param {String[]} tableData.tableProps.style - Table custom styles
 * @returns [object HTMLArrayElement]
 */
export function createTable(tableData) {
  const { data = [], fields = [], fieldTitles = [], tableProps = {} } = tableData;

  const tbl = document.createElement("table");
  tbl.id = tableProps.id || "generic-table";
  tbl.classList = tableProps.classList || "";
  tbl.style = tableProps.style;
  tbl.style.width = "100%"; // If not required remove.

  const thead = document.createElement("thead");
  const thr = document.createElement("tr");

  fieldTitles.forEach((fieldTitle) => {
    const th = document.createElement("th");
    th.style = "";
    th.appendChild(document.createTextNode(fieldTitle));
    thr.appendChild(th);
  });
  thead.appendChild(thr);
  tbl.appendChild(thead);

  const tbdy = document.createElement("tbody");
  if (data.length > 0) {
    data.forEach((object) => {
      const tr = document.createElement("tr");
      fields.forEach((field) => {
        const td = document.createElement("td");
        td.appendChild(document.createTextNode(object[field]));
        tr.appendChild(td);
      });
      tbdy.appendChild(tr);
    });
  } else {
    const tr = document.createElement("tr");
    tr.style.textAlign = "center";
    const td = document.createElement("td");
    td.innerText = "No data found";
    tr.appendChild(td);
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);

  return tbl;
}