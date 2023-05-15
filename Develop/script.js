// Assignment Code
var special=["!", "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~" , ];
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["1","2","3","4","5","6","7","8","9"];

function start(){
var length = window.prompt("How long would you like your password?")
  console.log(length)
var specialC = window.confirm("Would you like special characters?")
if (specialC === true){
  console.log(specialC)
  console.log(special)
}
var caps = window.confirm("Would you like uppercase lettering?")
if (caps === true){
  console.log(caps)
  console.log(letters)
}
var num = window.confirm ("would you like numbers in your password?")
if (num === true){
  console.log(num)
  console.log(numbers)
}

}
start()

function specialarray(){
  special[0,1,2,3,4]
}

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
