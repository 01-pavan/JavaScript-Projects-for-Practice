//rgb(255, 160, 122);
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const rgbColor = getRgbColor();
  document.body.style.backgroundColor = rgbColor;
  color.textContent = rgbColor;
});
const getRgbColor = function () {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};
