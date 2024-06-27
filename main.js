import { setTime } from "./modules/taskbar.js";
import { menuHandler } from "./modules/menu.js";
import { createMenuItemFolder, createMenuItem } from "./modules/menu.js";
import { highlightOnClick } from "./modules/apps.js";
import { createCalculator, createModal } from "./modules/dom-utils.js";

// Create Menu Items
createMenuItemFolder();
createMenuItem();

// Get the current time
setTime();

// Highlight Desktop Apps on Click
highlightOnClick();

menuHandler();

const calculatorApp = document.getElementById("calculator");

calculatorApp.addEventListener("dblclick", () => {
	const calculator = createCalculator();
	createModal("Calculator", "./assets/icons/calculator.png", calculator);
});
