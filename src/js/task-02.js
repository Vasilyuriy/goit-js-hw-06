const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function (number) {
  const list = document.querySelector("#ingredients");
  const elements = document.createElement("li");
  elements.textContent = number;
  elements.classList.add("item");
  list.append(elements);
});
