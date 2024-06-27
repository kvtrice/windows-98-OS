import {
	createCalculator,
	createModal,
	createMediaPlayer,
} from "./dom-utils.js";

export const highlightOnClick = () => {
	const apps = document.querySelectorAll(".app");

	const deselectAll = () => {
		apps.forEach(app => {
			const appText = app.querySelector(".app__text");
			const appImg = app.querySelector(".app__img");
			if (appText.classList.contains("clicked--text")) {
				appText.classList.remove("clicked--text");
			}

			if (appImg.classList.contains("clicked--img")) {
				appImg.classList.remove("clicked--img");
			}
		});
	};

	apps.forEach(app => {
		const appText = app.querySelector(".app__text");
		const appImg = app.querySelector(".app__img");
		app.addEventListener("click", () => {
			deselectAll();
			appText.classList.add("clicked--text");
			appImg.classList.add("clicked--img");
		});
	});

	document.addEventListener("click", event => {
		if (!event.target.closest(".app")) {
			deselectAll();
		}
	});
};

export const openApps = () => {
	const apps = [
		{
			name: "Calculator",
			id: "calculator",
			asset: "./assets/icons/calculator.png",
			createFunction: createCalculator(),
		},
		{
			name: "Media Player",
			id: "media-player",
			asset: "./assets/icons/media-player.png",
			createFunction: createMediaPlayer(),
		},
	];

	apps.forEach(({ name, id, asset, createFunction }) => {
		document.getElementById(id).addEventListener("dblclick", () => {
			createModal(name, asset, createFunction);
		});
	});
};
