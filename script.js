let count = 0;
const countAddBtn = document.querySelector("#add");
const countSubtractBtn = document.querySelector("#subtract");
const countValue = document.querySelector("#count");

countAddBtn.addEventListener("click", () => {
  count++;
  countValue.innerText = count;
});

countSubtractBtn.addEventListener("click", () => {
  count--;
  countValue.innerHTML = count;
});
