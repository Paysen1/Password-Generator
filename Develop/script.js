// Assignment Code
var special=["!", "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~" ];
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["1","2","3","4","5","6","7","8","9"];
var lowers=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var length = window.prompt("How long would you like your password?/ 8-128")
  console.log(length);

var specialC = window.confirm("Would you like special characters?")
if (specialC === true){
  console.log(special);
}
var caps = window.confirm("Would you like uppercase lettering?")
if (caps === true){
  console.log(letters);
}
var lower = window.confirm("Would you like lowercase lettering?")
if (lower === true){
  console.log(lowers);
}
var num = window.confirm ("would you like numbers in your password?")
if (num === true){
  console.log(numbers);
}

const random = [
  function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
  },
  function getRandomLower() {
    return lowers[Math.floor(Math.random() * lowers.length)];
  },
  function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  },
  function getRandomSpecial() {
    return special[Math.floor(Math.random() * special.length)];
  }
];


function generatePassword(){
  var password = '';
  for (let index = 0; index < length; index++) {
    const element = random[index % random.length];
    password += element();
  }
  return password;
}
  


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
