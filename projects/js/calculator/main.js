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
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
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

  getDisplayNumber(num) {
    const stringNumber = num.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay;
    if(isNaN(integerDigits)) {
      integerDisplay = ''

    }else {
      integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    }else{
      return integerDisplay
    }

  }

  updateDisplay() {
    this.co.innerText = this.getDisplayNumber(this.currentOperand)
    if (this.operation != null ) {
      this.po.innerText = this.getDisplayNumber(this.previousOperand)
    }
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
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button=> {
  calculator.clear();
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button=> {
  calculator.delete();
  calculator.updateDisplay()
})
