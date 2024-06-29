import { calculatorButtons } from "./calculator.js";
import { desktopApps } from "./desktop.js";

export const newMenuItem = (src, alt, name) => {
	const menuItemsContainer = document.querySelector(".menu__items");
	const div = document.createElement("div");
	div.classList.add("menu__item");
	div.innerHTML = `
        <div class="menu__item__left">
            <img
                src=${src}
                alt=${alt}
                class="menu__item__icon"
            />
            <p class="menu__item__text">${name}</p>
        </div>
    `;
	menuItemsContainer.appendChild(div);
};

export const newMenuItemFolder = (src, alt, name) => {
	newMenuItem(src, alt, name);
	const itemDivs = document.querySelectorAll(".menu__item");

	itemDivs.forEach(itemDiv => {
		if (!itemDiv.querySelector(".menu__item__right")) {
			const img = document.createElement("img");
			img.classList.add("menu__item__right");
			img.src = "../assets/icons/right-arrow.png";
			itemDiv.appendChild(img);
		}
	});
};

export const createModal = (appName, appIcon, appContent) => {
	const modal = document.createElement("div");
	modal.classList.add("modal");

	modal.innerHTML = `
		<div class="modal__wrapper">
		<div class="modal__header">
			<div class="modal__header__left">
				<img
					src=${appIcon}
					alt=${appName}
					class="modal__header__left__app-icon"
				/>
				<p class="modal__header__left__app-title">
					${appName}
				</p>
			</div>
			<div class="modal__header__right">
				<div
					class="modal__header__right__button --minimise"
				>
					_
				</div>
				<div class="modal__header__right__button --full">
					O
				</div>
				<div class="modal__header__right__button --close">
					X
				</div>
			</div>
		</div>
		<div class="modal__nav">
			<div class="modal__nav__item" id="file">File</div>
			<div class="modal__nav__item" id="edit">Edit</div>
			<div class="modal__nav__item" id="help">Help</div>
		</div>
		<div class="modal__content">
		</div>
		<div class="modal__footer">
			<div class="modal__footer__left"></div>
			<div class="modal__footer__right"></div>
		</div>
	</div>
	`;

	document.body.appendChild(modal);

	modal.querySelector(".--close").addEventListener("click", () => {
		const taskBarWindow = document.querySelector(
			".desktop__taskbar__left__open-window-container"
		);
		modal.remove();
		taskBarWindow.remove();
	});
};

export const createCalculator = () => {
	const calculatorDiv = document.createElement("div");
	calculatorDiv.classList.add("calculator");
	calculatorDiv.innerHTML = `
	<div class="calculator__display"></div>
		<div class="calculator__buttons">
			<div class="calculator__buttons__nums">
			</div>
			<div class="calculator__buttons__action">
				<button
					class="calculator__buttons__action calc-btn --operator --clear"
				>
					CE
				</button>
				<button
					class="calculator__buttons__action calc-btn --operator --equals"
				>
					=
				</button>
			</div>
		</div>
	`;

	const buttonsDiv = calculatorDiv.querySelector(
		".calculator__buttons__nums"
	);

	calculatorButtons.forEach(button => {
		const buttonEl = document.createElement("button");
		button.operator
			? buttonEl.classList.add("--operator", "calc-btn")
			: buttonEl.classList.add("calc-btn");
		if (button.val === 0) {
			buttonEl.classList.add("--zero");
		}
		const value = document.createTextNode(button.val);
		buttonEl.appendChild(value);
		buttonsDiv.appendChild(buttonEl);
	});

	return calculatorDiv;
};


