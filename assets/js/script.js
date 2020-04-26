/* JS for Lebowski Password Generator - 20200418 UCLA Extension Coding Bootcamp */

var upper;
var lower;
var numbers;
var symbols;
var length;

  function stringToBoolean(str) {
  const yeses = ['yes', 'y', 'yeah', 'yeah lebowski', 'team america', 'south park', 'beavis,' 'oui', 'ja'];
  return yeses.findIndex(y => y === str.toLowerCase()) > -1;
  }

  function upperRequest() {
    var responseUpper;
    upper = stringToBoolean (prompt("Lebowski Password Generator\nLebowski password to include upper cases? (Y/N)"));
    if (upper)
    { responseUpper = "UpperCases: YES. That rug really tied the room together"; }
    else
    { responseUpper = "UpperCases: NO. Hey, careful, man, there’s a beverage here!"; }
    document.getElementById("upperAnswer").innerHTML = responseUpper;
    }
  function lowerRequest() {
    var responseLower;
    lower = stringToBoolean (prompt("Lebowski Password Generator\nLebowski password to include lower cases? (Y/N)"));
    if (lower)
    { responseLower = "LowerCases: YES. Uh, I'm just gonna go find a cash machine"; }
    else
    { responseLower = "LowerCases: NO. I am not Mr. Lebowski. You're Mr. Lebowski. I'm the Dude!"; }
    document.getElementById("lowerAnswer").innerHTML = responseLower;
    }
  function numbersRequest() {
    var responseNumbers;
    numbers = stringToBoolean (prompt("Lebowski Password Generator\nNumbers to be included in the Lebowski password?"));
    if (numbers)
    { responseNumbers = "Numbers: YES. Bullshit, Walter. Mark it 8, Dude."; }
    else
    { responseNumbers = "Numbers: NO. Uh, excuse me. Mark it zero. Next frame."; }
    document.getElementById("numbersAnswer").innerHTML = responseNumbers;
    }
  function symbolsRequest() {
    var responseSymbols;
    symbols = stringToBoolean (prompt("Lebowski Password Generator\nSymbols to be included in the Lebowski password? (Y/N)"));
    if (symbols)
    { responseSymbols = "Symbols: YES. The bums will always lose. Do you hear me, Lebowski?"; }
    else
    { responseSymbols = "Symbols: NO. The old man told me to take any rug in the house."; }
    document.getElementById("symbolsAnswer").innerHTML = responseSymbols;
    }
  function lengthRequest() {
    var responseLength;
    length = Number (prompt("Lebowski Password Generator\nLength of the Lebowski password? (Recommended: 8-128)"));
    if (length >= 8 && length <= 128)
    { responseLength = "Length: " + length + ". The god damn plane has crashed into the mountain!"; }
    else
    { responseLength = "Length: " + length + ". You're being very undude."; }
    document.getElementById("lengthAnswer").innerHTML = responseLength;
    }

    function hazardousUpper() {
    if (upper === true)
    { return String.fromCharCode(Math.floor(Math.random() * 26) + 65); }
    else { ; }
  }
    function hazardousLower() {
      if (lower === true)
    { return String.fromCharCode(Math.floor(Math.random() * 26) + 97); }
    else { ; }
  }
    function hazardousNumbers() {
    if (numbers === true)
    { return String.fromCharCode(Math.floor(Math.random() * 10) + 48); }
    else { ; }
  }
    function hazardousSymbols() {
    if (symbols === true)
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
    else { ; }
  }

function finalPassword() {
    var all = "";
    if (upper) all += hazardousUpper();
    if (lower) all += hazardousLower();
    if (numbers) all += hazardousNumbers();
    if (symbols) all += hazardousSymbols();
    var password = '';
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    return password;
}

    // Assignment Code
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
    var password = finalPassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);



