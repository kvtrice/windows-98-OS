import { getCurrentTime } from "./modules/taskbar.js";
import { toggleMenu } from "./modules/menu.js";

// Get current time every second
document.addEventListener("DOMContentLoaded", () => {
	getCurrentTime();
	setInterval(getCurrentTime, 1000);
});

// DOM Elements
const startButton = document.getElementById("start");
const menu = document.getElementById("menu");

// Open  & Close Start Menu
startButton.addEventListener("click", toggleMenu);

// Click anywhere outside menu to close it
document.addEventListener("click", event => {
	if (!menu.contains(event.target) && !startButton.contains(event.target)) {
		menu.classList.remove("open");
		startButton.classList.remove("open");
	}
});
