let screenLeft = 0;
let screenTop = 0;
let screenRight = window.innerWidth;
let screenBottom = window.innerHeight - 40;
let screenHeight = screenBottom-screenTop;
let screenWidth = screenRight-screenLeft;

window.addEventListener('resize', calculateBorders);
function calculateBorders() {
	screenRight = window.innerWidth;
	screenBottom = window.innerHeight - 40;
	screenHeight = screenBottom-screenTop;
	screenWidth = screenRight-screenLeft;	
}

// ———————————————————————————————————————————————
// FONTS
// ———————————————————————————————————————————————

let fontInfo = {
	'Bashful': {
		'download': '/fonts/bashful/TMT-Bashful.zip',
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
		'download': '/fonts/caffeine/TMT-Caffeine.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678 .,:;!?•*#/\\-–—_(){}[]“”‘’"'@&©°|†‡$+−×÷=><≈~^%↑↗→↘↓↙←↖↔↕`,
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
		'download': '/fonts/dreidel/TMT-Dreidel.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;-`,
		'variation': {
			'Spin': {
				'code': 'SPIN',
				'min': -45,
				'max': 405,
				'default': -45
			}
		}
	},
	'Limkin': {
		'download': '/fonts/limkin/TMT-Limkin.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `AÁĂẶǍÂẬÄẠÀẢĀĄÅÃÆBḄɃCĆČÇĈĊDÐĎḒĐḌƊḎƉEÉĚȨÊỆËĖẸÈẺĒĘƎẼƏƷǮFGĞǦĜĢĠḠǤHĦĤḤIĲÍǏÎÏİỊÌỈĪĮƗĨJĴKǨĶLĹĽḼĻḶŁMḾNŃŇṊŅṄṆÑŊOÓǑÔỘÖỌÒỎƠŐŌØǾÕŒPÞQRŔŘŖɌSŚŠŞŜȘṢẞTŦŤŢṰȚṬṮUÚɄŬÛÜỤÙỦƯŰŪŲƱŮŨVɅWẂŴẄẀXYÝŶŸỴỲỶỸZŹŽŻẒaáăặǎâậäạàảāąåãæbḅcćčçĉċdðďḓđḍḏeéěȩêệëėẹèẻēęẽǝəʒǯfgğǧĝģġḡǥhħĥḥiıíǐîïịìỉĳīįɨĩjȷĵkǩķlĺľḽļḷłmḿnńňṋņṅṇñŋoóǒôộöọòỏơőōøǿõœpþqrŕřŗsśšşŝșṣßtŧťţṱțṭṯuúʉŭûüụùủưűūųůũvʌwẃŵẅẁxyýŷÿỵỳỷỹzźžżẓΩπ0123456789.,:;…!¡?¿·•*#/\\-–—_(){}[]‚„“”‘’«»‹›"'@&©®™°|¦†‡¢¤$€£¥+−×÷=≠><≥≤±≈~¬^∞∫∏∑√∂%‰↑↗→↘↓↙←↖↔↕◌◊`,
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
	'Limkin Pixel': {
		'download': '/fonts/limkin-pixel/TMT-LimkinPixel.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeéëfghijklmnopqrstuvwxyz0123456789.,:;!?*#/\\-–—_(){}[]“”‘’"'@&|$+−=><~^%`,
		'variation': {
			'Weight': {
				'code': 'wght',
				'min': 100,
				'max': 900,
				'default': 500
			}
		}
	},
	'Mini Mochi': {
		'download': '/fonts/mini-mochi/TMT-MiniMochi.zip',
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
		'download': '/fonts/music-box/TMT-MusicBox.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'variation': {
			'Frequency': {
				'code': 'FREQ',
				'min': -100,
				'max': 100,
				'default': 0
			},
			'Amplitude': {
				'code': 'AMPL',
				'min': 0,
				'max': 100,
				'default': 50
			}
		}
	},
	'Paint': {
		'download': '/fonts/paint/TMT-Paint.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?*#/\\-–—_(){}[]“”‘’"'@&|$+−×÷=><~^%↑↗→↘↓↙←↖↔↕`,
		'variation': ''
	},
	'PowerPack': {
		'download': '/fonts/power-pack/TMT-PowerPack.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;…!?•*#/\\-–—_(){}[]“”‘’"'@&©|¢$+−×÷=><~%↑→↓←`,
		'variation': {
			'Charge': {
				'code': 'CHRG',
				'min': 0,
				'max': 100,
				'default': 0
			},
			'Power': {
				'code': 'POWR',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'That Then This': {
		'download': '/fonts/that-then-this/TMT-ThatThenThis.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,;!?#/-[]“”‘’"'`,
		'variation': {
			'Variation': {
				'code': 'THAT',
				'min': 0,
				'max': 100,
				'default': 0
			},
			'Distribution': {
				'code': 'THIS',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'AUTHENTIC Remixed': {
		'download': '/fonts/authentic-remixed/TMT-AUTHENTICRemixed.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `AÀÁÃÄBCÇDEÈÉËFGHIÌÍÏĨJKLMNÑŃOÒÓÕÖPQRSTUÙÚÜŨVWXYÝŸỲZØĲaàáãäbcçdeèéëfghiìíïĩjklmnñńoòóõöpqrstuùúüũvwxyýÿỳzøıĳȷ0123456789_-–—([{)]}‘“’”!"#%&'*,./:;?@¡¿•…+<=>|~$\`¨´¸˜©🄯`,
		'variation': {
			'X axis': {
				'code': 'XAXI',
				'min': -100,
				'max': 100,
				'default': 0
			},
			'Y axis': {
				'code': 'YAXI',
				'min': -100,
				'max': 100,
				'default': 0
			}
		}
	},
	'Avara Burst': {
		'download': '/fonts/avara-burst/TMT-AvaraBurst.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,:;…-!?‘’“”'"«»(){}[]_–—•·*@#\\/|^~$0123456789%+−±×÷=≈<>≤≥°≠`,
		'variation': {
			'Burst': {
				'code': 'BRST',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'FT88 RISD': {
		'download': '/fonts/ft88-risd/TMT-FT88RISD.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,-`,
		'glyphs': `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,-`,
		'variation': {
			'Dispersion': {
				'code': 'DISP',
				'min': 0,
				'max': 100,
				'default': 0
			}
		}
	},
	'Work Sans Galapagos': {
		'download': '/fonts/work-sans-galapagos/TMT-WorkSansGalapagos.zip',
		'letters': `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
		'glyphs': `AÀÁÃÄBCÇDEÈÉËFGHIÌÍÏĨJKLMNÑŃOÒÓÕÖPQRSTUÙÚÜŨVWXYÝŸỲZØĲaàáãäbcçdeèéëfghiìíïĩjklmnñńoòóõöpqrstuùúüũvwxyýÿỳzøıĳȷ0123456789_-–—([{)]}‘“’”!"#%&'*,./:;?@¡¿•…+<=>|~$¨´¸˜©`,
		'variation': {
			'Weight': {
				'code': 'wght',
				'min': 100,
				'max': 900,
				'default': 500
			},
			'Shell': {
				'code': 'SHLL',
				'min': 0,
				'max': 100,
				'default': 100
			}
		}
	},
}

// Generate color palette
let fontNames = Object.keys(fontInfo);
let colorSplit = 360/(fontNames.length+1);
let fontColor = 0;
for (let fontName of fontNames) {
	fontInfo[fontName]['letters'] = fontInfo[fontName]['letters'].split('');
	fontInfo[fontName]['glyphs'] = fontInfo[fontName]['glyphs'].split('');
	fontInfo[fontName]['color'] = fontColor;
	fontColor += colorSplit;
}
for (let menuTypeface of document.querySelectorAll('.menu-typeface')) {
	let fontName = menuTypeface.dataset.font;
	menuTypeface.style.setProperty('--primary', `hsl(${fontInfo[fontName]['color']}deg, 100%, 70%)`);
	menuTypeface.style.setProperty('--tertiary', `hsl(${fontInfo[fontName]['color']}deg, 100%, 10%)`);
}

// ———————————————————————————————————————————————
// WINDOWS
// ———————————————————————————————————————————————

// Stores all active windows
let windows = new Map();
let windowData = {
	'Mini Mochi': {
		'icon': `<svg viewBox="0 0 100 100"><polygon points="90 20 90 80 80 80 80 90 70 90 70 40 60 40 60 90 40 90 40 40 30 40 30 90 20 90 20 80 10 80 10 20 20 20 20 10 40 10 40 20 60 20 60 10 80 10 80 20 90 20"/></svg>`,
		'title': 'Mini Mochi',
		'file': '/fonts/mini-mochi/'
	},
	'Music Box': {
		'icon': `<svg viewBox="0 0 100 100"><path d="m80,20v30h-10V10H10v80h60v-30h20V20h-10Zm-20,60H20V20h40v60Z"/><polygon points="50 30 50 70 30 70 30 50 40 50 40 30 50 30"/></svg>`,
		'title': 'Music Box',
		'file': '/fonts/music-box/'
	},
	'Work Sans Galapagos': {
		'icon': `<svg viewBox="0 0 100 100"><polygon points="90 40 90 70 80 70 80 80 60 80 60 70 40 70 40 80 20 80 20 70 10 70 10 40 20 40 20 30 30 30 30 20 70 20 70 30 80 30 80 40 90 40"/></svg>`,
		'title': 'Work Sans Galápagos',
		'file': '/fonts/work-sans-galapagos/'
	},
	'Fun Font': {
		'icon': `<svg viewBox="0 0 100 100"><path d="M30,90H10v-20h20v20ZM50,50h-20v20h20v-20ZM70,30h-20v20h20v-20ZM90,50h-20v20h20v-20ZM30,30H10v20h20v-20ZM50,10h-20v20h20V10ZM70,70h-20v20h20v-20ZM90,10h-20v20h20V10Z"/></svg>`,
		'title': 'Fun Font',
		'file': '/fonts/fun-font/'
	},
	'Sylvania': {
		'icon': `<svg viewBox="0 0 100 100"><path d="m60,40v-10h-10v-10h-10v20H10v50h80v-50h-30Zm20,40H20v-30h60v30Z"/><rect x="60" y="20" width="20" height="10"/><rect x="20" y="10" width="20" height="10"/></svg>`,
		'title': 'Sylvania',
		'file': '/fonts/sylvania/'
	},
	'Meal Kit': {
		'icon': `<svg viewBox="0 0 100 100"><path d="m25,60h-10V10h10v50Zm40,0V10h-10v50h-10V10h-10v50h-10v10h20v20h10v-20h20v-10h-10Zm20-50h-10v50h10V10Z"/></svg>`,
		'title': 'Meal Kit',
		'file': '/fonts/meal-kit/'
	}
}

let activeWindow = 'a';
let windowIdCounter = 0;
let zCounter = 9;
class pseudoWindow {
	constructor(src) {
		this.id = windowIdCounter;
		this.src = src;
		this.posX = 0;
		this.posY = 0;
		this.dimX = 0;
		this.dimY = 0;
		this.elmnt;
		this.minimized = false;
		this.number = 0;
		this.dockItem;
		this.zoomLevel = 1;

		// Create window element
		this.elmnt = document.createElement('div');
		this.elmnt.classList.add('window');
		this.elmnt.addEventListener('mousedown', this.bringToTop);
		this.elmnt.addEventListener('touchstart', this.bringToTop);
		this.elmnt.id = this.id;

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
		let color = Math.floor(Math.random()*360);
		if (Object.keys(fontInfo).includes(src)) {
			color = fontInfo[src]['color'];
		}
		let primary = `hsl(${color}deg, 100%, 70%)`;
		let secondary = `hsl(${color}deg, 100%, 10%)`;

		this.elmnt.style.setProperty('--primary', primary);
		this.elmnt.style.setProperty('--secondary', secondary);

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
		let controlsView = controls.querySelector('.controls-view');
		let controlsWindow = controls.querySelector('.controls-window');
		controlsFile.addEventListener('click', () => {this.openMenu('file')});
		controlsView.addEventListener('click', () => {this.openMenu('view')});
		controlsWindow.addEventListener('click', () => {this.openMenu('window')});

		this.elmnt.appendChild(controls);

		let controlsMenus = document.createElement('div');
		controlsMenus.classList.add('window-controls-menus');
		controlsMenus.dataset.menu = '';
		controlsMenus.innerHTML = `
			<div class="window-controls-menu" data-menu="file">
				<a class="controls-github" href="https://github.com/gabrieldrozdov/too-much-type/tree/main${windowData[this.src]['file']}/index.html" target="_blank">
					<svg viewBox="0 0 100 100"><rect x="10" y="40" width="10" height="10"/><rect x="20" y="30" width="10" height="10"/><rect x="20" y="50" width="10" height="10"/><rect x="30" y="70" width="10" height="20"/><rect x="40" y="50" width="10" height="20"/><rect x="50" y="30" width="10" height="20"/><rect x="60" y="10" width="10" height="20"/><rect x="70" y="60" width="10" height="10"/><rect x="80" y="50" width="10" height="10"/><rect x="70" y="40" width="10" height="10"/></svg>
					<span>Download Code</span>
				</a>
				<a class="controls-link" href="${windowData[this.src]['file']}">
					<svg viewBox="0 0 100 100"><rect x="20" y="80" width="20" height="10"/><rect x="10" y="60" width="10" height="20"/><rect x="20" y="50" width="10" height="10"/><rect x="50" y="50" width="10" height="20"/><rect x="40" y="70" width="10" height="10"/><rect x="40" y="30" width="10" height="20"/><rect x="50" y="20" width="10" height="10"/><rect x="60" y="10" width="20" height="10"/><rect x="80" y="20" width="10" height="20"/><rect x="70" y="40" width="10" height="10"/></svg>
					<span>Open in New Tab</span>
				</a>
			</div>

			<div class="window-controls-menu" data-menu="view">
				<button class="controls-actual-size">
					<svg viewBox="0 0 100 100"><rect x="40" y="80" width="20" height="10"/><rect x="30" y="70" width="10" height="10"/><rect x="20" y="60" width="10" height="10"/><polygon points="20 20 10 20 10 50 40 50 40 40 30 40 30 30 20 30 20 20"/><rect x="30" y="20" width="10" height="10"/><rect x="40" y="10" width="20" height="10"/><rect x="60" y="20" width="10" height="10"/><rect x="70" y="30" width="10" height="10"/><rect x="80" y="40" width="10" height="20"/><rect x="70" y="60" width="10" height="10"/><rect x="60" y="70" width="10" height="10"/></svg>
					<span>Actual Size</span>
				</button>
				<button class="controls-zoom-in">
					<svg viewBox="0 0 100 100"><polygon points="90 45 55 45 55 10 45 10 45 45 10 45 10 55 45 55 45 90 55 90 55 55 90 55 90 45"/></svg>
					<span>Zoom In</span>
				</button>
				<button class="controls-zoom-out">
					<svg viewBox="0 0 100 100"><rect x="10" y="45" width="80" height="10"/></svg>
					<span>Zoom Out</span>
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

		// View controls
		let controlsActualSize = controlsMenus.querySelector('.controls-actual-size');
		controlsActualSize.addEventListener('click', () => {this.resetZoom()});
		let controlsZoomIn = controlsMenus.querySelector('.controls-zoom-in');
		controlsZoomIn.addEventListener('click', () => {this.zoomIn()});
		let controlsZoomOut = controlsMenus.querySelector('.controls-zoom-out');
		controlsZoomOut.addEventListener('click', () => {this.zoomOut()});

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
			<iframe class="editor-preview" src="${windowData[this.src]['file']}"></iframe>
		`;

		this.preview = content.querySelector('.editor-preview');

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
		dockItem.style.setProperty('--primary', primary);
		dockItem.style.setProperty('--secondary', secondary);
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
		
		windowIdCounter++;
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

	// Zoom
	zoomOut() {
		this.zoomLevel += .1;
		this.preview.style.width = `${this.zoomLevel*100}%`;
		this.preview.style.height = `${this.zoomLevel*100}%`;
		this.preview.style.transform = `scale(${1/this.zoomLevel})`;
		if (this.zoomLevel >= 2) {
			this.zoomLevel = 2;
		}
	}
	zoomIn = () => {
		this.zoomLevel -= .1;
		this.preview.style.width = `${this.zoomLevel*100}%`;
		this.preview.style.height = `${this.zoomLevel*100}%`;
		this.preview.style.transform = `scale(${1/this.zoomLevel})`;
		if (this.zoomLevel <= .5) {
			this.zoomLevel = .5;
		}
	}
	resetZoom = () => {
		this.zoomLevel =1;
		this.preview.style.width = `${this.zoomLevel*100}%`;
		this.preview.style.height = `${this.zoomLevel*100}%`;
		this.preview.style.transform = `scale(${1/this.zoomLevel})`;
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
	}
	bringToTop = () => {
		if (activeWindow != this.id) {
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
				if (this.dimX < 350) {
					this.dimX = 350;
					this.posX = rect.right - 350;
				}
				this.posY = posY;
				this.dimY += rect.top - posY;
				if (this.dimY < 350) {
					this.dimY = 350;
					this.posY = rect.bottom - 350;
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
				if (this.dimY < 350) {
					this.dimY = 350;
					this.posY = rect.bottom - 350;
				}
				if (this.posY < screenTop) {
					this.posY = screenTop;
					this.dimY = rect.bottom - screenTop;
				}

			} else if (dir == 'topright') {
				this.dimX += posX - rect.right;
				if (this.dimX < 350) {
					this.dimX = 350;
				}
				if (this.dimX + this.posX > window.innerWidth) {
					this.posX = rect.left;
					this.dimX = window.innerWidth - rect.left;
				}
				this.posY = posY;
				this.dimY += rect.top - posY;
				if (this.dimY < 350) {
					this.dimY = 350;
					this.posY = rect.bottom - 350;
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
				if (this.dimX < 350) {
					this.dimX = 350;
				}
				if (this.dimX + this.posX > screenRight) {
					this.posX = rect.left;
					this.dimX = screenRight - rect.left;
				}

			} else if (dir == 'bottomright') {
				this.dimX += posX - rect.right;
				if (this.dimX < 350) {
					this.dimX = 350;
				}
				this.dimY += posY - rect.bottom;
				if (this.dimY < 350) {
					this.dimY = 350;
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
				if (this.dimY < 350) {
					this.dimY = 350;
				}
				if (this.posY + this.dimY > screenBottom) {
					this.posY = rect.top;
					this.dimY = screenBottom - rect.top;
				}

			} else if (dir == 'bottomleft') {
				this.posX = posX;
				this.dimX += rect.left - posX;
				if (this.dimX < 350) {
					this.dimX = 350;
					this.posX = rect.right - 350;
				}
				this.dimY += posY - rect.bottom;
				if (this.dimY < 350) {
					this.dimY = 350;
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
				if (this.dimX < 350) {
					this.dimX = 350;
					this.posX = rect.right - 350;
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
	windows.set(windowIdCounter, new pseudoWindow(src));
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

// ———————————————————————————————————————————————
// DESKTOP
// ———————————————————————————————————————————————

let letterIdCounter = 0;
class desktopLetter {
	constructor(font, letter, variation, size, color) {
		this.id = letterIdCounter;
		letterIdCounter++;

		this.font = font || fontNames[Math.floor(Math.random()*fontNames.length)];
		this.letters = fontInfo[this.font]['letters'];
		this.letter = letter || this.letters[Math.floor(Math.random()*this.letters.length)];
		this.variation = variation || this.randomizeVariation();
		this.color = color || fontInfo[this.font]['color'];
		this.size = size || 50;

		// Create desktop element
		this.elmnt = document.createElement('div');
		this.elmnt.classList.add('desktop-letter');
		this.elmnt.style.setProperty('--primary', `hsl(${this.color}deg,100%,70%)`);
		this.elmnt.style.setProperty('--secondary', `hsl(${this.color}deg,100%,10%)`);
		this.elmnt.innerHTML = `
			<div class="desktop-letter-glyph" style="font-family:'${this.font}'; ${this.convertVariationToStyle()};">${this.letter}</div>
			<span>${this.font}</span>
		`
		this.glyph = this.elmnt.querySelector('.desktop-letter-glyph');
		this.glyph.style.fontSize = this.size + "px";

		// Set initial position
		if (Math.random() < .5) {
			this.elmnt.style.left = '-100%';
		} else {
			this.elmnt.style.left = '100%';
		}
		if (Math.random() < .5) {
			this.elmnt.style.top = '-100%';
		} else {
			this.elmnt.style.top = '100%';
		}

		// Add to DOM
		const desktop = document.querySelector('.desktop');
		desktop.appendChild(this.elmnt);

		// Transition in
		setTimeout(() => {
			this.elmnt.dataset.initialize = 1;
			this.elmnt.style.left = (window.innerWidth*(Math.random()*.9+.05)).toFixed(2) + "px";
			this.elmnt.style.top = (window.innerHeight*(Math.random()*.8+.05)).toFixed(2) + "px";
			this.elmnt.addEventListener('mousedown', (e) => {dragElmnt(e, this.elmnt)});
			this.elmnt.addEventListener('touchstart', (e) => {dragElmnt(e, this.elmnt)});
			this.elmnt.addEventListener('click', (e) => {this.clickDesktopElmnt(e)});
		}, 50)
	}

	// Work with font variation settings
	randomizeVariation = () => {
		let variation = [];
		if (fontInfo[this.font]['variation'] != '') {
			for (let axis of Object.keys(fontInfo[this.font]['variation'])) {
				let range = fontInfo[this.font]['variation'][axis]['max'] + Math.abs(fontInfo[this.font]['variation'][axis]['min']);
				variation.push(Math.round(Math.random()*range + fontInfo[this.font]['variation'][axis]['min']));
			}
		}
		return variation;
	}
	updateVariation = (val, axis) => {
		this.variation[axis] = val;
		this.glyph.style.fontVariationSettings = this.convertVariationToStyle2();

		// Also update letterset selector
		const lettersetContent = document.querySelector('.desktop-letterset-content');
		lettersetContent.style.fontVariationSettings = this.convertVariationToStyle2();
	}
	
	// Size and color
	updateSize = (val) => {
		this.size = val;
		this.glyph.style.fontSize = val + "px";
	}
	updateColor = (val) => {
		this.color = val;
		this.elmnt.style.setProperty('--primary', `hsl(${this.color}deg,100%,70%)`);
		this.elmnt.style.setProperty('--secondary', `hsl(${this.color}deg,100%,10%)`);

		// Also change colors of desktop settings and letterset
		const desktopSettings = document.querySelector('.desktop-settings');
		const letterset = document.querySelector('.desktop-letterset');
		desktopSettings.style.setProperty('--primary', `hsl(${this.color}deg,100%,70%)`);
		desktopSettings.style.setProperty('--secondary', `hsl(${this.color}deg,100%,10%)`);
		letterset.style.setProperty('--primary', `hsl(${this.color}deg,100%,70%)`);
		letterset.style.setProperty('--secondary', `hsl(${this.color}deg,100%,10%)`);
	}

	// Returns with font-variation-settings
	convertVariationToStyle() {
		let variation = '';
		if (fontInfo[this.font]['variation'] != '') {
			variation += "font-variation-settings:";
			let axisNumber = 0;
			for (let axis of Object.keys(fontInfo[this.font]['variation'])) {
				variation += `'${fontInfo[this.font]['variation'][axis]['code']}' ${this.variation[axisNumber]}`;
				axisNumber++;
				if (axisNumber < Object.keys(fontInfo[this.font]['variation']).length) {
					variation += ', ';
				}
			}
		}
		return variation
	}

	// Returns without property name
	convertVariationToStyle2() {
		let variation = '';
		if (fontInfo[this.font]['variation'] != '') {
			let axisNumber = 0;
			for (let axis of Object.keys(fontInfo[this.font]['variation'])) {
				variation += `'${fontInfo[this.font]['variation'][axis]['code']}' ${this.variation[axisNumber]}`;
				axisNumber++;
				if (axisNumber < Object.keys(fontInfo[this.font]['variation']).length) {
					variation += ', ';
				}
			}
		}
		return variation
	}

	// Detects click (vs. drag)
	clickDesktopElmnt = (e) => {
		if (!elementMoved) {
			positionLetterSettings(e);
			openLetterSettings(this.id);
		}
	}

	// Delete class instance and remove from DOM
	duplicateLetter = () => {
		desktopLetters[letterIdCounter] = new desktopLetter(this.font, this.letter, this.variation, this.size, this.color);
	}

	// Delete class instance and remove from DOM
	deleteLetter = () => {
		this.elmnt.remove();
	}
}

// On page load
let desktopLetters = {};
function initializeDesktop() {
	// Generate desktop links
	let loopDelay = 0;

	// How many fonts to use at first
	let diceRoll = Math.random();
	let fonts = [];
	let fontNames = Object.keys(fontInfo);
	if (diceRoll < .2) {
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
	} else if (diceRoll < .4) {
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
	} else if (diceRoll < .6) {
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
	} else if (diceRoll < .8) {
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
		fonts.push(fontNames[Math.floor(Math.random()*fontNames.length)]);
	} else {
		for (let fontName of fontNames) {
			fonts.push(fontName);
		}
	}

	// What letters to use
	diceRoll = Math.random();
	let glyphs = [];
	let glyphNames = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
	if (diceRoll < .2) {
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
	} else if (diceRoll < .4) {
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
	} else if (diceRoll < .6) {
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
	} else if (diceRoll < .8) {
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
		glyphs.push(glyphNames[Math.floor(Math.random()*glyphNames.length)]);
	} else {
		for (let glyphName of glyphNames) {
			glyphs.push(glyphName);
		}
	}

	// What font size to use (OLD CODE)
	// diceRoll = Math.random();
	// let sizes = [];
	// if (diceRoll < .3) {
	// 	sizes.push(50);
	// } else if (diceRoll < .6) {
	// 	sizes.push(50, 100);
	// } else {
	// 	sizes.push(25, 50, 100);
	// }

	// The number of letters to be generated
	let count = Math.floor(window.innerWidth/20);

	for (let i=0; i<count; i++) {
		setTimeout(() => {
			desktopLetters[letterIdCounter] = new desktopLetter(fonts[Math.floor(Math.random()*fonts.length)], glyphs[Math.floor(Math.random()*glyphs.length)], undefined, 50);
		}, loopDelay)
		loopDelay += 10;
	}
}
setTimeout(initializeDesktop, 500);

function generateLetter(font, letter, variation) {
	desktopLetters[letterIdCounter] = new desktopLetter(font, letter, variation);
}

function generateLettersFromPreview(font) {
	let loopDelay = 50;
	for (let letter of document.querySelector(`.menu-typeface[data-font="${font}"] .menu-typeface-preview`).innerText) {
		if (letter.charCodeAt(0) == 32 || letter.charCodeAt(0) == 160) {
			continue
		}
		setTimeout(() => {
			desktopLetters[letterIdCounter] = new desktopLetter(font, letter);
		}, loopDelay)
		loopDelay += 10;
	}
}

// Set position for settings popup
function positionLetterSettings(e) {
	const desktopSettings = document.querySelector('.desktop-settings');
	desktopSettings.style.left = e.clientX + 20 + "px";
	desktopSettings.style.top = e.clientY + 20 + "px";
	desktopSettings.style.transform = '';
	if (e.clientX > window.innerWidth/2) {
		desktopSettings.style.transform = 'translateX(calc(-100% - 40px))';
	}
	if (e.clientY > window.innerHeight/2) {
		desktopSettings.style.transform += ' translateY(calc(-100% - 40px))';
	}
}

// Set content for settings popup
function generateLetterSettings(id) {
	closeLetterset();
	
	const desktopSettings = document.querySelector('.desktop-settings');
	const desktopSettingsName = desktopSettings.querySelector('.desktop-settings-font-name');
	const desktopSettingsDownload = desktopSettings.querySelector('.desktop-settings-download');
	const desktopSettingsVariable = desktopSettings.querySelector('.desktop-settings-variable');
	const desktopSettingsSize = desktopSettings.querySelector('.desktop-settings-size');
	const desktopSettingsColor = desktopSettings.querySelector('.desktop-settings-color');

	const glyphInfo = desktopLetters[id];

	// Set font name
	desktopSettingsName.innerText = glyphInfo.font;

	// Set download link
	desktopSettingsDownload.href = fontInfo[glyphInfo.font]['download'];

	// Set size
	desktopSettingsSize.value = glyphInfo.size;
	
	// Set color
	desktopSettings.style.setProperty('--primary', `hsl(${glyphInfo.color}deg,100%,70%)`);
	desktopSettings.style.setProperty('--secondary', `hsl(${glyphInfo.color}deg,100%,10%)`);
	desktopSettingsColor.value = glyphInfo.color;

	// Generate variable axes sliders
	let variableSliders = '';
	if (fontInfo[glyphInfo.font]['variation'] != '') {
		desktopSettingsVariable.dataset.active = 1;
		let axisNumber = 0;
		for (let axis of Object.keys(fontInfo[glyphInfo.font]['variation'])) {
			variableSliders += `
				<div class='desktop-settings-variation'>
					<label>${axis}</label>
					<input type="range" name="${axisNumber}" min="${fontInfo[glyphInfo.font]['variation'][axis]['min']}" max="${fontInfo[glyphInfo.font]['variation'][axis]['max']}" value="${glyphInfo.variation[axisNumber]}" class="slider-variable">
				</div>
			`;
			axisNumber++;
		}
	} else {
		desktopSettingsVariable.dataset.active = 0;
	}
	desktopSettingsVariable.innerHTML = variableSliders;

	// Remove previous listeners
	const newDesktopSettings = desktopSettings.cloneNode(true);
	desktopSettings.parentNode.replaceChild(newDesktopSettings, desktopSettings);

	// Add listeners to settings
	const settingsTitle = newDesktopSettings.querySelector('.desktop-settings-font');
	settingsTitle.addEventListener('mousedown', (e) => {dragElmnt(e, newDesktopSettings)});
	settingsTitle.addEventListener('touchstart', (e) => {dragElmnt(e, newDesktopSettings)});

	// Set specimen target (if applicable)
	const settingsSpecimen = newDesktopSettings.querySelector('.desktop-settings-specimen');
	if (Object.keys(windowData).includes(glyphInfo.font)) {
		settingsSpecimen.dataset.active = '1';
		settingsSpecimen.addEventListener('click', () => {
			newWindow(glyphInfo.font);
			closeLetterSettings();
		})
	} else {
		settingsSpecimen.dataset.active = '0';
	}

	const settingsClose = newDesktopSettings.querySelector('.desktop-settings-close');
	settingsClose.addEventListener('click', closeLetterSettings);

	const settingsChange = newDesktopSettings.querySelector('.desktop-settings-change');
	settingsChange.addEventListener('click', (e) => {generateLetterset(id); positionLetterset(e);});

	const settingsDuplicate = newDesktopSettings.querySelector('.desktop-settings-duplicate');
	settingsDuplicate.addEventListener('click', glyphInfo.duplicateLetter);

	const settingsDelete = newDesktopSettings.querySelector('.desktop-settings-delete');
	settingsDelete.addEventListener('click', () => {glyphInfo.deleteLetter(); closeLetterSettings(); closeLetterset();});

	const sizeSlider = newDesktopSettings.querySelector('input[name="size"]');
	sizeSlider.addEventListener('input', () => {glyphInfo.updateSize(sizeSlider.value)});
	
	const colorSlider = newDesktopSettings.querySelector('input[name="color"]');
	colorSlider.addEventListener('input', () => {glyphInfo.updateColor(colorSlider.value)});
	for (let slider of newDesktopSettings.querySelectorAll('.slider-variable')) {
		slider.addEventListener('input', () => {glyphInfo.updateVariation(slider.value, slider.name)});
	}
}

// Open/close glyph settings popup
function openLetterSettings(id) {
	const desktopSettings = document.querySelector('.desktop-settings');
	const glyphInfo = desktopLetters[id];

	// Deactivate letters
	for (let glyphs of document.querySelectorAll('.desktop-letter[data-active="1"]')) {
		glyphs.dataset.active = 0;
	}

	// Check if settings already opened
	if (parseInt(desktopSettings.dataset.id) == glyphInfo.id && parseInt(desktopSettings.dataset.active) == 1) {
		closeLetterSettings();
	} else {
		desktopSettings.dataset.active = 1;
		desktopSettings.dataset.id = id;
		generateLetterSettings(id);
		glyphInfo.elmnt.dataset.active = 1;
	}
}
function closeLetterSettings() {
	const desktopSettings = document.querySelector('.desktop-settings');
	desktopSettings.dataset.active = 0;
	for (let activeGlyph of document.querySelectorAll('.desktop-letter[data-active="1"]')) {
		activeGlyph.dataset.active = 0;
	}
	closeLetterset();
}

// Close desktop settings if clicked anywhere else
window.addEventListener('mousedown', function checkClick(e) {
	const desktopSettings = document.querySelector('.desktop-settings');
	const letterset = document.querySelector('.desktop-letterset');
	const activeGlyph = document.querySelector('.desktop-letter[data-active="1"]')
	if (activeGlyph != undefined) {
		if (!desktopSettings.contains(e.target) && !activeGlyph.contains(e.target) && !letterset.contains(e.target)) {
			closeLetterSettings();
			closeLetterset();
		}
	}
}, false);

// Lettersets for desktop icons
function generateLetterset(id) {
	let letterset = document.querySelector('.desktop-letterset');
	let lettersetName = letterset.querySelector('.desktop-letterset-name');
	let lettersetGlyphs = letterset.querySelector('.desktop-letterset-content');

	const glyphInfo = desktopLetters[id];
	const font = glyphInfo['font'];

	lettersetName.innerText = font;

	// Generate glyphs
	let lettersetContent = ``;
	for (let glyph of fontInfo[font]['glyphs']) {
		lettersetContent += `<div>${glyph}</div>`;
	}
	lettersetGlyphs.innerHTML = lettersetContent;

	// Set styles
	letterset.style.setProperty('--primary', `hsl(${glyphInfo.color}deg, 100%, 70%)`);
	letterset.style.setProperty('--secondary', `hsl(${glyphInfo.color}deg, 100%, 10%)`);
	lettersetGlyphs.style.fontFamily = '"' + font + '"';
	
	// Remove previous listeners
	letterset.parentNode.replaceChild(letterset.cloneNode(true), letterset);

	// Doesn’t select properly without the delay
	letterset = document.querySelector('.desktop-letterset');
	
	// Add listeners
	let lettersetTitle = letterset.querySelector('.desktop-letterset-titlebar');
	lettersetTitle.addEventListener('mousedown', (e) => {dragElmnt(e, letterset)});
	lettersetTitle.addEventListener('touchstart', (e) => {dragElmnt(e, letterset)});

	for (let glyph of letterset.querySelectorAll('.desktop-letterset-content div')) {
		glyph.addEventListener('click', () => {
			let letter = glyphInfo['elmnt'].querySelector('.desktop-letter-glyph');
			glyphInfo['letter'] = glyph.innerText;
			letter.innerText = glyph.innerText;
		})
	}

	let lettersetClose = letterset.querySelector('.desktop-letterset-close');
	lettersetClose.addEventListener('click', closeLetterset);

	letterset.dataset.active = 1;
}

// Set position for glyph letterset popup
function positionLetterset(e) {
	const letterset = document.querySelector('.desktop-letterset');
	letterset.style.left = e.clientX + 20 + "px";
	letterset.style.top = e.clientY + 20 + "px";
	letterset.style.transform = '';
	if (e.clientX > window.innerWidth/2) {
		letterset.style.transform = 'translateX(calc(-100% - 40px))';
	}
	if (e.clientY > window.innerHeight/2) {
		letterset.style.transform += ' translateY(calc(-100% - 40px))';
	}
}

function closeLetterset() {
	const letterset = document.querySelector('.desktop-letterset');
	letterset.dataset.active = 0;
}


// ———————————————————————————————————————————
// MENU
// ———————————————————————————————————————————

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
function closeMenu() {
	const menu = document.querySelector('.menu');
	const menuBtn = document.querySelector('#toggle-menu');
	menu.dataset.active = 0;
	menuBtn.dataset.active = 0;
}
function openMenu() {
	const menu = document.querySelector('.menu');
	const menuBtn = document.querySelector('#toggle-menu');
	menu.dataset.active = 1;
	menuBtn.dataset.active = 1;
}

// Close menu if clicked anywhere else
window.addEventListener('mousedown', (e) => {
	const menu = document.querySelector('.menu');
	const menuToggle = document.querySelector('#toggle-menu');
	if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
		closeMenu();
	}
}, false);

// Editable text
const menuTypefacePreviews = document.querySelectorAll('.menu-typeface-preview');
for (let preview of menuTypefacePreviews) {
	preview.addEventListener('keypress', (e) => {
		// Prevent line breaks
		if (e.which === 13) {
			e.preventDefault();
		}

		// Only allow typing of available glyphs
		let fontName = preview.parentElement.dataset.font;
		if (!fontInfo[fontName]['glyphs'].includes(e.key) && !fontInfo[fontName]['glyphs'].includes(e.key.toLowerCase()) && !fontInfo[fontName]['glyphs'].includes(e.key.toUpperCase()) && e.key != ' ') {
			e.preventDefault();
		}
	});

	// Prevent pasting rich text
	preview.addEventListener('paste', function (e) {
		e.preventDefault();
	})
}

// ———————————————————————————————————————————
// SETTINGS
// ———————————————————————————————————————————

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
function closeSettings() {
	const settings = document.querySelector('.settings');
	const settingsBtn = document.querySelector('#toggle-settings');
	settings.dataset.active = 0;
	settingsBtn.dataset.active = 0;
}
function openSettings() {
	const settings = document.querySelector('.settings');
	const settingsBtn = document.querySelector('#toggle-settings');
	settings.dataset.active = 1;
	settingsBtn.dataset.active = 1;
}

// Close settings when buttons pressed on mobile
function detectCloseSettings() {
	if (window.innerWidth < 800) {
		closeSettings();
	}
}

// Close settings if clicked anywhere else
window.addEventListener('mousedown', (e) => {
	const settings = document.querySelector('.settings');
	const settingsToggle = document.querySelector('#toggle-settings');
	if (!settings.contains(e.target) && !settingsToggle.contains(e.target)) {
		closeSettings();
	}
}, false);

// Settings functions
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
	for (let desktopLink of document.querySelectorAll('.desktop-letter')) {
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
	for (let desktopLink of document.querySelectorAll('.desktop-letter')) {
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
function clearDesktop() {
	for (let id of Object.keys(desktopLetters)) {
		const desktopLetter = desktopLetters[id];
		desktopLetter.deleteLetter();
	}
	desktopLetters = {};
}
function randomLetter() {
	generateLetter();
}
function printDesktop() {
	window.print();
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
function randomWindow() {
	let windowSrc = Math.floor(Math.random()*Object.keys(windowData).length);
	newWindow(Object.keys(windowData)[windowSrc]);
}

// ———————————————————————————————————————————
// INFO
// ———————————————————————————————————————————

// Open/close info
function toggleInfo() {
	const info = document.querySelector('.info');
	const infoBtn = document.querySelector('#toggle-info');
	if (parseInt(info.dataset.active) == 0) {
		info.dataset.active = 1;
		infoBtn.dataset.active = 1;
	} else {
		info.dataset.active = 0;
		infoBtn.dataset.active = 0;
	}
}
function closeInfo() {
	const info = document.querySelector('.info');
	const infoBtn = document.querySelector('#toggle-info');
	info.dataset.active = 0;
	infoBtn.dataset.active = 0;
}
function openInfo() {
	const info = document.querySelector('.info');
	const infoBtn = document.querySelector('#toggle-info');
	info.dataset.active = 1;
	infoBtn.dataset.active = 1;
}

// Close info if clicked anywhere else
window.addEventListener('mousedown', (e) => {
	const info = document.querySelector('.info');
	const infoToggle = document.querySelector('#toggle-info');
	if (!info.contains(e.target) && !infoToggle.contains(e.target)) {
		closeInfo();
	}
}, false);

// ———————————————————————————————————————————
// CLOCK
// ———————————————————————————————————————————

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
		hour = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = `<span><span class="dock-clock-date">${time.toDateString()}</span> <span class="dock-clock-number">${hour}</span>:<span class="dock-clock-number">${min}</span>:<span class="dock-clock-number">${sec}</span> ${am_pm}</span>`;

	// Displaying the time
	document.getElementById("clock").innerHTML = currentTime;
}
setInterval(showTime, 1000);
showTime();

// ———————————————————————————————————————————
// HELPER FUNCTIONS
// ———————————————————————————————————————————

// Drag element
let elementMoved = false;
function dragElmnt(e1, elmnt) {
	elementMoved = false;
	elmnt.dataset.reposition = 1;
	window.addEventListener('mouseup', endMove);
	window.addEventListener('mousemove', adjustMove);
	window.addEventListener("touchend", endMove);
	window.addEventListener("touchmove", adjustMove);
	let posX1, posY1;
	if (e1.touches != null) {
		posX1 = e1.touches[0].clientX;
		posY1 = e1.touches[0].clientY;
	} else {
		posX1 = e1.clientX;
		posY1 = e1.clientY;
		e1.preventDefault();
	}

	function adjustMove(e2) {
		if (elmnt.style.left.length == 0) {
			elmnt.style.left = '0px';
		}
		if (elmnt.style.top.length == 0) {
			elmnt.style.top = '0px';
		}
		
		elementMoved = true;
		let posX2, posY2;
		if (e2.touches != null) {
			posX2 = e2.touches[0].clientX;
			posY2 = e2.touches[0].clientY;
		} else {
			posX2 = e2.clientX;
			posY2 = e2.clientY;
			e2.preventDefault();
		}

		let deltaX = posX2-posX1;
		let deltaY = posY2-posY1;

		elmnt.style.left = parseInt(elmnt.style.left)+deltaX + "px";
		elmnt.style.top = parseInt(elmnt.style.top)+deltaY + "px";

		posX1 = posX2;
		posY1 = posY2;
	}

	function endMove() {
		elmnt.dataset.reposition = 0;
		window.removeEventListener('mouseup', endMove);
		window.removeEventListener('mousemove', adjustMove);
		window.removeEventListener("touchend", endMove);
		window.removeEventListener("touchmove", adjustMove);
	}
}

// ———————————————————————————————————————————
// TYPEY!
// ———————————————————————————————————————————
function showTypey() {
	initalizeTypey();
	const typey = document.querySelector('.typey');
	typey.dataset.active = 1;
	const toggle = document.querySelector('#toggle-typey');
	toggle.dataset.active = 1;
}
function hideTypey() {
	const typey = document.querySelector('.typey');
	typey.dataset.active = 0;
	const toggle = document.querySelector('#toggle-typey');
	toggle.dataset.active = 0;
}
function toggleTypey() {
	const typey = document.querySelector('.typey');
	if (parseInt(typey.dataset.active) == 1) {
		hideTypey();
	} else {
		showTypey();
	}
}
setTimeout(showTypey, 1500);

// Random color
function initalizeTypey() {
	let color = Math.round(Math.random()*360);
	const typey = document.querySelector('.typey');
	typey.style.setProperty('--typey', color+"deg");
}
initalizeTypey();