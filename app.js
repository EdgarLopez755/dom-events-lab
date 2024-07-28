/*-------------------------------- Constants --------------------------------*/


const display = calculator.querySelector('.display')

const buttons = calculator.querySelector('.button')








/*-------------------------------- Variables --------------------------------*/

let firstOperand = ''

let secondOperand = ''

let operator = ''







/*------------------------ Cached Element References ------------------------*/


const calculator = document.getElementById('calculater')



  






/*-------------------------------- Functions --------------------------------*/

function handleNumber(number) {
  if (!operator) {
    firstOperand += number
  } else {
    secondOperand += number
  }
  display.textContent = firstOperand || '' + operator + secondOperand || ''
}

function handleOperator(op) {
  operator = op
  display.textContent = firstOperand + operator
}

function calculate() {
  let result;
  switch (operator) {  // 
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand)
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand)
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand)
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand)
      break;
    default:
      return
  }



  
  display.textContent = result
  firstOperand = result
  secondOperand = ''
  operator = ''
}

function clearDisplay() {
  firstOperand = ''
  secondOperand = ''
  operator = ''
  display.textContent = ''
}











/*----------------------------- Event Listeners -----------------------------*/


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      handleOperator(value);
    } else {
      handleNumber(value);
    }
  });
});





