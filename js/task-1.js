// HTML містить список категорій ul#categories.
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст
// заголовка елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >,
//   вкладених у нього).

const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const items = category.lastElementChild.children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${items.length}`);
});
