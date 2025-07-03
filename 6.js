function checkNumber() {
  const input = document.getElementById("numberInput").value;
  const resultText = document.getElementById("resultText");
  const number = parseInt(input);

  if (number >= 1 && number <= 100) {
  resultText.textContent = "The number is in the range.";
} else {
  resultText.textContent = "Invalid entry.";
}

}