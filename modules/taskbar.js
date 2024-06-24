// Current Time
export const getCurrentTime = () => {
	const timeContainer = document.getElementById("time");
	const currentDate = new Date();
	const currentTime = currentDate.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	const hours = currentDate.getHours();
	return (timeContainer.innerHTML =
		hours >= 12 ? `${currentTime} PM` : `${currentTime} AM`);
};
