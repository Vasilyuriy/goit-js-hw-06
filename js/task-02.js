const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ingredients.forEach(function (number) {
//   const list = document.querySelector("#ingredients");
//   const elements = document.createElement("li");
//   elements.textContent = number;
//   elements.classList.add("item");
//   list.append(elements);
// });

const newArr = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");
  return itemEl;
});
const listEl = document.querySelector("#ingredients");
listEl.append(...newArr);
