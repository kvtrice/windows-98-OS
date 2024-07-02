export const handleMediaPlayer = () => {
	const videoSrcs = [
		"../assets/media/never-gonna-give-you-up.mp4",
		"../assets/media/pokemon-theme.mp4",
		"../assets/media/numa-numa.mp4",
	];

	const video = document.querySelector(".media-player__video");
	const playButton = document.querySelector(".--play");
	const pauseButton = document.querySelector(".--pause");
	const nextButton = document.querySelector(".--next");
	const backButton = document.querySelector(".--back");

	let currentVideo = 0;

	const loadVideo = i => {
		video.src = videoSrcs[i];
		video.load();
		video.play();
	};

	playButton.addEventListener("click", () => {
		if (video.paused) {
			video.play();
		}
	});

	pauseButton.addEventListener("click", () => {
		if (!video.paused) {
			video.pause();
		}
	});

	nextButton.addEventListener("click", () => {
		currentVideo = (currentVideo + 1) % videoSrcs.length;
		loadVideo(currentVideo);
	});

	backButton.addEventListener("click", () => {
		currentVideo = (currentVideo - 1 + videoSrcs.length) % videoSrcs.length;
		loadVideo(currentVideo);
	});
};
