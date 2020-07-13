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



//Filter through the Data Based on the Date, City, State, Country, & UFO Shape

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

    //Assign the User Inputs to their Respective Variables
    var date_value = d3.select('#datetime').property('value');
    var city_value = d3.select('#city').property('value');
    var state_value = d3.select('#state').property('value');
    var country_value = d3.select('#country').property('value');
    var shape_value = d3.select('#shape').property('value');


    //Print the Input Values to the Console
    console.log(date_value);
    console.log(city_value);
    console.log(state_value);
    console.log(country_value);
    console.log(shape_value);

    //Apply the Filters

    // Apply the Datetime Filter
    if (date_value === "") {
        var date_filter = dt;
    }
    else {
        var date_filter = dt.filter(dt1=>dt1.datetime === date_value);
    }
    
    // Apply the City Filter
    if (city_value === "") {
        var city_filter = date_filter;
    }
    else {
        var city_filter = date_filter.filter(dt2=>dt2.city === city_value);
    }

    // Apply the State Filter
    if (state_value === "") {
        var state_filter = city_filter;
    }
    else {
        var state_filter = city_filter.filter(dt3=>dt3.state === state_value);
    }

    // Apply the Country Filter
    if (country_value === "") {
        var country_filter = state_filter;
    }
    else {
        var country_filter = state_filter.filter(dt4=>dt4.country === country_value);
    }

    // Apply the UFO Shape Filter
    if (shape_value === "") {
        var shape_filter = country_filter;
    }
    else {
        var shape_filter = country_filter.filter(dt5=>dt5.shape === shape_value);
    }

    //Print the Filtered Values to the Console
    console.log(`The data is: ${date_filter}`);
    console.log(shape_filter);



    //Replace the Values in the Table with the Filtered Values
    //Append the New Values
    shape_filter.forEach(function(ufo_sightings) {
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