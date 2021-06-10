var year = document.getElementById('year').value;
var month = document.getElementById('month').value;
var day = document.getElementById('month').value;
var gender  = document.getElementById('gender').value;
var date = 50;

// Function to validate date and year
function validateInput(dateInput,yearInput) {
    var date = parseInt(dateInput);
    var year = parseInt(yearInput);
    // Check if year is four digits
    if (yearInput.length !== 4 || isNaN(year)) {
        console.log("invalid Year");
    } else if (date < 1 || date > 31) {
        console.log("invalid date")
    } else {
        calculateDay(date, month, year)
    }
}

// Function to caluculate Day
function calculateDay(date,month,year) {
  /* 
    Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
    where;
    CC - is the century digits. For example 1989 has CC = 19
    YY - is the Year digits (1989 has YY = 89)
    MM -  is the Month
    DD - is the Day of the month
    mod - is the modulus function ( % )
 */ 
    var cc = parseInt(year.substr(0,2));
    var yy = parseInt(year.substr(2));

    
    var day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
}

validateInput(3,"1234");
