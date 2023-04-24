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
  li.className = "item";
  return(li);
});v
ul.append(...result)
