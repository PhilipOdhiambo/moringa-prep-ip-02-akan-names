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
