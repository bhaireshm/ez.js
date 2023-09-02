/**
 * Creates a table element with custom data based on the provided input.
 *
 * @param {object} tableData - An object containing the table data and properties.
 * @param {Array<object>} tableData.data - An array of objects representing the data to be displayed in the table.
 * @param {Array<string>} tableData.fields - An array of field names to be shown as columns in the table.
 * @param {Array<string>} tableData.fieldTitles - An array of field titles to be displayed as column headers in the table.
 * @param {object} tableData.tableProps - An object containing additional properties for the table.
 * @param {string} [tableData.tableProps.id] - The id attribute of the table element. If not provided, a default id of "generic-table" is used.
 * @param {Array<string>} [tableData.tableProps.classList] - An array of custom class names to be added to the table element.
 * @param {string} [tableData.tableProps.style] - Custom CSS styles to be applied to the table element.
 * @returns {object} - The dynamically created table element with the provided data and properties.
 */
function createTable(tableData) {
  const { data = [], fields = [], fieldTitles = [], tableProps = {} } = tableData;

  if (!document) throw new Error("`document` is not accessible.");

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

module.exports = createTable;
