// ===========  INPUT BUTTON=========
const inputElement = document.getElementById("input");

console.log("inputElement:", inputElement);

// ===========AC BUTTON=========
const acButton = document.getElementById("ac-button");
console.log("acButton:", acButton);

function clear() {
  console.log("function is clearing the value");
  inputElement.value = "";
}
acButton.addEventListener("click", clear);

// ============ OPERATORS ================

// =========== EQUAL TOO BUTTON =========

const isEqual = document.getElementById("=-button");
console.log("isEqual:", isEqual);

function equal() {
  console.log("pressing equal");
  const expression = inputElement.value;

  result = eval(expression);
  inputElement.value = result;
  console.log(result);
  console.log("result is evaluated");
}
isEqual.addEventListener("click", equal);

// =========== ADDITION BUTTON =========

const addButton = document.getElementById("+-button");
console.log("addButton:", addButton);

function pressAdd() {
  console.log("pressing +");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "+";
}
addButton.addEventListener("click", pressAdd);

// =========== SUBTRACTION BUTTON =========

const subButton = document.getElementById("--button");
console.log("subButton:", subButton);

function pressSub() {
  console.log("pressing -");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "-";
}
subButton.addEventListener("click", pressSub);

// =========== MULTIPLICATION BUTTON =========

const mulButton = document.getElementById("*-button");
console.log("mulButton:", mulButton);

function pressMul() {
  console.log("pressing *");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "*";
}
mulButton.addEventListener("click", pressMul);

// =========== DIVISION BUTTON =========

const divButton = document.getElementById("/-button");
console.log("divButton:", divButton);

function pressDiv() {
  console.log("pressing /");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "/";
}
divButton.addEventListener("click", pressDiv);

// =========== PERCENTAGE BUTTON =========

const percentageButton = document.getElementById("%-button");
console.log("percentageButton:", percentageButton);

function pressPercent() {
  console.log("pressing %");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "%";
}
percentageButton.addEventListener("click", pressPercent);

// ============ NUMBERS ================

// =========== 1 BUTTON =========

const oneButton = document.getElementById("one-button");
console.log("oneButton:", oneButton);

function pressOne() {
  console.log("pressing one");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "1";
}
oneButton.addEventListener("click", pressOne);

// =========== 2 BUTTON =========

const twoButton = document.getElementById("2-button");
console.log("twoButton:", twoButton);

function pressTwo() {
  console.log("pressing two");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "2";
}
twoButton.addEventListener("click", pressTwo);

// // =========== 3 BUTTON =========

const threeButton = document.getElementById("3-button");
console.log("threeButton:", threeButton);

function pressThree() {
  console.log("pressing three");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "3";
}
threeButton.addEventListener("click", pressThree);

// // =========== 4 BUTTON =========

const fourButton = document.getElementById("4-button");
console.log("fourButton:", fourButton);

function pressFour() {
  console.log("pressing four");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "4";
}
fourButton.addEventListener("click", pressFour);

// // =========== 5 BUTTON =========

const fiveButton = document.getElementById("5-button");
console.log("fiveButton:", fiveButton);

function pressFive() {
  console.log("pressing five");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "5";
}
fiveButton.addEventListener("click", pressFive);

// // =========== 6 BUTTON =========

const sixButton = document.getElementById("6-button");
console.log("sixButton:", sixButton);

function pressSix() {
  console.log("pressing six");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "6";
}
sixButton.addEventListener("click", pressSix);

// // =========== 7 BUTTON =========

const sevenButton = document.getElementById("7-button");
console.log("sevenButton:", sevenButton);

function pressSeven() {
  console.log("pressing seven");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "7";
}
sevenButton.addEventListener("click", pressSeven);

// // =========== 8 BUTTON =========

const eightButton = document.getElementById("8-button");
console.log("eightButton:", eightButton);

function pressEight() {
  console.log("pressing eight");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "8";
}
eightButton.addEventListener("click", pressEight);

// // =========== 9 BUTTON =========

const nineButton = document.getElementById("9-button");
console.log("nineButton:", nineButton);

function pressNine() {
  console.log("pressing nine");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "9";
}
nineButton.addEventListener("click", pressNine);

// // =========== 0 BUTTON =========

const zeroButton = document.getElementById("0-button");
console.log("zeroButton:", zeroButton);

function pressZero() {
  console.log("pressing zero");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + "0";
}
zeroButton.addEventListener("click", pressZero);

// // =========== DEMICAL BUTTON =========

const decimalButton = document.getElementById(".-button");
console.log("decimalButton:", decimalButton);

function pressDecimal() {
  console.log("pressing decimal");
  const oldvalue = inputElement.value;
  inputElement.value = oldvalue + ".";
}
decimalButton.addEventListener("click", pressDecimal);
