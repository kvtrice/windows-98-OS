import { createModal, createModalNavMenuDropdowns } from "./dom-utils.js";
import { handleNotepad } from "./notepad.js";

const modalNavDropdownMenus = ["file", "edit", "help"];

export const handleModalNavDropdowns = () => {
	let currentOpenMenu = null;

	const closeDropdownMenu = menu => {
		const dropdown = menu.querySelector(".modal__nav__item__dropdown");
		if (dropdown) {
			dropdown.remove();
		}
	};

	modalNavDropdownMenus.forEach(dropdown => {
		const menu = document.getElementById(dropdown);

		menu.addEventListener("click", () => {
			if (currentOpenMenu === dropdown) {
				closeDropdownMenu(menu);
				currentOpenMenu = null;
				return;
			}

			if (currentOpenMenu) {
				const prevMenu = document.getElementById(currentOpenMenu);
				closeDropdownMenu(prevMenu);
			}

			createModalNavMenuDropdowns(dropdown, menu);

			// Handle notepad specific logic
			if (dropdown === "file") {
				const saveButton = document.querySelector(".--save");
				saveButton.addEventListener("click", () => {
					const textarea = document.querySelector(".notepad__text");
					handleNotepad(textarea);
				});
			}

			currentOpenMenu = dropdown;
		});
	});
};

export const handleModal = (appName, appIcon, appContent) => {
	const modal = createModal(appName, appIcon, appContent);

	const appContentDiv = document.querySelector(".modal__content");
	appContentDiv.appendChild(appContent);

	if (appName === "Notepad") {
		const textarea = document.querySelector(".notepad__text");
		textarea.value = "";
	}

	const modalDiv = document.querySelector(".modal");

	modalDiv.querySelector(".--close").addEventListener("click", () => {
		const taskBarWindow = document.querySelector(
			".desktop__taskbar__left__open-window-container"
		);
		modalDiv.remove();
		taskBarWindow.remove();
	});

	handleModalNavDropdowns();

	return modal;
};
