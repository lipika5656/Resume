function validateForm() {
  let form = document.forms["regForm"];
  let fname = form["fname"].value.trim();
  let lname = form["lname"].value.trim();
  let genderElems = form["gender"];
  let mobile = form["mobile"].value.trim();
  let email = form["email"].value.trim();

  // First Name and Last Name should not be empty and should be alphabetic
  if (fname === "" || !/^[A-Za-z]+$/.test(fname)) {
    alert("Please enter a valid First Name (alphabets only).");
    return false;
  }

  if (lname === "" || !/^[A-Za-z]+$/.test(lname)) {
    alert("Please enter a valid Last Name (alphabets only).");
    return false;
  }

  // Gender should be selected
  let genderSelected = false;
  for (let i = 0; i < genderElems.length; i++) {
    if (genderElems[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    alert("Please select your gender.");
    return false;
  }

  // Mobile Number should be exactly 10 digits
  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit Mobile Number.");
    return false;
  }

  // Email should follow basic pattern
  let emailPattern = /^[^@\s]+@[^@\s]+\.[a-z]{2,3}$/i;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid Email ID.");
    return false;
  }

  // If all validations pass
  alert("All details are valid! Form submitted successfully.");
  return true;
}