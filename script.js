const firstNumber = document.querySelector('.firstNumber');
const sign = document.querySelector('.sign');
const nextNumber = document.querySelector('.nextNumber');

const allBtns = document.querySelectorAll('.number');
const allOperators = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');

const clearBtn = document.querySelector('.clear');
const mathDisplay = document.querySelector('.mathDisplay');

let result = '';

function displayNumbers() {
	if (this.textContent === '.' && firstNumber.innerHTML.includes('.')) return;
	if (this.textContent === '.' && firstNumber.innerHTML === '')
		return (firstNumber.innerHTML = '0.');
	firstNumber.innerHTML += this.textContent;
}

function operate() {
	if (firstNumber.innerHTML === '' && this.textContent === '-') {
		firstNumber.innerHTML = '-';
		return;
	} else if (firstNumber.innerHTML === '') {
		return;
	}

	if (sign.innerHTML !== '') {
		showResult();
	}
	nextNumber.innerHTML = firstNumber.innerHTML;
	sign.innerHTML = this.textContent;
	firstNumber.innerHTML = '';
}

function showResult() {
	if (firstNumber.innerHTML === '' || nextNumber.innerHTML === '') return;

	let a = Number(firstNumber.innerHTML);
	let b = Number(nextNumber.innerHTML);
	let operator = sign.innerHTML;

	switch (operator) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = b - a;
			break;
		case 'x':
			result = a * b;
			break;
		case '/':
			result = b / a;
			break;
		case '%':
			result = b * (a / 100);
			break;
		default:
			break;
	}

	firstNumber.innerHTML = result;
	nextNumber.innerHTML = '';
	sign.innerHTML = '';
}

function clearScreen() {
	firstNumber.innerHTML = '';
	sign.innerHTML = '';
	nextNumber.innerHTML = '';
	result = '';
}

//listeners

allOperators.forEach((btn) => btn.addEventListener('click', operate));
allBtns.forEach((btn) => btn.addEventListener('click', displayNumbers));
equalButton.addEventListener('click', showResult);
clearBtn.addEventListener('click', clearScreen);
