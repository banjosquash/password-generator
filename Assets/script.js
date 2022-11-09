// Assignment Code
var generateBtn = document.querySelector("#generate");



  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // display password on page
  passwordText.value = password;

}

function generatePassword(){
  console.log("click!")
  //1. promt user for criteria
  //lenght between 8 and 128
    var password = ''
    let passwordLength = window.prompt("Choose number of characters. Must be between 8 and 128 characters")

  //2. vlaidate the input
  if (passwordLength >= 8 && passwordLength <= 128){
    //include lowecase uppercase numeric and special characters
    var shouldBeUppercase = window.confirm('Do you want Uppercase');
    var shouldBeLowercase = window.confirm('Do you want lowercase');
    var shouldHaveNumbers = window.confirm('Do you want numbers');
    var shouldHaveSpecialCharacters = window.confirm('Do you want special characters');
    let charList = generateCharList(shouldBeLowercase, shouldBeUppercase, shouldHaveNumbers, shouldHaveSpecialCharacters);
    password = createPassword(charList, passwordLength)
  }
  else {
    window.alert('Try Again!')
    }
  

  return password
}
function createPassword (charList, passwordLength){
    var password = ''

  for (var i=0; i < passwordLength; i++){
    var random = Math.floor((Math.random() * charList.length));
    password += charList.charAt(random)
    console.log(password)
  }

  return password
}
function generateCharList(shouldBeLowercase, shouldBeUppercase, shouldHaveNumbers, shouldHaveSpecialCharacters){
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '1234567890';
  var specialCharacters = '~`!@#$%^&*()_+=-}]{[:;?/>.<,';
  var characters = ""
  if (shouldBeUppercase){
    characters += uppercase
  }
  if (shouldBeLowercase){
    characters += lowercase
  }
  if (shouldHaveNumbers){
    characters += numbers
  }
  if (shouldHaveSpecialCharacters){
    characters += specialCharacters
  }
  return characters
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
