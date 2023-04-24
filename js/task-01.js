const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});