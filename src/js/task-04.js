let counterValue = 0;
const valueText = document.querySelector("#value");
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonIn = document.querySelector('button[data-action="increment"]');
buttonIn.addEventListener("click", () => {
  valueText.textContent = counterValue += 1;
});
buttonDec.addEventListener("click", () => {
  valueText.textContent = counterValue -= 1;
});
