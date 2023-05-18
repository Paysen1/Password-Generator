// Assignment Code
var special=["!", "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~" ];
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["1","2","3","4","5","6","7","8","9"];
const lowers=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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

function passwordLength() {
length = window.prompt("How long would you like your password?/ 8-128")
  console.log(length);
if (length < 8 || length > 128) {
window.alert("Please select length between 8 and 128.")
return passwordLength();
}
return length;
}

var getPasswordLength = passwordLength();
console.log(getPasswordLength);

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




function generatePassword(){
  var password = '';
  for (let index = 0; index < getPasswordLength.length; index++) {
    console.log(getPasswordLength.length)
    const element = random[index % random.length];
    password += element();
  }
  return password;
}
  
index = 0
var index = 0 
const index = 0
let index = 0

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
