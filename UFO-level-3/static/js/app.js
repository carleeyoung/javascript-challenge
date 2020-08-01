// from data.js
var tableData = data;

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

// reference filter button, input field, and dropdown options
var filterButton = d3.select("#filter-btn");
var filterForm = d3.select("form");
var option = d3.select("option");
var select = d3.select("#Dropdown")
var selectedOption = select.property("value");
var listElement = d3.select(".list-group");

// Trigger filter data menu
select.on("change", filterTable);

// filter form input
filterList = ['<li class="filter list-group-item"><label for="date">Enter a Date</label><input class="form-control" id="datetime" type="text" placeholder="1/11/2011"></li>',
'<li class="filter list-group-item"><label for="city">Enter a City</label><input class="form-control" id="city" type="text" placeholder="benton"></li>',
'<li class="filter list-group-item"><label for="state">Enter a State</label><input class="form-control" id="state" type="text" placeholder="ar"></li>',
'<li class="filter list-group-item"><label for="country">Enter a Country</label><input class="form-control" id="country" type="text" placeholder="us"></li>',
'<li class="filter list-group-item"><label for="shapr">Enter a Shape</label><input class="form-control" id="shape" type="text" placeholder="circle"></li>'];

// create filter functions
function filterTable () {
  var selectedOption = select.property("value");
  listElement.html("");

  if (selectedOption === "Date") {
    // append html to add filter element to form list
    listElement.append("li").html(filterList[0]);
    filterButton.on("click", dateFilter);
    filterForm.on("submit", dateFilter);
  }
  else if (selectedOption === "City") {
    // append html to add filter element to form list
    listElement.append("li").html(filterList[1]);
    filterButton.on("click", cityFilter);
    filterForm.on("submit", cityFilter);
  }
  else if (selectedOption === "State") {      
    // append html to add filter element to form list
    listElement.append("li").html(filterList[2]);
    filterButton.on("click", stateFilter);
    filterForm.on("submit", stateFilter);
  }
  else if (selectedOption === "Country") {      
    // append html to add filter element to form list
    listElement.append("li").html(filterList[3]);
    filterButton.on("click", countryFilter);
    filterForm.on("submit", countryFilter);
  }
  else if (selectedOption === "Shape") {
    // append html to add filter element to form list
    listElement.append("li").html(filterList[4]);
    filterButton.on("click", shapeFilter);
    filterForm.on("submit", shapeFilter);
  }
};

function dateFilter () {
  // prevent page from refreshing
  d3.event.preventDefault();
  // get date input value
  var dateInput = d3.select("#datetime");
  var dateValue = dateInput.property("value");
  // define filtered data
  var filteredData = tableData.filter(ufoSighting => 
    (ufoSighting.datetime === dateValue)
    );
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

function cityFilter () {
  // prevent page from refreshing
  d3.event.preventDefault();  
  // get city input value
  var cityInput = d3.select("#city");
  var cityValue = cityInput.property("value");
  // define filtered data
  var filteredData = tableData.filter(ufoSighting => 
    (ufoSighting.city === cityValue.toLowerCase()
    ));
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

function stateFilter () {
  // prevent page from refreshing
  d3.event.preventDefault();  
  // get state input value
  var stateInput = d3.select("#state");
  var stateValue = stateInput.property("value");
    // define filtered data
  var filteredData = tableData.filter(ufoSighting => 
    (ufoSighting.state === stateValue.toLowerCase() 
    ));
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
  
function countryFilter () {
  // prevent page from refreshing
  d3.event.preventDefault();
  // get country input value
  var countryInput = d3.select("#country");
  var countryValue = countryInput.property("value");
  // define filtered data
  var filteredData = tableData.filter(ufoSighting => 
    (ufoSighting.country === countryValue.toLowerCase() 
    ));
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
  
function shapeFilter () {
  // prevent page from refreshing
  d3.event.preventDefault();
  // get shape input value
  var shapeInput = d3.select("#shape");
  var shapeValue = shapeInput.property("value");
  // define filtered data
  var filteredData = tableData.filter(ufoSighting => 
    (ufoSighting.shape === shapeValue.toLowerCase()
    ));
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
 
filterTable();