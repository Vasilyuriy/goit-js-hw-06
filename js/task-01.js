const items = document.querySelectorAll("li.item");
console.log("Numbers of categories:", items.length);
items.forEach(function (number) {
  console.log("Category:", number.querySelector("h2").textContent);
  console.log("Elements:", number.querySelectorAll("li").length);
});
