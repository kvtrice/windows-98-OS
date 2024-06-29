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
			<div class="modal__nav__item">File</div>
			<div class="modal__nav__item">Edit</div>
			<div class="modal__nav__item">Help</div>
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

	const appContentDiv = document.querySelector(".modal__content");
	appContentDiv.appendChild(appContent);

	modal.querySelector(".--close").addEventListener("click", () => {
		modal.remove();
	});

	return modal;
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

//src

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

export const createNotepad = () => {};
