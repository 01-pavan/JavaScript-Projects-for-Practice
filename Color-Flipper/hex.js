const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const hexValue = getRandomHexColor();

  document.body.style.backgroundColor = hexValue;
  color.textContent = hexValue;
});

function getRandomHexColor() {
  let randonHex = "#";
  for (let i = 0; i < 6; i++) {
    randonHex += hex[Math.floor(Math.random() * hex.length)];
  }
  return randonHex;
}
