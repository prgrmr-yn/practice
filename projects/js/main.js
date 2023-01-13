class Calculator {
  constructor(po, co) {
    this.po = po;
    this.co = co;
    this.clear()
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (!this.currentOperand) return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand.toString() + operation
    this.currentOperand = '';
  }

  compute() {
    let computaion;
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current)) return

    switch (this.operation) {
      case '+':
        computaion = prev + current
        break;
      case '-':
        computaion = prev - current
        break;
      case '*':
        computaion = prev * current
        break;
      case '÷':
        computaion = prev / current
        break;
      default:
        return
    }
    this.currentOperand = computaion;
    this.operation = undefined;
    this.previousOperand = '';

  }

  updateDisplay() {
    this.co.innerText = this.currentOperand
    this.po.innerText = this.previousOperand
  }
}









const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const po = document.querySelector('[data-previous-operand]')
const co = document.querySelector('[data-current-operand]')



const calculator = new Calculator(po, co)

numberButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
operationButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button=> {
  calculator.compute();
  calculator.updateDisplay
})

allClearButton.addEventListener('click', button=> {
  calculator.clear();
  calculator.updateDisplay
})
