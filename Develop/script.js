// Assignment Code
var passwordLength = length
var special=["!", "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~" , ];
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["1","2","3","4","5","6","7","8","9"];
var lowers=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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
var lower = window.confirm("Would you like lowercase lettering?")
if (lower === true){
  console.log(lower)
  console.log(lowers)
}
var num = window.confirm ("would you like numbers in your password?")
if (num === true){
  console.log(num)
  console.log(numbers)
}

}
start()


var generateBtn = document.querySelector("#generate");

function generatePassword(){
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = special[Math.floor(special.length * math.random())];
    document.write(randomNumber)
   }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
