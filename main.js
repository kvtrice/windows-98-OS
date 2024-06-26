import { getCurrentTime } from "./modules/taskbar.js";
import { toggleMenu } from "./modules/menu.js";
import { createMenuItemFolder, createMenuItem } from "./modules/menu.js";
import { highlightOnClick } from "./modules/apps.js";

// Create Menu Items
createMenuItemFolder();
createMenuItem();

// Get current time every second
getCurrentTime();
setInterval(getCurrentTime, 1000);

// Highlight Desktop Apps on Click
highlightOnClick();

// Open  & Close Start Menu
const startButton = document.getElementById("start");
startButton.addEventListener("click", toggleMenu);

// Click anywhere outside menu to close it
document.addEventListener("click", event => {
	const menu = document.getElementById("menu");
	if (!menu.contains(event.target) && !startButton.contains(event.target)) {
		menu.classList.remove("open");
		startButton.classList.remove("open");
	}
});
