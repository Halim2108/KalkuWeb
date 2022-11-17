const kalkulator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};

function updateDisplay() {
  document.querySelector("#displayNumber").innerText = kalkulator.displayNumber;
}

function clear() {
  kalkulator.displayNumber = "0";
  kalkulator.operator = null;
  kalkulator.firstNumber = null;
  kalkulator.isWaitForSecondNumber = false;
}

function inputNum(num) {
  if (kalkulator.displayNumber === "0") {
    kalkulator.displayNumber = num;
  } else {
    kalkulator.displayNumber += num;
  }
}

function handleOperator(operator) {
  if (!kalkulator.isWaitForSecondNumber) {
    kalkulator.operator = operator;
    kalkulator.isWaitForSecondNumber = true;
    kalkulator.firstNumber = kalkulator.displayNumber;
    kalkulator.displayNumber = "0";
  } else {
    alert("operator sudah ditetapkan");
  }
}

function performCalculation() {
  if (kalkulator.firstNumber == null || kalkulator.operator == null) {
    alert("anda belum menetapkan operator");
    return;
  }

  let result = 0;
  if (kalkulator.operator === "+") {
    result = parseInt(kalkulator.firstNumber) + parseInt(kalkulator.displayNumber);
  } else if (kalkulator.operator === "-") {
    result = parseInt(kalkulator.firstNumber) - parseInt(kalkulator.displayNumber);
  } else if (kalkulator.operator === "x") {
    result = parseInt(kalkulator.firstNumber) * parseInt(kalkulator.displayNumber);
  } else if (kalkulator.operator === "/") {
    result = parseInt(kalkulator.firstNumber) / parseInt(kalkulator.displayNumber);
  }

  const history = {
    firstNumber: kalkulator.firstNumber,
    secondNumber: kalkulator.displayNumber,
    operator: kalkulator.operator,
    result: result,
  }

  putHistory(history);
  kalkulator.displayNumber = result;
  renderHistory();
}

const Buttons = document.querySelectorAll(".button");

for (const button of Buttons) {
  button.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("clear")) {
      clear();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      return;
    }

    inputNum(target.innerText);
    updateDisplay();
  });
}
