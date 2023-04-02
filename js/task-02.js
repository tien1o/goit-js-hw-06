const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");
const createdEll = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  createdEll.push(item);
});

ul.append(...createdEll);
