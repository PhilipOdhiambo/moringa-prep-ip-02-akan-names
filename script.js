// HTML input elements
var year = document.getElementById('year').value;
var month = document.getElementById('month').value;
var date = document.getElementById('date').value;
var gender  = document.getElementById('gender').value;

// HTML output elements
var birthDay = document.getElementById('birth-day');
var akanName = document.getElementById('akan-name');

//Data available for our app
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var akanMales = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var akanFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to validate date and year
function validateInput(year, month, date) {
    if (year.length !== 4 || isNaN(parseInt(year))) {
        console.log("invalid Year");
    } else if (parseInt(month) < 1 || parseInt(month) > 12) {
      console.log("invalid month");
    } else if (parseInt(date) < 1 || parseInt(date) > 31) {
      console.log("invalid date");
    } else {
        return calculateDay(year, month, date);
    }
}


// Function to caluculate Day
function calculateDay(year,month,date) {
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
    var mm = parseInt(month);
    var dd = parseInt(date)
    
    var d = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

    // This method returns a float that should be converted to integer by dropping the decimal part
    var dayIndex = parseInt(d);

    // Since the days of the week is an array which is zero-based, subract 1
    dayIndex -= 1;

    return dayIndex;
}



// Function to return Akan name
function returnAkanName(gender, indexOfDay) {
    var sex = gender.toLocaleLowerCase();
    if (sex === "male") {
        return akanMales[indexOfDay];
    } else if (sex === "female") {
        return akanFemales[indexOfDay];
    } else {
        return "";
    }
}


// Event handler