export const createMediaPlayer = () => {
	const mediaPlayerDiv = document.createElement("div");
	mediaPlayerDiv.classList.add("media-player");
	mediaPlayerDiv.innerHTML = `
	<div class="media-player">
		<video
			class="media-player__video"

		>
			<source
				src="./assets/media/never-gonna-give-you-up.mp4"
				type="video/mp4"
			/>
			Your browser does not support the video tag.
		</video>
		<div class="media-player__controls">
			<div class="media-player__controls__left">
				<button class="media-player__button --play">
					<img
						class="media-player__button__icon"
						src="./assets/icons/media-player/play.png"
						alt="Play"
					/>
				</button>
				<button class="media-player__button --pause">
					<img
						class="media-player__button__icon"
						src="./assets/icons/media-player/pause.png"
						alt="Pause"
					/>
				</button>
			</div>
			
			<div class="media-player__controls__right">
				<button class="media-player__button --back">
					<img
						class="media-player__button__icon"
						src="./assets/icons/media-player/back.png"
						alt="Back"
					/>
				</button>
				<button class="media-player__button --next">
					<img
						class="media-player__button__icon"
						src="./assets/icons/media-player/next.png"
						alt="Next"
					/>
				</button>
			</div>
		</div>
	</div>
	`;

	return mediaPlayerDiv;
};

export const createDesktopApps = () => {
	const parent = document.querySelector(".apps");
	desktopApps.forEach(app => {
		const appDiv = document.createElement("div");
		appDiv.classList.add("app");
		appDiv.innerHTML = `
			<div
				class="app__items"
				${app.id ? `id="${app.id}"` : ""}
			>
				<img
					src=${app.src}
					alt=${app.name}
					class="app__img"
				/>
				<p class="app__text">${app.name}</p>
			</div>
		`;

		parent.appendChild(appDiv);
	});
};

export const createNotepad = () => {
	const notepadDiv = document.createElement("div");
	notepadDiv.classList.add("notepad");
	notepadDiv.innerHTML = `
        <textarea class="notepad__text"></textarea>
    `;
	return notepadDiv;
};

export const createTaskbarWindow = (img, name) => {
	const taskBarWindow = document.createElement("div");
	taskBarWindow.classList.add(
		"desktop__taskbar__left__open-window-container"
	);

	taskBarWindow.innerHTML = `
		<div class="desktop__taskbar__left__open-window">
			<img
				class="desktop__taskbar__left__open-window__icon"
				src=${img}
				alt=${name}
			/>
			<p class="desktop__taskbar__left__open-window__text">
				${name}
			</p>
		</div>
	`;

	const taskbarLeft = document.querySelector(".desktop__taskbar__left");
	taskbarLeft.appendChild(taskBarWindow);
};

export const createModalNavMenuDropdowns = (dropdown, modalContent) => {
	const menuDiv = document.createElement("div");
	menuDiv.classList.add("modal__nav__item__dropdown");
	const itemDiv = document.createElement("div");

	if (dropdown === "file") {
		if (document.querySelector(".notepad")) {
			const saveFileDiv = document.createElement("div");
			saveFileDiv.classList.add("modal__nav__item__dropdown__menu");
			const saveFileText = document.createTextNode("Save");
			saveFileDiv.appendChild(saveFileText);
			saveFileDiv.classList.add("--save");
			menuDiv.appendChild(saveFileDiv);
		}

		itemDiv.classList.add("modal__nav__item__dropdown__menu");
		const itemText = document.createTextNode("Close");

		itemDiv.appendChild(itemText);

		menuDiv.appendChild(itemDiv);
		modalContent.appendChild(menuDiv);

		itemDiv.addEventListener("click", () => {
			const modal = document.querySelector(".modal");
			const taskBarWindow = document.querySelector(
				".desktop__taskbar__left__open-window-container"
			);
			modal.remove();
			taskBarWindow.remove();
		});
	} else {
		itemDiv.classList.add("modal__nav__item__dropdown__menu--disabled");
		const itemText = document.createTextNode("Empty");

		itemDiv.appendChild(itemText);
		menuDiv.appendChild(itemDiv);
		modalContent.appendChild(menuDiv);
	}
};
