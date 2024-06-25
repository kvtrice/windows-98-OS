export const toggleMenu = () => {
	const menu = document.getElementById("menu");
	const startButton = document.getElementById("start");
	menu.classList.toggle("open");
	startButton.classList.toggle("open");
};

