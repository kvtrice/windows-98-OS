export const calculatorButtons = [
	{ val: 7, operator: false },
	{ val: 8, operator: false },
	{ val: 9, operator: false },
	{ val: "/", operator: true },
	{ val: 4, operator: false },
	{ val: 5, operator: false },
	{ val: 6, operator: false },
	{ val: "*", operator: true },
	{ val: 1, operator: false },
	{ val: 2, operator: false },
	{ val: 3, operator: false },
	{ val: "-", operator: true },
	{ val: 0, operator: false },
	{ val: ".", operator: false },
	{ val: "+", operator: true },
];

export const handleCalculator = () => {
	const calculator = document.querySelector(".calculator");
	const calcButtonNumsDiv = document.querySelector(
		".calculator__buttons__nums"
	);
	const calcDisplay = calculator.querySelector(".calculator__display");
	const clearButton = calculator.querySelector(".--clear");
	const equalsButton = calculator.querySelector(".--equals");

	let currentValue = "";
	let operator = null;
	let previousValue = "";

	calcDisplay.innerHTML = "0";

	const domCalcButtons = Array.from(
		calcButtonNumsDiv.querySelectorAll(".calc-btn")
	);

	const domOperatorButtons = Array.from(
		calculator.querySelectorAll(".--operator:not(.--clear):not(.--equals)")
	);
	console.log(domOperatorButtons);

	const updateDisplay = value => {
		calcDisplay.innerHTML = value;
	};

	const handleNumbers = () => {
		domCalcButtons.forEach((button, i) => {
			if (
				typeof calculatorButtons[i]?.val === "number" ||
				calculatorButtons[i]?.val === "."
			) {
				button.addEventListener("click", () => {
					const newValue = calculatorButtons[i].val.toString();
					if (newValue === ".") {
						if (!currentValue.includes(".")) {
							currentValue += newValue;
						}
					} else {
						if (currentValue === "0") {
							currentValue = newValue;
						} else {
							currentValue += newValue;
						}
					}
					updateDisplay(currentValue);
				});
			}
		});
	};

	const handleOperators = () => {
		domOperatorButtons.forEach(button => {
			button.addEventListener("click", () => {
				if (currentValue === "") return;
				if (previousValue !== "") {
					currentValue = operate(
						previousValue,
						currentValue,
						operator
					);
					updateDisplay(currentValue);
				}
				operator = button.textContent;
				previousValue = currentValue;
				currentValue = "";
			});
		});
	};

	const operate = (a, b, operator) => {
		a = parseFloat(a);
		b = parseFloat(b);
		switch (operator) {
			case "+":
				return (a + b).toString();
			case "-":
				return (a - b).toString();
			case "*":
				return (a * b).toString();
			case "/":
				return (a / b).toString();
			default:
				return b;
		}
	};

	const handleEquals = () => {
		equalsButton.addEventListener("click", () => {
			if (currentValue === "" || previousValue === "") return;
			currentValue = operate(previousValue, currentValue, operator);
			updateDisplay(currentValue);
			previousValue = "";
			operator = null;
		});
	};

	const handleClear = () => {
		clearButton.addEventListener("click", () => {
			currentValue = "0";
			previousValue = "";
			operator = null;
			updateDisplay(currentValue);
		});
	};

	handleClear();
	handleNumbers();
	handleOperators();
	handleEquals();
};
