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
