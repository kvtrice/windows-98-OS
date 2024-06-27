import { calculatorButtons } from "./calculator.js";

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
	<div class="calculator__display">0.</div>
		<div class="calculator__buttons">
			<div class="calculator__buttons__nums">
			</div>
			<div class="calculator__buttons__action">
				<button
					class="calculator__buttons__action calc-btn --operator"
				>
					CE
				</button>
				<button
					class="calculator__buttons__action calc-btn --operator"
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
		const value = document.createTextNode(button.val);
		buttonEl.appendChild(value);
		buttonsDiv.appendChild(buttonEl);
	});

	return calculatorDiv;
};
