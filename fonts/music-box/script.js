// Main loop
let beat = 0;
let text = document.querySelector('.text');
let kick = new Audio('/music-box/sounds/kick.mp3');
let snare = new Audio('/music-box/sounds/snare.mp3');
let speed = 800;
let amp = 50
function playBeat() {
	if (beat == 0) {
		beat = 1;
		kick.pause();
		kick.currentTime = 0;
		kick.play();
		text.style.transition = 'unset';
		text.style.fontVariationSettings = `"freq" -100, "ampl" ${amp}`;
		setTimeout(() => {
			text.style.transition = `font-variation-settings cubic-bezier(0.25, 1, 0.5, 1) ${(speed-200)/1000}s`;
			text.style.fontVariationSettings = `"freq" 0, "ampl" ${amp}`;
		}, 50);
	} else {
		beat = 0;
		snare.pause();
		snare.currentTime = 0;
		snare.play();
		text.style.transition = 'unset';
		text.style.fontVariationSettings = `"freq" 100, "ampl" ${amp}`;
		setTimeout(() => {
			text.style.transition = `font-variation-settings cubic-bezier(0.25, 1, 0.5, 1) ${(speed-200)/1000}s`;
			text.style.fontVariationSettings = `"freq" 0, "ampl" ${amp}`;
		}, 50);
	}
	setTimeout(playBeat, speed);
}
playBeat();

// Resize text
let size = 2;
let sizes = [2.105, 5.15, 10.25, 14.6, 20.3];
let root = document.querySelector(':root');
function sizeUp() {
	if (size < sizes.length-1) {
		size += 1;
		root.style.setProperty('--size', sizes[size] + "vw");
	}
}
function sizeDown() {
	if (size > 0) {
		size -= 1;
		root.style.setProperty('--size', sizes[size] + "vw");
	}
}

// Outline
let outline = false;
let outlineBtn = document.querySelector('#toggle-outline');
function toggleOutline() {
	outline = !outline;
	if (outline) {
		text.dataset.outline = 1;
		outlineBtn.dataset.active = 1;
	} else {
		text.dataset.outline = 0;
		outlineBtn.dataset.active = 0;
	}
}

// Speed
let speeds = [400, 800, 1600];
let speedSetting = 0;
function setSpeed(e, setting) {
	for (let btn of document.querySelectorAll('.btn-speed')) {
		btn.dataset.active = 0;
	}
	e.dataset.active = 1;
	speedSetting = setting;
	speed = speeds[speedSetting];
}

// Amplitude
function ampUp() {
	if (amp < 100) {
		amp += 25;
	}
}
function ampDown() {
	if (amp > 0) {
		amp -= 25;
	}
}