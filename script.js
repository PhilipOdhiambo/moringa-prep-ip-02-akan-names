// HTML input elements
var year = document.getElementById('year');
var month = document.getElementById('month');
var date = document.getElementById('date');
var gender  = document.getElementById('gender');

// HTML output elements
var birthDay = document.getElementById('birth-day');
var akanName = document.getElementById('akan-name');

//Data available for our app
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var akanMales = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var akanFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to validate date and year
function validInput(year, month, date) {
    if (year.length !== 4 || isNaN(parseInt(year))) {
        alert("invalid Year");
        return false
    } else if (parseInt(month) < 1 || parseInt(month) > 12) {
      console.log("invalid month");
    } else if (parseInt(date) < 1 || parseInt(date) > 31) {
      alert("invalid date");
      return false
    } else {
        return true
    }
}



function calculateDayIndex(year,month,date) {
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

    return dayIndex;
}



// Function to return Akan name
function returnAkanName(gender, indexOfDay) {
    var sex = gender.toLowerCase();
    if (sex === "male") {
        return akanMales[indexOfDay];
    } else if (sex === "female") {
        return akanFemales[indexOfDay];
    } else {
        return "No Gender Provided";
    }
}

// submit
function submit() {
    validateInput(year,month,date);
    let dayIndex = calculateDayIndex(year,month,date);
}

// Event handler
document.getElementById('submit').addEventListener('click',() =>{
    let yea = year.value
    let mont = month.value
    let dat = date.value
    let gende = gender.value
   if(validInput(yea,mont,dat)) {
       let dayIndex = calculateDayIndex(yea,mont,dat)
       birthDay.value = weekDays[dayIndex]
       akanName.value = returnAkanName(gende, dayIndex);
   }    

})


