// Select the Table Body
var tbody = d3.select('tbody');

// Loop through the data.js Table and Print to the Console
console.log(data);

//Create a Function to Create Rows & Cells One at a Time and then Append Data

//Loop through Each Row of the data.js Table
data.forEach(function(ufo_sightings) {
    console.log(ufo_sightings);
    //Create a Row in the Table Body for Each Row of the data.js Table
    var row = tbody.append('tr');
    //Pull the Key, Value Pairs from Each Field in Each Row and Print to the Console
    Object.entries(ufo_sightings).forEach(function([key, value]) {
        console.log(key, value);
        //Create the Cells for Each Row Corresponding to the Columns of data.js Table
        var cell = row.append('td');
        //Push the Data into Cells
        cell.text(value);
        });
});



//Filter through the Data Based on the Date

//Assign data.js Data to Variable
var dt = data;

//Assign Action to Button Click and Form Submit
var button = d3.select('button');
button.on('click', runEnter);

var form = d3.select('form');
form.on('submit', runEnter);

//Create Function to Allow Button Click and Form Submit
//Some of the Code Obtained from JavaScript Day 3 Activity 9
function runEnter() {
    //Drop the Old Table Values
    tbody.selectAll('tr').remove();

    //Prevent Refresh on Button Click and Form Submit
    d3.event.preventDefault();

    //Assign the User Input to a Variable
    var date_value = d3.select('#datetime').property('value');

    //Print the Input Value to the Console
    console.log(date_value);

    //Apply the Filter
    if (date_value === "") {
        var date_filter = dt;
    }
    else {
        var date_filter = dt.filter(dt1=>dt1.datetime === date_value);
    }

    //Print the Filtered Values to the Console
    console.log(`The filtered values are: ${date_filter}`);

    //Replace the Values in the Table with the Filtered Values
    //Append the New Values
    date_filter.forEach(function(ufo_sightings) {
        //Append Rows
        var row1 = tbody.append('tr');
        //Pull the Key-Value Pairs from Each Field in Each Row in the dt_filter
        Object.entries(ufo_sightings).forEach(function([key, value]) {
            console.log(key, value);
            //Append Cells for Each Field in Each Row
            var cell1 = row1.append('td');
            //Pull in Values to the Cells
            cell1.text(value);
        })
    })
}