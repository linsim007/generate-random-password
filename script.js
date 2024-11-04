const passwordBox = document.getElementById("password");
const generate = document.querySelector(".generate");
const copy = document.querySelector(".copy");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "~!@#$%^&*()_+`-={}|[]:;<>?./";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
};

generate.addEventListener("click", () => {
  createPassword();
});

const copyPassword = () => {
  passwordBox.select();
  const password = passwordBox.value;
  navigator.clipboard
    .writeText(password)
    .then(() => {
      console.log("Password copied to clipboard successfully!");
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
};

copy.addEventListener("click", () => {
  copyPassword();
});
