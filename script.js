// Assignment code here

var numberChar = "0123456789";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for you new password.  It must be at least 8 and no more than 128."
  );

  var numbers = confirm("Do you want numbers in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  var charString = "";
  if (numbers) {
    charString += numberChar;
  }
  if (upperCases) {
    charString += upperChar;
  }
  if (lowerCases) {
    charString += lowerChars;
  }
  if (special) {
    charString += symbols;
  }

  var password = "";

  for (let i = 0; i < Number(passwordLength); i++) {
    password += charString.charAt(Math.floor(Math.random() * charString.length));

  }
  return password
}
