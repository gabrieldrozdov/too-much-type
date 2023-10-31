let screenLeft = 0;
let screenTop = 0;
let screenRight = window.innerWidth;
let screenBottom = window.innerHeight - 24;
let screenHeight = screenBottom-screenTop;
let screenWidth = screenRight-screenLeft;

window.addEventListener('resize', calculateBorders);
function calculateBorders() {
	screenRight = window.innerWidth;
	screenBottom = window.innerHeight - 24;
	screenHeight = screenBottom-screenTop;
	screenWidth = screenRight-screenLeft;	
}

// ———————————————————————————————————————————————
// FONTS
// ———————————————————————————————————————————————

let fontInfo = {
	'Bashful': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'variation': {
			'Bashfulness': {
				'code': 'BASH',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'Caffeine': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?•*#//\-–—_(){}[]“”‘’"'@&©°|†‡$+−×÷=><≈~^%↑↗→↘↓↙←↖↔↕`,
		'variation': {
			'Scribble': {
				'code': 'SCRI',
				'min': 0,
				'max': 100,
				'default': 0
			},
			'Scrabble': {
				'code': 'SCRA',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'Dreidel': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;-`,
		'variation': {
			'Spin': {
				'code': 'spin',
				'min': -45,
				'max': 360,
				'default': -45
			}
		}
	},
	'Limkin': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789`,
		'variation': {
			'Weight': {
				'code': 'wght',
				'min': 100,
				'max': 900,
				'default': 500
			},
			'Serif': {
				'code': 'SRFF',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'Mini Mochi': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;!?-–—_“”‘’"'`,
		'variation': {
			'Stretch': {
				'code': 'STCH',
				'min': 0,
				'max': 100,
				'default': 50
			},
			'Flavor': {
				'code': 'FLAV',
				'min': 0,
				'max': 100,
				'default': 0
			},
			'Slice': {
				'code': 'SLCE',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'Music Box': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'variation': {
			'Frequency': {
				'code': 'freq',
				'min': -100,
				'max': 100,
				'default': 0
			},
			'Amplitude': {
				'code': 'ampl',
				'min': 0,
				'max': 100,
				'default': 50
			}
		}
	},
	'Paint': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?*#//\-–—_(){}[]“”‘’"'@&|$+−×÷=><~^%↑↗→↘↓↙←↖↔↕`,
		'variation': ''
	},
	'PowerPack': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;…!?•*#//\-–—_(){}[]“”‘’"'@&©|¢$+−×÷=><~%↑→↓←`,
		'variation': {
			'Charge': {
				'code': 'chrg',
				'min': 0,
				'max': 100,
				'default': 0
			},
			'Power': {
				'code': 'powr',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'That Then This': {
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,;!?#//-[]“”‘’"'`,
		'variation': {
			'Variation': {
				'code': 'VARI',
				'min': 0,
				'max': 100,
				'default': 0
			},
			'Distribution': {
				'code': 'DIST',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	}
}
let fontNames = Object.keys(fontInfo);
let colorSplit = 360/(fontNames.length+1);
let fontColor = 0;
for (let fontName of fontNames) {
	fontInfo[fontName]['letters'] = fontInfo[fontName]['letters'].split('');
	fontInfo[fontName]['glyphs'] = fontInfo[fontName]['glyphs'].split('');
	fontInfo[fontName]['color'] = fontColor;
	fontColor += colorSplit;
}

// ———————————————————————————————————————————————
// WINDOWS
// ———————————————————————————————————————————————

// Stores all active windows
let windows = new Map();
let windowData = {
	'sylvania': {
		'icon': `<svg viewBox="0 0 100 100"><rect x="40" y="30" width="10" height="20"/><rect x="50" y="10" width="10" height="20"/><rect x="10" y="10" width="10" height="20"/><rect x="30" y="10" width="10" height="20"/><rect x="20" y="30" width="10" height="20"/><polygon points="60 70 60 60 80 60 80 50 50 50 50 90 60 90 60 80 80 80 80 70 60 70"/><rect x="80" y="60" width="10" height="10"/></svg>`,
		'title': 'Sylvania',
		'primary': 'hsl(40deg, 100%, 70%)',
		'secondary': 'hsl(40deg, 100%, 10%)',
		'file': 'sylvania/'
	},
	'music-box': {
		'icon': `<svg viewBox="0 0 100 100"><rect x="40" y="30" width="10" height="20"/><rect x="50" y="10" width="10" height="20"/><rect x="10" y="10" width="10" height="20"/><rect x="30" y="10" width="10" height="20"/><rect x="20" y="30" width="10" height="20"/><polygon points="60 70 60 60 80 60 80 50 50 50 50 90 60 90 60 80 80 80 80 70 60 70"/><rect x="80" y="60" width="10" height="10"/></svg>`,
		'title': 'Sylvania',
		'primary': 'hsl(300deg, 100%, 70%)',
		'secondary': 'hsl(300deg, 100%, 10%)',
		'file': 'music-box/'
	},
	'meal-kit': {
		'icon': `<svg viewBox="0 0 100 100"><rect x="40" y="30" width="10" height="20"/><rect x="50" y="10" width="10" height="20"/><rect x="10" y="10" width="10" height="20"/><rect x="30" y="10" width="10" height="20"/><rect x="20" y="30" width="10" height="20"/><polygon points="60 70 60 60 80 60 80 50 50 50 50 90 60 90 60 80 80 80 80 70 60 70"/><rect x="80" y="60" width="10" height="10"/></svg>`,
		'title': 'Sylvania',
		'primary': 'hsl(100deg, 100%, 70%)',
		'secondary': 'hsl(100deg, 100%, 10%)',
		'file': 'meal-kit/'
	}
}

let activeWindow = 'a';
let idCounter = 0;
let zCounter = 9;
class pseudoWindow {
	constructor(src) {
		this.id = idCounter;
		this.src = src;
		this.posX = 0;
		this.posY = 0;
		this.dimX = 0;
		this.dimY = 0;
		this.elmnt;
		this.minimized = false;
		this.number = 0;
		this.dockItem;
		this.lineWrapping = false;
		this.showCode = false;

		// Create window element
		this.elmnt = document.createElement('div');
		this.elmnt.classList.add('window');
		this.elmnt.addEventListener('mousedown', this.bringToTop);
		this.elmnt.addEventListener('touchstart', this.bringToTop);
		this.elmnt.id = this.id;
		this.elmnt.dataset.code = this.showCode;

		// Generate window titlebar
		let titlebar = document.createElement('div');
		titlebar.classList.add('window-titlebar');
		this.elmnt.appendChild(titlebar);

		let title = document.createElement('div');
		title.classList.add('window-title');
		title.addEventListener('mousedown', (e) => {this.move(e)});
		title.addEventListener('touchstart', (e) => {this.move(e)});

		let titleName = document.createElement('h3');
		titleName.classList.add('window-title-name');

		// Style with color, icon, and info
		this.elmnt.style.setProperty('--primary', windowData[this.src]['primary']);
		this.elmnt.style.setProperty('--secondary', windowData[this.src]['secondary']);
		title.innerHTML += windowData[this.src]['icon'];
		titleName.innerText = windowData[this.src]['title'];

		title.appendChild(titleName);
		titlebar.appendChild(title);

		// Create titlebar buttons
		let btnMinimize = document.createElement('div');
		let btnMaximize = document.createElement('div');
		let btnClose = document.createElement('div');

		btnMinimize.innerHTML = `<svg viewBox="0 0 100 100"><rect x="10" y="80" width="80" height="10"/></svg>`;
		btnMaximize.innerHTML = `<svg viewBox="0 0 100 100"><path d="m10,10v80h80V10H10Zm10,70V30h60v50H20Z"/></svg>`;
		btnClose.innerHTML = `<svg viewBox="0 0 100 100"><rect x="10" y="80" width="10" height="10"/><rect x="20" y="70" width="10" height="10"/><rect x="30" y="60" width="10" height="10"/><rect x="40" y="40" width="20" height="20"/><rect x="60" y="30" width="10" height="10"/><rect x="70" y="20" width="10" height="10"/><rect x="80" y="10" width="10" height="10"/><rect x="10" y="10" width="10" height="10"/><rect x="20" y="20" width="10" height="10"/><rect x="30" y="30" width="10" height="10"/><rect x="60" y="60" width="10" height="10"/><rect x="70" y="70" width="10" height="10"/><rect x="80" y="80" width="10" height="10"/></svg>`;

		btnMinimize.classList.add('window-titlebar-btn');
		btnMaximize.classList.add('window-titlebar-btn');
		btnClose.classList.add('window-titlebar-btn');

		btnMinimize.addEventListener('click', this.minimize);
		btnMaximize.addEventListener('click', this.maximize);
		btnClose.addEventListener('click', this.close);

		titlebar.appendChild(btnMinimize);
		titlebar.appendChild(btnMaximize);
		titlebar.appendChild(btnClose);

		// Generate resizers
		let resizeTopleft = document.createElement('div');
		let resizeTop = document.createElement('div');
		let resizeTopright = document.createElement('div');
		let resizeRight = document.createElement('div');
		let resizeBottomright = document.createElement('div');
		let resizeBottom = document.createElement('div');
		let resizeBottomleft = document.createElement('div');
		let resizeLeft = document.createElement('div');

		resizeTopleft.classList.add('window-resize', 'window-resize-topleft');
		resizeTop.classList.add('window-resize', 'window-resize-top');
		resizeTopright.classList.add('window-resize', 'window-resize-topright');
		resizeRight.classList.add('window-resize', 'window-resize-right');
		resizeBottomright.classList.add('window-resize', 'window-resize-bottomright');
		resizeBottom.classList.add('window-resize', 'window-resize-bottom');
		resizeBottomleft.classList.add('window-resize', 'window-resize-bottomleft');
		resizeLeft.classList.add('window-resize', 'window-resize-left');

		resizeTopleft.addEventListener('mousedown', (e) => {this.resize(e, 'topleft')});
		resizeTop.addEventListener('mousedown', (e) => {this.resize(e, 'top')});
		resizeTopright.addEventListener('mousedown', (e) => {this.resize(e, 'topright')});
		resizeRight.addEventListener('mousedown', (e) => {this.resize(e, 'right')});
		resizeBottomright.addEventListener('mousedown', (e) => {this.resize(e, 'bottomright')});
		resizeBottom.addEventListener('mousedown', (e) => {this.resize(e, 'bottom')});
		resizeBottomleft.addEventListener('mousedown', (e) => {this.resize(e, 'bottomleft')});
		resizeLeft.addEventListener('mousedown', (e) => {this.resize(e, 'left')});

		resizeTopleft.addEventListener('touchstart', (e) => {this.resize(e, 'topleft')});
		resizeTop.addEventListener('touchstart', (e) => {this.resize(e, 'top')});
		resizeTopright.addEventListener('touchstart', (e) => {this.resize(e, 'topright')});
		resizeRight.addEventListener('touchstart', (e) => {this.resize(e, 'right')});
		resizeBottomright.addEventListener('touchstart', (e) => {this.resize(e, 'bottomright')});
		resizeBottom.addEventListener('touchstart', (e) => {this.resize(e, 'bottom')});
		resizeBottomleft.addEventListener('touchstart', (e) => {this.resize(e, 'bottomleft')});
		resizeLeft.addEventListener('touchstart', (e) => {this.resize(e, 'left')});

		this.elmnt.appendChild(resizeTopleft);
		this.elmnt.appendChild(resizeTop);
		this.elmnt.appendChild(resizeTopright);
		this.elmnt.appendChild(resizeRight);
		this.elmnt.appendChild(resizeBottomright);
		this.elmnt.appendChild(resizeBottom);
		this.elmnt.appendChild(resizeBottomleft);
		this.elmnt.appendChild(resizeLeft);

		// Generate controls
		let controls = document.createElement('div');
		controls.classList.add('window-controls');
		controls.innerHTML = `
			<button class="controls-file">
				<svg viewBox="0 0 100 100"><path d="m50,30V10H10v80h80V30h-40Zm-30-10h20v10h-20v-10Zm60,60H20v-40h60v40Z"/></svg>
				<span>File</span>
			</button>
			<button class="controls-edit">
				<svg viewBox="0 0 100 100"><polygon points="30 70 20 70 20 60 10 60 10 90 40 90 40 80 30 80 30 70"/><rect x="20" y="50" width="10" height="10"/><rect x="30" y="40" width="10" height="10"/><rect x="40" y="30" width="10" height="10"/><polygon points="80 30 80 20 70 20 70 10 60 10 60 20 50 20 50 30 60 30 60 40 70 40 70 50 80 50 80 40 90 40 90 30 80 30"/><rect x="60" y="50" width="10" height="10"/><rect x="50" y="40" width="10" height="10"/><rect x="50" y="60" width="10" height="10"/><rect x="40" y="70" width="10" height="10"/></svg>
				<span>Edit</span>
			</button>
			<button class="controls-view">
				<svg viewBox="0 0 100 100"><rect x="80" y="80" width="10" height="10"/><rect x="70" y="70" width="10" height="10"/><rect x="60" y="60" width="10" height="10"/><rect x="50" y="50" width="10" height="10"/><rect x="30" y="60" width="20" height="10"/><rect x="20" y="50" width="10" height="10"/><rect x="10" y="30" width="10" height="20"/><rect x="20" y="20" width="10" height="10"/><rect x="30" y="10" width="20" height="10"/><rect x="50" y="20" width="10" height="10"/><rect x="60" y="30" width="10" height="20"/></svg>
				<span>View</span>
			</button>
			<button class="controls-window">
				<svg viewBox="0 0 100 100"><path d="M10,10v80h80V10H10z M20,20h60v10H20V20z M20,80V40h60v40H20z"/></svg>
				<span>Window</span>
			</button>
			<div class="window-controls-spacer"></div>
		`;

		let controlsFile = controls.querySelector('.controls-file');
		let controlsEdit = controls.querySelector('.controls-edit');
		let controlsView = controls.querySelector('.controls-view');
		let controlsWindow = controls.querySelector('.controls-window');
		controlsFile.addEventListener('click', () => {this.openMenu('file')});
		controlsEdit.addEventListener('click', () => {this.openMenu('edit')});
		controlsView.addEventListener('click', () => {this.openMenu('view')});
		controlsWindow.addEventListener('click', () => {this.openMenu('window')});

		this.elmnt.appendChild(controls);

		let controlsMenus = document.createElement('div');
		controlsMenus.classList.add('window-controls-menus');
		controlsMenus.dataset.menu = '';
		controlsMenus.innerHTML = `
			<div class="window-controls-menu" data-menu="file">
				<button class="controls-download">
					<svg viewBox="0 0 100 100"><polygon points="35 60 45 60 45 70 55 70 55 60 65 60 65 50 75 50 75 40 55 40 55 10 45 10 45 40 25 40 25 50 35 50 35 60"/><polygon points="80 70 80 80 20 80 20 70 10 70 10 90 90 90 90 70 80 70"/></svg>
					<span>Download ZIP</span>
				</button>
				<button class="controls-reset">
					<svg viewBox="0 0 100 100"><rect x="40" y="80" width="20" height="10"/><rect x="30" y="70" width="10" height="10"/><rect x="20" y="60" width="10" height="10"/><polygon points="20 20 10 20 10 50 40 50 40 40 30 40 30 30 20 30 20 20"/><rect x="30" y="20" width="10" height="10"/><rect x="40" y="10" width="20" height="10"/><rect x="60" y="20" width="10" height="10"/><rect x="70" y="30" width="10" height="10"/><rect x="80" y="40" width="10" height="20"/><rect x="70" y="60" width="10" height="10"/><rect x="60" y="70" width="10" height="10"/></svg>
					<span>Reset Changes</span>
				</button>
				<button class="controls-github">
					<svg viewBox="0 0 100 100"><rect x="20" y="80" width="20" height="10"/><rect x="10" y="60" width="10" height="20"/><rect x="20" y="50" width="10" height="10"/><rect x="50" y="50" width="10" height="20"/><rect x="40" y="70" width="10" height="10"/><rect x="40" y="30" width="10" height="20"/><rect x="50" y="20" width="10" height="10"/><rect x="60" y="10" width="20" height="10"/><rect x="80" y="20" width="10" height="20"/><rect x="70" y="40" width="10" height="10"/></svg>
					<span>Open on GitHub</span>
				</button>
				<button class="controls-link">
					<svg viewBox="0 0 100 100"><rect x="20" y="80" width="20" height="10"/><rect x="10" y="60" width="10" height="20"/><rect x="20" y="50" width="10" height="10"/><rect x="50" y="50" width="10" height="20"/><rect x="40" y="70" width="10" height="10"/><rect x="40" y="30" width="10" height="20"/><rect x="50" y="20" width="10" height="10"/><rect x="60" y="10" width="20" height="10"/><rect x="80" y="20" width="10" height="20"/><rect x="70" y="40" width="10" height="10"/></svg>
					<span>Open in a New Tab</span>
				</button>
			</div>

			<div class="window-controls-menu" data-menu="edit">
				<button class="controls-indent-right" data-codeonly="1">
					<svg viewBox="0 0 100 100"><polygon points="30 10 30 20 60 20 60 80 30 80 30 90 70 90 70 10 30 10"/></svg>
					<span>Increase Indent</span>
				</button>
				<button class="controls-indent-left" data-codeonly="1">
					<svg viewBox="0 0 100 100"><polygon points="70 10 70 20 40 20 40 80 70 80 70 90 30 90 30 10 70 10"/></svg>
					<span>Decrease Indent</span>
				</button>
				<button class="controls-comment" data-codeonly="1">
					<svg viewBox="0 0 100 100"><polygon points="20 20 10 20 10 90 20 90 20 80 30 80 30 70 20 70 20 20"/><rect x="20" y="10" width="60" height="10"/><rect x="80" y="20" width="10" height="30"/><rect x="30" y="60" width="10" height="10"/><polygon points="50 50 40 50 40 60 50 60 60 60 80 60 80 50 60 50 50 50"/></svg>
					<span>Comment Selection</span>
				</button>
				<button class="controls-uncomment" data-codeonly="1">
					<svg viewBox="0 0 100 100"><polygon points="20 20 10 20 10 90 20 90 20 80 30 80 30 70 20 70 20 20"/><rect x="20" y="10" width="60" height="10"/><rect x="80" y="20" width="10" height="30"/><rect x="30" y="60" width="10" height="10"/><polygon points="50 50 40 50 40 60 50 60 60 60 80 60 80 50 60 50 50 50"/></svg>
					<span>Uncomment Selection</span>
				</button>
				<button class="controls-format" data-codeonly="1">
					<svg viewBox="0 0 100 100"><rect x="10" y="40" width="10" height="10"/><rect x="20" y="30" width="10" height="10"/><rect x="20" y="50" width="10" height="10"/><rect x="30" y="70" width="10" height="20"/><rect x="40" y="50" width="10" height="20"/><rect x="50" y="30" width="10" height="20"/><rect x="60" y="10" width="10" height="20"/><rect x="70" y="60" width="10" height="10"/><rect x="80" y="50" width="10" height="10"/><rect x="70" y="40" width="10" height="10"/></svg>
					<span>Autoformat Selection</span>
				</button>
			</div>

			<div class="window-controls-menu" data-menu="view">
				<button class="controls-code">
					<svg viewBox="0 0 100 100"><rect x="10" y="40" width="10" height="10"/><rect x="20" y="30" width="10" height="10"/><rect x="20" y="50" width="10" height="10"/><rect x="30" y="70" width="10" height="20"/><rect x="40" y="50" width="10" height="20"/><rect x="50" y="30" width="10" height="20"/><rect x="60" y="10" width="10" height="20"/><rect x="70" y="60" width="10" height="10"/><rect x="80" y="50" width="10" height="10"/><rect x="70" y="40" width="10" height="10"/></svg>
					<span>Hide/Show Code Editor</span>
				</button>
				<button class="controls-font-up" data-codeonly="1">
					<svg viewBox="0 0 100 100"><polygon points="90 45 55 45 55 10 45 10 45 45 10 45 10 55 45 55 45 90 55 90 55 55 90 55 90 45"/></svg>
					<span>Increase Font Size</span>
				</button>
				<button class="controls-font-down" data-codeonly="1">
					<svg viewBox="0 0 100 100"><rect x="10" y="45" width="80" height="10"/></svg>
					<span>Decrease Font Size</span>
				</button>
				<button class="controls-wrap" data-codeonly="1">
					<svg viewBox="0 0 100 100"><polygon points="10 10 10 20 80 20 80 60 40 60 40 40 30 40 30 50 20 50 20 60 10 60 10 70 20 70 20 80 30 80 30 90 40 90 40 70 90 70 90 10 10 10"/></svg>
					<span>Toggle Text Wrapping</span>
				</button>
			</div>

			<div class="window-controls-menu" data-menu="window">
				<button class="controls-snap-left">
					<svg viewBox="0 0 100 100"><polygon points="19.925 45.075 9.925 45.075 9.925 55.075 19.925 55.075 19.925 65.075 29.925 65.075 29.925 55.075 90.075 55.075 90.075 45.075 29.925 45.075 29.925 35.075 19.925 35.075 19.925 45.075"/><rect x="29.925" y="65.075" width="10" height="10"/><rect x="39.925" y="75.075" width="10" height="10"/><rect x="29.925" y="25.075" width="10" height="10"/><rect x="39.925" y="15.075" width="10" height="10"/></svg>
					<span>Snap to Left</span>
				</button>
				<button class="controls-snap-right">
					<svg viewBox="0 0 100 100"><polygon points="80.075 55.075 90.075 55.075 90.075 45.075 80.075 45.075 80.075 35.075 70.075 35.075 70.075 45.075 9.925 45.075 9.925 55.075 70.075 55.075 70.075 65.075 80.075 65.075 80.075 55.075"/><rect x="60.075" y="25.075" width="10" height="10"/><rect x="50.075" y="15.075" width="10" height="10"/><rect x="60.075" y="65.075" width="10" height="10"/><rect x="50.075" y="75.075" width="10" height="10"/></svg>
					<span>Snap to Right</span>
				</button>
				<button class="controls-snap-top">
					<svg viewBox="0 0 100 100"><polygon points="55 20 55 10 45 10 45 20 35 20 35 30 45 30 45 90.149 55 90.149 55 30 65 30 65 20 55 20"/><rect x="25" y="30" width="10" height="10"/><rect x="15" y="40" width="10" height="10"/><rect x="65" y="30" width="10" height="10"/><rect x="75" y="40" width="10" height="10"/></svg>
					<span>Snap to Top</span>
				</button>
				<button class="controls-snap-bottom">
					<svg viewBox="0 0 100 100"><polygon points="45 80.149 45 90.149 55 90.149 55 80.149 65 80.149 65 70.149 55 70.149 55 10 45 10 45 70.149 35 70.149 35 80.149 45 80.149"/><rect x="65" y="60.149" width="10" height="10"/><rect x="75" y="50.149" width="10" height="10"/><rect x="25" y="60.149" width="10" height="10"/><rect x="15" y="50.149" width="10" height="10"/></svg>
					<span>Snap to Bottom</span>
				</button>
				<button class="controls-expand">
					<svg viewBox="0 0 100 100"><path d="m10,10v80h80V10H10Zm10,70V30h60v50H20Z"/></svg>
					<span>Expand</span>
				</button>
				<button class="controls-minimize">
					<svg viewBox="0 0 100 100"><rect x="10" y="80" width="80" height="10"/></svg>
					<span>Minimize</span>
				</button>
			</div>
		`;

		this.elmnt.appendChild(controlsMenus);
		controlsMenus.addEventListener('click', this.closeControls);
		this.menus = controlsMenus;

		// File controls
		let controlsReset = controlsMenus.querySelector('.controls-reset');
		controlsReset.addEventListener('click', this.resetCode);
		let controlsGitHub = controlsMenus.querySelector('.controls-github');
		controlsGitHub.addEventListener('click', () => {openLink('https://github.com/gabrieldrozdov/too-much-type/'+windowData[this.src]['file'])});
		let controlsLink = controlsMenus.querySelector('.controls-link');
		controlsLink.addEventListener('click', this.openLink);

		// Edit controls
		let controlsIndentRight = controlsMenus.querySelector('.controls-indent-right');
		controlsIndentRight.addEventListener('click', () => {this.cmCommand('indentMore')});
		let controlsIndentLeft = controlsMenus.querySelector('.controls-indent-left');
		controlsIndentLeft.addEventListener('click', () => {this.cmCommand('indentLess')});
		let controlsComment = controlsMenus.querySelector('.controls-comment');
		controlsComment.addEventListener('click', () => {this.commentSelection(true)});
		let controlsUncomment = controlsMenus.querySelector('.controls-uncomment');
		controlsUncomment.addEventListener('click', () => {this.commentSelection(false)});
		let controlsFormat = controlsMenus.querySelector('.controls-format');
		controlsFormat.addEventListener('click', this.autoFormatSelection);

		// View controls
		let controlsCode = controlsMenus.querySelector('.controls-code');
		controlsCode.addEventListener('click', this.toggleCode);
		let controlsFontUp = controlsMenus.querySelector('.controls-font-up');
		controlsFontUp.addEventListener('click', () => {this.changeFontSize(2)});
		let controlsFontDown = controlsMenus.querySelector('.controls-font-down');
		controlsFontDown.addEventListener('click', () => {this.changeFontSize(-2)});
		let controlsWrap = controlsMenus.querySelector('.controls-wrap');
		controlsWrap.addEventListener('click', this.toggleWrap);

		// Window controls
		let controlsSnapLeft = controlsMenus.querySelector('.controls-snap-left');
		let controlsSnapRight = controlsMenus.querySelector('.controls-snap-right');
		let controlsSnapTop = controlsMenus.querySelector('.controls-snap-top');
		let controlsSnapBottom = controlsMenus.querySelector('.controls-snap-bottom');
		controlsSnapLeft.addEventListener('click', () => {this.snapPosition('left')});
		controlsSnapRight.addEventListener('click', () => {this.snapPosition('right')});
		controlsSnapTop.addEventListener('click', () => {this.snapPosition('top')});
		controlsSnapBottom.addEventListener('click', () => {this.snapPosition('bottom')});
		let controlsExpand = controlsMenus.querySelector('.controls-expand');
		controlsExpand.addEventListener('click', this.maximize);
		let controlsMinimize = controlsMenus.querySelector('.controls-minimize');
		controlsMinimize.addEventListener('click', this.minimize);

		// Generate content
		let content = document.createElement('div');
		content.classList.add('window-content');
		content.innerHTML = `
			<div class="editor-code"></div>
			<div class="editor-resize"></div>
			<iframe class="editor-preview"></iframe>
		`

		this.editor = content.querySelector('.editor-code');
		this.editor.style.fontSize = '12px';
		this.preview = content.querySelector('.editor-preview');

		// Create CodeMirror instance
		let editor = content.querySelector('.editor-code');
		this.cm = CodeMirror(editor, {
			mode: "htmlmixed",
			value: '<h1>Hello World!</h1>',
			autoCloseTags: true,
			autoCloseBrackets: true,
			matchBrackets: true,
			smartIndent: true,
			lineNumbers: true,
			tabSize: 2,
			showHint: true,
			extraKeys: {"Ctrl-Space": "autocomplete"},
			lineWrapping: false,
			theme: "toomuchtype",
		});
		CodeMirror.commands["selectAll"](this.cm);

		this.cm.on("change", this.updatePreview);

		// Get source file
		this.data;
		fetch(windowData[this.src]['file'])
			.then((response) => response.text())
			.then((data) => {
				this.data = data;
				this.cm.setValue(this.data);
			})

		this.elmnt.appendChild(content);

		// Generate status bar
		let statusbar = document.createElement('div');
		statusbar.classList.add('window-statusbar');
		this.elmnt.appendChild(statusbar);

		// Add to dock
		const dockWindows = document.querySelector('.dock-windows');
		let dockItem = document.createElement('div');
		this.dockItem = dockItem;
		dockItem.classList.add('dock-item');
		dockItem.dataset.window = this.id;
		dockItem.style.setProperty('--primary', windowData[this.src]['primary']);
		dockItem.style.setProperty('--secondary', windowData[this.src]['secondary']);
		dockItem.innerHTML = `
			${windowData[this.src]['icon']}
			<p class="dock-item-text">${windowData[this.src]['title']}</p>
		`;
		dockItem.addEventListener('click', this.dockSelect);
		dockWindows.appendChild(dockItem);

		// Add to DOM and transition in
		const container = document.querySelector('.container');
		this.elmnt.classList.add('minimized');
		setTimeout(() => {
			this.elmnt.classList.remove('minimized');
			this.bringToTop();
		}, 100)
		container.appendChild(this.elmnt);
		this.resetPosition();

		idCounter++;
	}

	// Controls menus
	closeControls = () => {
		let body = document.querySelector('body');
		body.removeEventListener('click', this.closeControls);

		this.menus.dataset.menu = '';
		
		// Deactivate all menu button styles
		for (let btn of this.elmnt.querySelectorAll('.window-controls button')) {
			btn.dataset.active = 0;
		}
	}
	openMenu = (menu) => {
		let body = document.querySelector('body');
		body.removeEventListener('click', this.closeControls);
		
		// Calculate position
		let menuButtons = this.elmnt.querySelector('.window-controls');
		let offsets1 = menuButtons.getBoundingClientRect();
		let menuButton = this.elmnt.querySelector('.controls-'+menu);
		let offsets2 = menuButton.getBoundingClientRect();
		this.menus.style.left = offsets2.left-offsets1.left-1 + "px";

		// Deactivate all menu button styles
		for (let btn of this.elmnt.querySelectorAll('.window-controls button')) {
			btn.dataset.active = 0;
		}

		// Open logic
		if (menu == this.menus.dataset.menu) {
			this.menus.dataset.menu = '';
		} else {
			this.menus.dataset.menu = menu;
			menuButton.dataset.active = 1;
			setTimeout(() => {
				body.addEventListener('click', this.closeControls);
			}, 50)
		}
	}

	// CodeMirror methods
	getSelectedRange = () => {
		return { from: this.cm.getCursor(true), to: this.cm.getCursor(false) };
	}
	autoFormatSelection = () => {
		var range = this.getSelectedRange();
		this.cm.autoFormatRange(range.from, range.to);
	}
	cmCommand = (command) => {
		this.cm.execCommand(command);
	}
	commentSelection = (isComment) => {
		var range = this.getSelectedRange();
		this.cm.commentRange(isComment, range.from, range.to);
	}
	updatePreview = () => {
		this.preview.srcdoc = this.cm.getValue();
		this.preview.contentDocument.addEventListener('click', this.bringToTop);
	}
	toggleCode = () => {
		this.showCode = !this.showCode;
		this.elmnt.dataset.code = this.showCode;
		setTimeout(() => {
			this.cm.refresh();
		}, 50)
	}
	toggleWrap = () => {
		this.lineWrapping = !this.lineWrapping;
		this.cm.setOption('lineWrapping', this.lineWrapping);
	}
	resetCode = () => {
		this.cm.setValue(this.data);
	}
	changeFontSize = (increment) => {
		if (parseInt(this.editor.style.fontSize)+increment <= 8 || parseInt(this.editor.style.fontSize)+increment >= 18) {
			return
		}
		this.editor.style.fontSize = parseInt(this.editor.style.fontSize)+increment + "px";
		this.cm.refresh();
	}
	openLink = () => {
		window.open(windowData[this.src]['file'], '_blank');
	}

	// Set actual position to stored position
	refreshPosition() {
		this.elmnt.style.left = this.posX + "px";
		this.elmnt.style.top = this.posY + "px";
		this.elmnt.style.width = this.dimX + "px";
		this.elmnt.style.height = this.dimY + "px";
	}
	
	// Reset stored position
	resetPosition = () => {
		if (window.innerWidth > 1000) { // desktop
			this.posX = screenWidth*1/5 + screenLeft + Math.random()*20-10;
			this.posY = screenHeight*1/10 + screenTop + Math.random()*20-10;
			this.dimX = screenWidth*3/5 + Math.random()*20-10;
			this.dimY = screenHeight*8/10 + Math.random()*20-10;
		} else { // mobile
			this.posX = screenLeft + 10 + Math.random()*10-5;
			this.posY = screenTop + 10 + Math.random()*10-5;
			this.dimX = screenWidth - 20 + Math.random()*10-5;
			this.dimY = screenHeight - 20 + Math.random()*10-5;
		}
		this.refreshPosition();
	}

	// Activate and deactivate preview
	activatePreview = () => {
		this.preview.dataset.active = 1;
	}
	deactivatePreview = () => {
		this.preview.dataset.active = 0;
	}

	// Window positioning and state
	dockSelect = () => {
		if (parseInt(this.dockItem.dataset.selected) == 1) {
			this.minimize();
		} else {
			this.show();
			this.bringToTop();
		}
	}
	maximize = () => {
		if (this.posX == screenLeft && this.posY == screenTop && this.dimX == screenWidth && this.dimY == screenHeight) {
			this.resetPosition();
		} else {
			this.posX = screenLeft;
			this.posY = screenTop;
			this.dimX = screenRight-screenLeft;
			this.dimY = screenBottom-screenTop;
		}
		this.refreshPosition();
	}
	minimize = () => {
		this.elmnt.classList.add('minimized');
		this.minimized = true;

		this.dockItem.dataset.active = 0;
		this.dockItem.dataset.selected = 0;
	}
	show = () => {
		this.elmnt.classList.remove('minimized');
		this.minimized = false;

		this.dockItem.dataset.active = 1;
		this.dockItem.dataset.selected = 1;
		
		this.bringToTop();

		// A ridiculous hack to get CodeMirror to render properly
		if (this.showCode) {
			setTimeout(() => {this.cm.refresh()}, 200)
			setTimeout(() => {this.cm.refresh()}, 300)
			setTimeout(() => {this.cm.refresh()}, 400)
		}
	}
	bringToTop = () => {
		if (activeWindow != this.id) {
			this.cm.refresh();
			for (let dockItem of document.querySelectorAll('.dock-item')) {
				dockItem.dataset.selected = 0;
			}
			for (let window of document.querySelectorAll('.window')) {
				window.dataset.active = 0;
			}
			for (let key of windows.keys()) {
				windows.get(key).deactivatePreview();
			}
			this.elmnt.style.zIndex = zCounter;
			this.elmnt.dataset.active = 1;
			activeWindow = this.id;
			zCounter++;
			this.dockItem.dataset.selected = 1;
			this.activatePreview();
		}
	}
	close = () => {
		this.elmnt.remove();
		this.dockItem.remove();
		windows.delete(this.id);
	}
	snapPosition = (side) => {
		if (side == 'top') {
			this.posX = screenLeft;
			this.posY = screenTop;
			this.dimX = screenWidth;
			this.dimY = screenHeight/2;
		} else if (side == 'right') {
			this.posX = screenWidth/2 + screenLeft;
			this.posY = screenTop;
			this.dimX = screenWidth/2;
			this.dimY = screenHeight;
		} else if (side == 'bottom') {
			this.posX = screenLeft;
			this.posY = screenHeight/2 + screenTop;
			this.dimX = screenWidth;
			this.dimY = screenHeight/2;
		} else if (side == 'left') {
			this.posX = screenLeft;
			this.posY = screenTop;
			this.dimX = screenWidth/2;
			this.dimY = screenHeight;
		}
		this.refreshPosition();
	}
	move = (e1) => {
		adjustMove = adjustMove.bind(this);
		endMove = endMove.bind(this);

		e1.preventDefault();
		this.elmnt.dataset.reposition = 1;
		window.addEventListener('mouseup', endMove);
		window.addEventListener('mousemove', adjustMove);
		window.addEventListener("touchend", endMove);
		window.addEventListener("touchmove", adjustMove);

		// Deactivate previews to avoid mouse capture
		setTimeout(() => {
			deactivatePreviews();
		}, 50)

		let posX1, posY1;
		if (e1.touches != null) {
			posX1 = e1.touches[0].clientX;
			posY1 = e1.touches[0].clientY;
		} else {
			posX1 = e1.clientX;
			posY1 = e1.clientY;
		}
		var prevPos = [posX1, posY1];

		function adjustMove(e2) {
			let posX, posY;
			if (e2.touches != null) {
				posX = e2.touches[0].clientX;
				posY = e2.touches[0].clientY;
			} else {
				posX = e2.clientX;
				posY = e2.clientY;
				e2.preventDefault();
			}

			let currentPos = [posX, posY];
			let deltaPos = [currentPos[0] - prevPos[0], currentPos[1] - prevPos[1]];

			// Keep window in sync with mouse
			if (currentPos[1] < screenTop) {
				this.posY = screenTop;
			} else if (currentPos[1] > screenBottom) {
				this.posY = screenBottom;
			} else {
				this.posY += deltaPos[1];
			}
			if (currentPos[0] >= screenLeft && currentPos[0] <= screenRight) {
				this.posX += deltaPos[0];
			}

			// Bounds
			if (this.posX + this.dimX < screenLeft+200) {
				this.posX = -this.dimX+screenLeft+200;
			}
			if (this.posX > screenWidth-200) {
				this.posX = screenWidth-200;
			}
			if (this.posY < screenTop) {
				this.posY = screenTop;
			}
			if (this.posY > screenHeight) {
				this.posY = screenHeight;
			}

			// Snap to size
			let sizer = document.querySelector('.sizer');
			sizer.style.zIndex = zCounter+1;
			if (currentPos[1] <= screenTop + 10) {
				sizer.dataset.pos = 'top';
			} else if (currentPos[1] >= screenBottom - 10) {
				sizer.dataset.pos = 'bottom';
			} else if (currentPos[0] <= screenLeft + 10 && window.innerWidth > 900) {
				sizer.dataset.pos = 'left';
			} else if (currentPos[0] >= screenRight - 10 && window.innerWidth > 900) {
				sizer.dataset.pos = 'right';
			} else {
				sizer.dataset.pos = '';
			}

			// Set position
			this.refreshPosition();

			prevPos = currentPos;
		}

		function endMove() {
			this.elmnt.dataset.reposition = 0;
			window.removeEventListener('mouseup', endMove);
			window.removeEventListener('mousemove', adjustMove);
			window.removeEventListener("touchend", endMove);
			window.removeEventListener("touchmove", adjustMove);

			// If sizer active, snap window position
			let sizer = document.querySelector('.sizer');
			if (sizer.dataset.pos == 'top') {
				this.posX = screenLeft;
				this.posY = screenTop;
				this.dimX = screenWidth;
				this.dimY = screenHeight/2;
			} else if (sizer.dataset.pos == 'right') {
				this.posX = screenWidth/2 + screenLeft;
				this.posY = screenTop;
				this.dimX = screenWidth/2;
				this.dimY = screenHeight;
			} else if (sizer.dataset.pos == 'bottom') {
				this.posX = screenLeft;
				this.posY = screenHeight/2 + screenTop;
				this.dimX = screenWidth;
				this.dimY = screenHeight/2;
			} else if (sizer.dataset.pos == 'left') {
				this.posX = screenLeft;
				this.posY = screenTop;
				this.dimX = screenWidth/2;
				this.dimY = screenHeight;
			}
			sizer.dataset.pos = '';
			this.refreshPosition();
			activatePreviews();
		}
	}
	resize = (e1, dir) => {
		adjustResize = adjustResize.bind(this);
		endResize = endResize.bind(this);

		e1.preventDefault();
		this.elmnt.dataset.reposition = 1;
		window.addEventListener('mouseup', endResize);
		window.addEventListener('mousemove', adjustResize);
		window.addEventListener("touchend", endResize);
		window.addEventListener("touchmove", adjustResize);

		// Deactivate previews to avoid mouse capture
		setTimeout(() => {
			deactivatePreviews();
		}, 100)

		// Force cursor style
		let body = document.querySelector('body');
		if (dir == 'topleft') {
			body.style.cursor = 'nwse-resize';
		} else if (dir == 'top') {
			body.style.cursor = 'ns-resize';
		} else if (dir == 'topright') {
			body.style.cursor = 'nesw-resize';
		} else if (dir == 'right') {
			body.style.cursor = 'ew-resize';
		} else if (dir == 'bottomright') {
			body.style.cursor = 'nwse-resize';
		} else if (dir == 'bottom') {
			body.style.cursor = 'ns-resize';
		} else if (dir == 'bottomleft') {
			body.style.cursor = 'nesw-resize';
		} else if (dir == 'left') {
			body.style.cursor = 'ew-resize';
		}

		// Resize window according to exact mouse position
		function adjustResize(e2) {
			const rect = this.elmnt.getBoundingClientRect();

			let posX, posY;
			if (e2.touches != null) {
				posX = e2.touches[0].clientX;
				posY = e2.touches[0].clientY;
			} else {
				posX = e2.clientX;
				posY = e2.clientY;
				e2.preventDefault();
			}

			// Handle directional resize
			if (dir == 'topleft') {
				this.posX = posX;
				this.dimX += rect.left - posX;
				if (this.dimX < 300) {
					this.dimX = 300;
					this.posX = rect.right - 300;
				}
				this.posY = posY;
				this.dimY += rect.top - posY;
				if (this.dimY < 300) {
					this.dimY = 300;
					this.posY = rect.bottom - 300;
				}
				if (this.posY < screenTop) {
					this.posY = screenTop;
					this.dimY = rect.bottom - screenTop;
				}
				if (this.posX < screenLeft) {
					this.posX = screenLeft;
					this.dimX = rect.right-screenLeft;
				}

			} else if (dir == 'top') {
				this.posY = posY;
				this.dimY += rect.top - posY;
				if (this.dimY < 300) {
					this.dimY = 300;
					this.posY = rect.bottom - 300;
				}
				if (this.posY < screenTop) {
					this.posY = screenTop;
					this.dimY = rect.bottom - screenTop;
				}

			} else if (dir == 'topright') {
				this.dimX += posX - rect.right;
				if (this.dimX < 300) {
					this.dimX = 300;
				}
				if (this.dimX + this.posX > window.innerWidth) {
					this.posX = rect.left;
					this.dimX = window.innerWidth - rect.left;
				}
				this.posY = posY;
				this.dimY += rect.top - posY;
				if (this.dimY < 300) {
					this.dimY = 300;
					this.posY = rect.bottom - 300;
				}
				if (this.posY < screenTop) {
					this.posY = screenTop;
					this.dimY = rect.bottom - screenTop;
				}
				if (this.dimX + this.posX > screenRight) {
					this.posX = rect.left;
					this.dimX = screenRight - rect.left;
				}

			} else if (dir == 'right') {
				this.dimX += posX - rect.right;
				if (this.dimX < 300) {
					this.dimX = 300;
				}
				if (this.dimX + this.posX > screenRight) {
					this.posX = rect.left;
					this.dimX = screenRight - rect.left;
				}

			} else if (dir == 'bottomright') {
				this.dimX += posX - rect.right;
				if (this.dimX < 300) {
					this.dimX = 300;
				}
				this.dimY += posY - rect.bottom;
				if (this.dimY < 300) {
					this.dimY = 300;
				}
				if (this.posY + this.dimY > screenBottom) {
					this.posY = rect.top;
					this.dimY = screenBottom - rect.top;
				}
				if (this.dimX + this.posX > screenRight) {
					this.posX = rect.left;
					this.dimX = screenRight - rect.left;
				}

			} else if (dir == 'bottom') {
				this.dimY += posY - rect.bottom;
				if (this.dimY < 300) {
					this.dimY = 300;
				}
				if (this.posY + this.dimY > screenBottom) {
					this.posY = rect.top;
					this.dimY = screenBottom - rect.top;
				}

			} else if (dir == 'bottomleft') {
				this.posX = posX;
				this.dimX += rect.left - posX;
				if (this.dimX < 300) {
					this.dimX = 300;
					this.posX = rect.right - 300;
				}
				this.dimY += posY - rect.bottom;
				if (this.dimY < 300) {
					this.dimY = 300;
				}
				if (this.posX < screenLeft) {
					this.posX = screenLeft;
					this.dimX = rect.right-screenLeft;
				}
				if (this.posY + this.dimY > screenBottom) {
					this.posY = rect.top;
					this.dimY = screenBottom - rect.top;
				}

			} else if (dir == 'left') {
				this.posX = posX;
				this.dimX += rect.left - posX;
				if (this.dimX < 300) {
					this.dimX = 300;
					this.posX = rect.right - 300;
				}
				if (this.posX < screenLeft) {
					this.posX = screenLeft;
					this.dimX = rect.right-screenLeft;
				}

			}

			this.refreshPosition();
		}

		function endResize() {
			body.style.cursor = 'unset';
			this.elmnt.dataset.reposition = 0;
			window.removeEventListener('mouseup', endResize);
			window.removeEventListener('mousemove', adjustResize);
			window.removeEventListener("touchend", endResize);
			window.removeEventListener("touchmove", adjustResize);
			activatePreviews();
		}
	}
}

function newWindow(src) {
	windows.set(idCounter, new pseudoWindow(src));
}

// Activate and deactivate previews to avoid mouse capture
function deactivatePreviews() {
	let previews = document.querySelectorAll('.editor-preview');
	for (let preview of previews) {
		preview.style.pointerEvents = 'none';
	}
}
function activatePreviews() {
	let previews = document.querySelectorAll('.editor-preview');
	for (let preview of previews) {
		preview.style.pointerEvents = '';
	}
}

// Open external link function for buttons
function openLink(url) {
	window.open(url, "_blank");
}

// ————————————————————————————————————————————————————————————
// DESKTOP
// ————————————————————————————————————————————————————————————

function initializeDesktop() {
	// Generate desktop links
	let desktopTemp = '';
	for (let i=0; i<50; i++) {
		let font = fontNames[Math.floor(Math.random()*fontNames.length)];
		let color = fontInfo[font]['color'];
		let letters = fontInfo[font]['letters'];
		let letter = letters[Math.floor(Math.random()*letters.length)];
		let variation = '';
		if (fontInfo[font]['variation'] != '') {
			variation += "font-variation-settings:";
			let axisNumber = 0;
			for (let axis of Object.keys(fontInfo[font]['variation'])) {
				let range = fontInfo[font]['variation'][axis]['max']-fontInfo[font]['variation'][axis]['min'];
				let value = Math.round(Math.random()*range);
				variation += " '" + fontInfo[font]['variation'][axis]['code'] + "' " + value;
				axisNumber++;
				if (axisNumber < Object.keys(fontInfo[font]['variation']).length) {
					variation += ', ';
				}
			}
		}
		desktopTemp += `
			<div class="desktop-link" style="--primary:hsl(${color}deg,100%,70%); --secondary: hsl(${color}deg,100%,10%);">
				<div class="desktop-link-icon" style="font-family:'${font}'; ${variation};">${letter}</div>
				<span>${font}</span>
			</div>
		`;
	}
	const desktop = document.querySelector('.desktop');
	desktop.innerHTML = desktopTemp;

	// Randomize icon positions and add drag listeners
	let desktopDelay = 100;
	for (let desktopLink of document.querySelectorAll('.desktop-link')) {
		if (Math.random() < .5) {
			desktopLink.style.left = '-100%';
		} else {
			desktopLink.style.left = '100%';
		}
		if (Math.random() < .5) {
			desktopLink.style.top = '-100%';
		} else {
			desktopLink.style.top = '100%';
		}
		setTimeout(() => {
			desktopLink.dataset.initialize = 1;
			desktopLink.style.left = (window.innerWidth*(Math.random()*.9+.05)).toFixed(2) + "px";
			desktopLink.style.top = (window.innerHeight*(Math.random()*.9+.05)).toFixed(2) + "px";
			desktopLink.addEventListener('mousedown', () => {dragDesktopLink(desktopLink)});
			desktopLink.addEventListener('touchstart', () => {dragDesktopLink(desktopLink)});
			desktopLink.addEventListener('click', (e) => {clickDesktopLink(e, desktopLink)});
		}, desktopDelay)
		desktopDelay += 10;
	}
}
initializeDesktop();

// Detect click or movement
let elementMoved = false;
function clickDesktopLink(e) {
	if (!elementMoved) {
		newWindow('sylvania');
	}
}

// Drag desktop links
function dragDesktopLink(elmnt) {
	elementMoved = false;
	elmnt.dataset.reposition = 1;
	window.addEventListener('mouseup', endMove);
	window.addEventListener('mousemove', adjustMove);
	window.addEventListener("touchend", endMove);
	window.addEventListener("touchmove", adjustMove);

	function adjustMove(e) {
		elementMoved = true;
		let posX, posY;
		if (e.touches != null) {
			posX = e.touches[0].clientX;
			posY = e.touches[0].clientY;
		} else {
			posX = e.clientX;
			posY = e.clientY;
			e.preventDefault();
		}

		elmnt.style.left = posX + "px";
		elmnt.style.top = posY + "px";
	}

	function endMove() {
		elmnt.dataset.reposition = 0;
		window.removeEventListener('mouseup', endMove);
		window.removeEventListener('mousemove', adjustMove);
		window.removeEventListener("touchend", endMove);
		window.removeEventListener("touchmove", adjustMove);
	}
}

// ————————————————————————————————————————————————————————————
// MENU
// ————————————————————————————————————————————————————————————

// Open/close menu
function toggleMenu() {
	const menu = document.querySelector('.menu');
	const menuBtn = document.querySelector('#toggle-menu');
	if (parseInt(menu.dataset.active) == 0) {
		menu.dataset.active = 1;
		menuBtn.dataset.active = 1;
	} else {
		menu.dataset.active = 0;
		menuBtn.dataset.active = 0;
	}
}

// ————————————————————————————————————————————————————————————
// SETTINGS
// ————————————————————————————————————————————————————————————

// Open/close settings
function toggleSettings() {
	const settings = document.querySelector('.settings');
	const settingsBtn = document.querySelector('#toggle-settings');
	if (parseInt(settings.dataset.active) == 0) {
		settings.dataset.active = 1;
		settingsBtn.dataset.active = 1;
	} else {
		settings.dataset.active = 0;
		settingsBtn.dataset.active = 0;
	}
}

// Settings functions
function toggle3D() {
	let body = document.querySelector('body');
	if (parseInt(body.dataset.flat) == 0) {
		body.dataset.flat = 1;
	} else {
		body.dataset.flat = 0;
	}
}
function changeColorMode() {
	let body = document.querySelector('body');
	if (parseInt(body.dataset.colorMode) == 0) {
		body.dataset.colorMode = 1;
	} else {
		body.dataset.colorMode = 0;
	}
}
function sortDesktop() {
	let posX = 50;
	let posY = 50;
	let loopDelay = 0;
	for (let desktopLink of document.querySelectorAll('.desktop-link')) {
		let pos = [posX, posY];
		posX += 100;
		if (posX >= window.innerWidth-50) {
			posX = 50;
			posY += 100;
		}
		setTimeout(() => {
			desktopLink.style.left = pos[0] + "px";
			desktopLink.style.top = pos[1] + "px";
		}, loopDelay)
		loopDelay += 5;
	}
}
function unsortDesktop() {
	let loopDelay = 0;
	for (let desktopLink of document.querySelectorAll('.desktop-link')) {
		setTimeout(() => {
			desktopLink.style.left = (window.innerWidth*(Math.random()*.9+.05)).toFixed(2) + "px";
			desktopLink.style.top = (window.innerHeight*(Math.random()*.9+.05)).toFixed(2) + "px";
		}, loopDelay)
		loopDelay += 5;
	}
}
function toggleFontNames() {
	let body = document.querySelector('body');
	if (parseInt(body.dataset.hideFontNames) == 0) {
		body.dataset.hideFontNames = 1;
	} else {
		body.dataset.hideFontNames = 0;
	}
}
function collectWindows() {
	let loopDelay = 0;
	for (let window of windows.keys()) {
		if (!windows.get(window).minimized) {
			setTimeout(() => {
				windows.get(window).resetPosition();
			}, loopDelay)
			loopDelay += 25;
		}
	}
}
function showWindows() {
	let loopDelay = 0;
	for (let window of windows.keys()) {
		if (windows.get(window).minimized) {
			setTimeout(() => {
				windows.get(window).show();
			}, loopDelay)
			loopDelay += 25;
		}
	}
}
function hideWindows() {
	let loopDelay = 0;
	for (let window of windows.keys()) {
		if (!windows.get(window).minimized) {
			setTimeout(() => {
				windows.get(window).minimize();
			}, loopDelay)
			loopDelay += 25;
		}
	}
}
function closeWindows() {
	for (let window of windows.keys()) {
		windows.get(window).close();
	}
}
function tileWindows() {
	// Calculate how many windows are showing
	let totalWindows = 0;
	for (let key of windows.keys()) {
		let windowObj = windows.get(key);
		if (windowObj.minimized == false) {
			totalWindows++;
		}
	}
	let grid = Math.ceil(Math.sqrt(totalWindows));
	let row = 0;
	let col = 0;
	let loopDelay = 0;
	for (let key of windows.keys()) {
		let windowObj = windows.get(key);
		if (windowObj.minimized == false) {
			setTimeout(() => {
				windowObj.posX = (window.innerWidth/grid)*col;
				windowObj.posY = ((window.innerHeight-24)/grid)*row;
				windowObj.dimX = window.innerWidth/grid;
				windowObj.dimY = (window.innerHeight-24)/grid;
				windowObj.refreshPosition();
				col++;
				if (col >= grid) {
					col = 0;
					row++; 
				}
			}, loopDelay)
			loopDelay += 25;
		}
	}
}
function scatterWindows() {
	let loopDelay = 0;
	for (let key of windows.keys()) {
		let windowObj = windows.get(key);
		if (windowObj.minimized == false) {
			setTimeout(() => {
				windowObj.posX = Math.random()*window.innerWidth/2;
				windowObj.posY = Math.random()*window.innerHeight/2;
				windowObj.dimX = window.innerWidth*(Math.random()*.4+.3);
				windowObj.dimY = window.innerHeight*(Math.random()*.4+.3);
				windowObj.refreshPosition();
			}, loopDelay)
			loopDelay += 25;
		}
	}
}
function generateWindows() {
	for (let i=0; i<Math.floor(Math.random()*9+1); i++) {
		let windowSrc = Math.floor(Math.random()*Object.keys(windowData).length);
		newWindow(Object.keys(windowData)[windowSrc]);
	}
}

// ————————————————————————————————————————————————————————————
// CLOCK
// ————————————————————————————————————————————————————————————

let time = new Date();
function showTime() {
	time = new Date();
	// Getting current time and date
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		time.toDateString() +
		" " +
		hour +
		":" +
		min +
		":" +
		sec +
		" " +
		am_pm;

	// Displaying the time
	document.getElementById("clock").innerText = currentTime;
}
setInterval(showTime, 1000);
showTime();


// TODO
// hide code if too small
// loading screen for fetch
// finish all the controls menus buttons
	// help?
// drag to resize middle of code editor
// drag to reorder windows in dock