// REQUIREMENTS //
// Generate two random passwords when user clicks button
// Each password should be 15 characters long

// STRETCH GOALS //
// Ability to set the password length
// Add "copy-on-click"
// Toggle "symbols" and "numbers" on/off

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwElOne = document.getElementById("pw-el-one");
let pwElTwo = document.getElementById("pw-el-two");

let genBtn = document.getElementById("gen-btn");

genBtn.addEventListener("click", function () {
  pwElOne.textContent = genRandomPW();
  pwElTwo.textContent = genRandomPW();
});

function getRandomChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return randomChar;
}

function genRandomPW() {
  let randomPW = 10;
  // let pwLenght = document.getElementById("pw-length").value
  //
  // if ( pwLenght > 15 ) {
  //     pwElOne.textContent = "OUT OF RANGE"
  //     pwElTwo.textContent = "OUT OF RANGE"
  // } else if ( pwLenght < 6 ) {
  //     pwElOne.textContent = "OUT OF RANGE"
  //     pwElTwo.textContent = "OUT OF RANGE"
  // } else {
  for (let i = 0; i < 10; i++) {
    randomPW += characters[getRandomChar()];
    // }
  }
  return randomPW;
}
