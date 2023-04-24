const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

const result = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  li.className.add("item");
  return(li);
});
ul.append(...result);
