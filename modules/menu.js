import { newMenuItemFolder, newMenuItem } from "./dom-utils.js";

const menuItemFolders = [
	{
		src: "./assets/icons/programs.png",
		alt: "Programs",
		name: "Programs",
	},
	{
		src: "../assets/icons/favourites.png",
		alt: "Favourites",
		name: "Favourites",
	},
	{
		src: "../assets/icons/documents.png",
		alt: "Documents",
		name: "Documents",
	},
];

const menuItems = [
	{
		src: "../assets/icons/help.png",
		alt: "Help",
		name: "Help",
	},
	{
		src: "../assets/icons/run.png",
		alt: "Run",
		name: "Run",
	},
	{
		src: "../assets/icons/log-off.png",
		alt: "Log Off",
		name: "Log Off",
	},
	{
		src: "../assets/icons/shut-down.png",
		alt: "Shut Down",
		name: "Shut Down",
	},
];

export const createMenuItemFolder = () => {
	menuItemFolders.forEach(({ src, alt, name }) => {
		newMenuItemFolder(src, alt, name);
	});
};

export const createMenuItem = () => {
	menuItems.map(({ src, alt, name }) => {
		newMenuItem(src, alt, name);
	});
};

export const menuHandler = () => {
	const startButton = document.getElementById("start");
	const toggleMenu = () => {
		const menu = document.getElementById("menu");
		const startButton = document.getElementById("start");
		menu.classList.toggle("open");
		startButton.classList.toggle("open");
	};

	startButton.addEventListener("click", toggleMenu);

	document.addEventListener("click", event => {
		const menu = document.getElementById("menu");
		if (
			!menu.contains(event.target) &&
			!startButton.contains(event.target)
		) {
			menu.classList.remove("open");
			startButton.classList.remove("open");
		}
	});
};
