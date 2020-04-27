// from data.js
var tableData = data;
var tbody = d3.select("tbody");
//console.log(tableData);

// use function instead
function createTable(data) {
    tbody.html("");
  
    data.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
      });
    });
  }

//table for all data
  createTable(tableData);

  //function for filtered data & button
  function buttonClick() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData;
    
    if (inputValue) {
      filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  }
  
  // table for filtered
  createTable(filteredData);
  } //end of function
  
  // filter button
  var button = d3.select("#filter-btn");
  button.on("click", buttonClick);