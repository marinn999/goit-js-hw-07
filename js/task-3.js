// Напиши скрипт, який під час набору тексту в інпуті input#name - input
// (подія input) підставляє його поточне значення в span#name - output
// як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від
// пробілів.Якщо інпут порожній або містить лише пробіли, то замість імені
//  у спан має підставлятися рядок "Anonymous".

const inputBtn = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputBtn.addEventListener("input", handleInput);

function handleInput(event) {
  const name = event.currentTarget.value.trim();
  output.textContent = name || "Anonymous";
}
