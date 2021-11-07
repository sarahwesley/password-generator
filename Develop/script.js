// Assignment code here
// variable arrays
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","#","$","%","&","'","(",")","*","+","'",",","/",":",";","<","=",">","?","@","]","[","_","|","}","~","`"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// declaration of variable

var confirmLength = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperCase;
var confirmLowerCase;

// window prompt for user to choose password lenght
function generatePassword() {
  var confirmLength = (window.prompt("How many characters would your password to be?"));

  while(confirmLength <= 7 || confirmLength >= 129) {
    window.alert("Your password must be between 8-128 charactores. Please try again!");
    var confirmLength = (window.prompt("How many characters would you like your password to be?"));
  }

  // tell the user how many characters their password will be
  window.alert("Your password will have " + confirmLength + " characters.");
// choose parameters of password
  var confirmSpecialChar = window.confirm("Click OK to confirm if you'd like to include special characters in your password.");
    if(confirmSpecialChar === true) {
    window.alert("Your password will contain special characters!");
    }
  var confirmNumericChar = window.confirm("Click OK to confirm if you'd like to include numbers in your password.");
    if(confirmNumericChar === true) {
    window.alert("Your password will contain numbers!");
    }
  var confirmUpperCase = window.confirm("Click OK to confirm if you'd like to include upper case letters in your password.");
    if(confirmUpperCase === true) {
    window.alert("Your password will contain uppercase letters!");
    }
  var confirmLowerCase = window.confirm("Click OK to confirm if you'd like to include lower case letters in your password.");
    if(confirmLowerCase === true) {
    window.alert("Your password will contain lowercase letters!");
    }

  // ensure answers fit parameters
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false && confirmNumericChar === false) {
    window.alert("you must choose at least one");
    var confirmSpecialChar = window.confirm("Click OK to confirm if you'd like to include special characters in your password.");
      if(confirmSpecialChar === true) {
      window.alert("Your password will contain special characters!");
      }
    var confirmNumericChar = window.confirm("Click OK to confirm if you'd like to include numbers in your password.");
      if(confirmNumericChar === true) {
      window.alert("Your password will contain numbers!");
      }
    var confirmUpperCase = window.confirm("Click OK to confirm if you'd like to include upper case letters in your password.");
      if(confirmUpperCase === true) {
      window.alert("Your password will contain uppercase letters!");
      }
    var confirmLowerCase = window.confirm("Click OK to confirm if you'd like to include lower case letters in your password.");
      if(confirmLowerCase === true) {
      window.alert("Your password will contain lowercase letters!");
      }
  }



}

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
