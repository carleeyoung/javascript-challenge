// from data.js
var tableData = data;
console.log(tableData);
// table body
var tbody = d3.select("tbody");

// add table data in rows
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// reference filter button and input field
var filterButton = d3.select("#filter-btn");

var filterForm = d3.select("form");

filterButton.on("click", dateFilter);
filterForm.on("submit", dateFilter);

// define filter function

function dateFilter () {
  // prevent page from refreshing
  d3.event.preventDefault();
  // select element and get raw html node
  var dateInput = d3.select("#datetime");
  console.log(dateInput);
  // get the value property of the input element
  var dateValue = dateInput.property("value");
  console.log(dateValue);
  console.log(tableData);
  console.log(data);
  // define filtered data
  var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === dateValue);
  console.log(filteredData);
  // clear data from table
  d3.select("tbody").html("");
  // re-populate table with date matching dateInput
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);  
    });
  });
};