const base = document.querySelector("#base");
const height = document.querySelector("#height");
const button = document.querySelector("#button");
const message = document.querySelector("#message");

var newBase, newHeight, hypotenuse, baseHeightSquare;

function calculateHypotenuse() {
  newBase = Number(base.value);
  newHeight = Number(height.value);
  baseHeightSquare = newBase ** 2 + newHeight ** 2;
  hypotenuse = Math.sqrt(baseHeightSquare);

  if ((base.value === "") & (height.value === "")) {
    message.innerText =
      "In order to calculate hyptenuse both base and height must contain a value";
  } else {
    message.innerText = `The value of Hypotenuse is ${hypotenuse}`;
  }
}

function clickHandler() {
  calculateHypotenuse();
}
button.addEventListener("click", clickHandler);
