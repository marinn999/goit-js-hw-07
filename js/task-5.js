// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і задає це значення кольору текстовим
// вмістом для span.color.

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change - color фон < body >
//   зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", changeBackColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBackColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}
