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

// appName, appIcon, appContent

export const createModal = () => {
	const modal = document.createElement("div");
	modal.classList.add("modal");

	modal.innerHTML = `
		<div class="modal__wrapper">
		<div class="modal__header">
			<div class="modal__header__left">
				<img
					src="./assets/icons/calculator.png"
					alt="Calculator"
					class="modal__header__left__app-icon"
				/>
				<p class="modal__header__left__app-title">
					Calculator
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
		<div class="modal__content"></div>
		<div class="modal__footer">
			<div class="modal__footer__left"></div>
			<div class="modal__footer__right"></div>
		</div>
	</div>
	`;

	// const desktop = document.querySelector('.deskto');
	document.body.appendChild(modal);

	modal.querySelector(".--close").addEventListener("click", () => {
		modal.remove();
	});

	return modal;
};
