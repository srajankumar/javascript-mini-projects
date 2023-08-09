const generateButton = document.getElementById("generate");
const passwordField = document.getElementById("password");
const lettersInput = document.getElementById("letters");
const symbolsInput = document.getElementById("symbols");
const numbersInput = document.getElementById("numbers");

const generatePassword = () => {
  const lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
  const uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numbers = "0123456789";
  const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
  let letters = lowercaseLetters + uppercaseLetters;
  let password = "";
  let newNumbers = "";
  let newSymbols = "";
  let newLetters = "";

  for (let i = 0; i < numbersInput.value; i++) {
    const randomNumbers = Math.floor(Math.random() * numbers.length);
    newNumbers += numbers[randomNumbers];
  }

  for (let i = 0; i < symbolsInput.value; i++) {
    const randomNumbers = Math.floor(Math.random() * symbols.length);
    newSymbols += symbols[randomNumbers];
  }

  for (let i = 0; i < lettersInput.value; i++) {
    const randomNumbers = Math.floor(Math.random() * letters.length);
    newLetters += letters[randomNumbers];
  }

  password = newNumbers + newSymbols + newLetters;

  var shuffled = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  return shuffled;
};

generateButton.addEventListener("click", () => {
  const newPassword = generatePassword();
  passwordField.value = newPassword;
});
