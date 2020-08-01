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
var filterForm = d3.selectAll("input");
console.log(filterForm);
// trigger filter button and form input fields
filterButton.on("click", dataFilter);
filterForm.on("submit", dataFilter);

// define filter function
function dataFilter () {
  // prevent page from refreshing
  d3.event.preventDefault();
  // get date input value
  var dateInput = d3.select("#datetime");
  var dateValue = dateInput.property("value");

  // get city input value
  var cityInput = d3.select("#city");
  var cityValue = cityInput.property("value");
  
  // get state input value
  var stateInput = d3.select("#state");
  var stateValue = stateInput.property("value");
  
  // get country input value
  var countryInput = d3.select("#country");
  var countryValue = countryInput.property("value");
  
  // get shape input value
  var shapeInput = d3.select("#shape");
  var shapeValue = shapeInput.property("value");
  
  // define filtered data
  var filteredData = tableData.filter(ufoSighting => 
    (ufoSighting.datetime === dateValue 
    && ufoSighting.city === cityValue.toLowerCase() 
    && ufoSighting.state === stateValue.toLowerCase() 
    && ufoSighting.country === countryValue.toLowerCase() 
    && ufoSighting.shape === shapeValue.toLowerCase()
    ));
    // try creating filter for each  ??use for loop??
 
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

