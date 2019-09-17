// from data.js
var table = data;

// get table references
var tbody = d3.select("tbody");

function table(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    var eachRow = tbody.append("tr");
    Object.values(dataRow).forEach((value) => {
      var singleData = row.append("td");
      singleData.text(value);
    });
  });
}
var filters = {};



function filterTable() {
  let filteredData = tableData;
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
  buildTable(filteredData);
}

function updateFilters() {
  var changedElement = d3.select(this).select("input");
  var changeValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  if (value) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
  filterTable();

}

d3.selectAll(".filter").on("change", updateFilters);

buildTable(table);
