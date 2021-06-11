
// Function to validate date and year
function valid(year, month, date) {
    if (year.length !== 4 || isNaN(parseInt(year))) {
        alert("invalid Year");
        return false
    } else if (parseInt(month) < 1 || parseInt(month) > 12 || isNaN(parseInt(month))) {
      alert("invalid month");
      return false;
    } else if (parseInt(date) < 1 || parseInt(date) > 31 || isNaN(parseInt(date))) {
      alert("invalid date");
      return false;
    } else if (gender === "--select--") {
        alert("Please select gender");
        return false;
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
function returnAkanName(gender, dayIndex) {
    var akanMales = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    var akanFemales = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];
  var sex = gender.toLowerCase();
  if (sex === "male") {
    return akanMales[dayIndex];
  } else if (sex === "female") {
    return akanFemales[dayIndex];
  } else {
    return "No Gender Provided";
  }
}

// Submit
function onSubmit() {
  // Receive inputs
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var date = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;

  //Days of
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Validate inputs
  if (valid(year, month, date)) {
    let dayIndex = calculateDayIndex(year, month, date);
    document.getElementById("birth-day").value = weekDays[dayIndex];
    document.getElementById("akan-name").value = returnAkanName(gender,dayIndex);
    
  }
}


// Clear the form
function onClear() {
    var year = document.getElementById("year").value = "";
    var month = document.getElementById("month").value ="";
    var date = document.getElementById("date").value ="";
    var gender = document.getElementById("gender").value ="";
}


