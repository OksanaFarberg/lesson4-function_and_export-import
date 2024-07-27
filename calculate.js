export function calculate(a, b, op) {
  const result = document.getElementById("result");
  if (op === "+") {
    result.innerHTML = a + b;
  } else if (op === "-") {
    result.innerHTML = a - b;
  } else if (op === "/") {
    result.innerHTML = a / b;
  } else if (op === "*") {
    result.innerHTML = a * b;
  }
}

//module.export = calculate
