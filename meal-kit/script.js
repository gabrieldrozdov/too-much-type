// Type letters
let alphabet = `abcdefghijklmnopqrstuvwxyz0123456789`.split('');
let content = document.querySelector('.content');
let cursor = document.querySelector('#cursor');
let index = 8;
document.addEventListener('keydown', (e) => {
	if (alphabet.includes(e.key.toLowerCase())) {
		let img = document.createElement('img');
		img.dataset.index = index;
		index++;
		img.src = `/meal-kit/letters/${e.key.toLowerCase()}.jpg`;
		content.insertBefore(img, cursor);
		content.scrollTop = content.scrollHeight;
	} else if (e.key == " ") {
		e.preventDefault();
		let space = document.createElement('div');
		space.dataset.index = index;
		space.classList.add('space');
		index++;
		content.insertBefore(space, cursor);
		content.scrollTop = content.scrollHeight;
	} else if (e.key == "Enter") {
		e.preventDefault();
		let lineBreak = document.createElement('div');
		lineBreak.dataset.index = index;
		lineBreak.classList.add('line-break');
		index++;
		content.insertBefore(lineBreak, cursor);
		content.scrollTop = content.scrollHeight;
	} else if (e.key == "Backspace" && index > 0) {
		index--;
		let target = content.querySelector(`[data-index="${index}"`);
		content.removeChild(target);
		content.scrollTop = content.scrollHeight;
	} else if (e.key == "-" || e.key == "_") {
		sizeDown();
	} else if (e.key == "+" || e.key == "=") {
		sizeUp();
	} else if (e.key == "Escape") {
		empty();
	}
});

// Resize text
let size = 2;
let sizes = [2, 5, 10, 20];
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

// Filter
let filter = false;
let filterBtn = document.querySelector('#toggle-filter');
function toggleFilter() {
	filter = !filter;
	if (filter) {
		content.dataset.filter = 1;
		filterBtn.dataset.active = 1;
	} else {
		content.dataset.filter = 0;
		filterBtn.dataset.active = 0;
	}
}

// Clear text
function empty() {
	index = 0;
	for (let letter of content.querySelectorAll('[data-index]')) {
		letter.remove();
	}
}