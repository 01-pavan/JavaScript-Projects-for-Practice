const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0-3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
//The Math.floor() function returns the largest integer less than or equal to a given number.
