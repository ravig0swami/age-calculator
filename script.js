// Get references to DOM elements
let dob = document.getElementById("dob");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

// Function to calculate age
function calculateAge() {
  // Check if date of birth is entered
  if (!dob.value) {
    result.innerText = "Please enter your date of birth.";
    return;
  }
  // Parse the entered date
  let birthDate = new Date(dob.value);
  let today = new Date();

  // Check if birth date is in the future
  if (birthDate > today) {
    result.innerText = "Date of birth cannot be in the future.";
    return;
  }

  // Calculate years, months, and days
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust months and days if needed
  if (days < 0) {
    months--;
    // Get days in previous month
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Display the calculated age
  result.innerText = `Your age is ${years} years ${months} months ${days} days`;
}

// Add event listener to button
btn.addEventListener("click", calculateAge);
