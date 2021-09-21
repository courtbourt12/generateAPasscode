// Assignment Code
var userEntries = [];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Add a window prompt for users to enter their passcode.
function generatePassword() {
    var length = prompt ("How long would you like your passcode to be? Must be between 8-128.");
    number =parseInt(length);
    console.log(typeof(length));
    console.log(length);
        if (7<length<129) {
        characterTypes()
    } else if (length>128) {
        alert("Length cannot be greater than 128.");
        length;
    } else {
        alert("Length cannot be smaller than 8.");
        length;
    }

    
function characterTypes() {

    var finalResults = [];
    var lowerCase = window.confirm ("Do you want to include lower case letters?");
        if (lowerCase===true) {
            var lowerArray ="q w e r t y u i o p a s d f g h j k l z x c v b n m".split(" ");
             userEntries.push(...lowerArray);
        
        }
    var upperCase = window.confirm ("Do you want to include upper case letters?");
         if (upperCase===true) {
             var upperCaseArray = "Q W E R T Y U I O P A S D F G H J K L Z X C V B N M".split(" ");
             upperCaseArray = upperCaseArray;
             userEntries.push(...upperCaseArray);
        }
    var numericalValues = window.confirm ("Do you want to include numerical values?");
         if (numericalValues === true) {
             var numbersArray="1 2 3 4 5 6 7 8 9 0".split(" ");
             userEntries.push(...numbersArray);
          }
    var symbols = window.confirm ("Do you want to include special characters?");
        if (symbols===true) {
             var symbolArray = "- + ! @ # $ % ^ & *".split(" ");
             userEntries.push(...symbolArray);
         }

         console.log(userEntries);



for (i=0; i<number; i++) {
    var random = Math.floor(Math.random()*userEntries.length);
    var isThisIt = finalResults += userEntries[random];
}
console.log(isThisIt);

    var password = isThisIt;
    var passwordText = document.querySelector("#password");
  
    passwordText.textContent = password;
  
    


}

}