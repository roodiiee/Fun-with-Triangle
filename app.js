const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const checkButton = document.querySelector("#button");
const message = document.querySelector("#message");

var newAngleOne, newAngleTwo, newAngleThree, sum;

function clickHandler() {
  newAngleOne = Number(angleOne.value);
  newAngleTwo = Number(angleTwo.value);
  newAngleThree = Number(angleThree.value);

  calculation();
}

function calculation() {
  sum = newAngleOne + newAngleTwo + newAngleThree;

  if (sum === 180) {
    message.innerText = "By these values you can make a triangle 🔺";
  } else {
    message.innerText = "By these values you cannot make a triangle 🔺";
  }
}
checkButton.addEventListener("click", clickHandler);
