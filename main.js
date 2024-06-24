import { getCurrentTime } from "./modules/taskbar.js";

// Get current time every second
document.addEventListener("DOMContentLoaded", () => {
	getCurrentTime();
	setInterval(getCurrentTime, 1000);
});
