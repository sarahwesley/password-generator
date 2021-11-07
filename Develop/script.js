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

// window prompt for user to choose password length
function generatePassword() {
  var confirmLength = (window.prompt("How many characters would you like your password to be?"));
  
  // ensure parameters have been met
  while(confirmLength <= 7 || confirmLength >= 129) {
    window.alert("Your password must be between 8-128 characters. Please try again!");
    var confirmLength = (window.prompt("How many characters would you like your password to be?"));
  }

  // tell the user how many characters their password will be
  window.alert("Your password will have " + confirmLength + " characters.");

// choose parameters of password by confirmation window
  var confirmSpecialChar = window.confirm("Click OK to confirm if you'd like to include special characters in your password.");
    // window alert if password will contain selected parameter
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
    window.alert("you must choose at least one!");
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
  // create action for password parameters
  var passwordChar = []
    if (confirmSpecialChar) {
    passwordChar = passwordChar.concat(specialChar)
    }

    if (confirmNumericChar) {
    passwordChar = passwordChar.concat(number)
    }
    
    if (confirmLowerCase) {
    passwordChar = passwordChar.concat(alphaLower)
    }

    if (confirmUpperCase) {
    passwordChar = passwordChar.concat(alphaUpper)
    }

  // Empty string that will be filled with randomly generated password
  var randomPassword = ""
    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
      console.log(randomPassword);
    }
    return randomPassword;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // added window alert to show password along with it showing in box
  window.alert("Your new password is " + password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
