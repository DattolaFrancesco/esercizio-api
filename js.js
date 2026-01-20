const inputValue = document.querySelector("#input").value;
const save = document.querySelector("#save");
const remove = document.querySelector("#delete");

save.addEventListener("click", () => {
  const inputValue = document.querySelector("#input").value;
  const text = localStorage.setItem("testo", inputValue);
});
remove.addEventListener("click", () => {
  localStorage.removeItem("testo");
});
window.addEventListener("load", () => {
  num = sessionStorage.getItem("number");
  number.textContent = num;
});

const number = document.querySelector("#number");
let num = 0;
setInterval(() => {
  num++;
  number.textContent = num;
  sessionStorage.setItem("number", number.textContent);
}, 1000);
