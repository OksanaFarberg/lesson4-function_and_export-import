import { calculate } from "./calculate.js";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const a = +document.getElementById("a").value;
  const b = +document.getElementById("b").value;
  const op = document.getElementById("op").value;

  console.log(a, b, op);

  if (a == "" || b == "") {
    alert("введи все значения");
    return;
  }
  calculate(a, b, op);
});

