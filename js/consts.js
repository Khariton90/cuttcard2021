const addSelect = (title, options, selected) => {
	const optionList = options.map(option =>
		option === selected
			? `<option $ ? selected="selected">${option}</option>`
			: `<option>${option}</option>`
	)
	const select = `${title} ×<select name="number" class="number"> ${optionList}</select> мм`

	return select
}

const blanks = {
	osb: {
		width: 2500,
		height: 1250,
		image: 'url(img/wood.jpg)',
		title: addSelect('Плита OSB 2500 × 1250', [9, 12, 15, 18, 22], 12),
	},
	osb24: {
		width: 2440,
		height: 1220,
		image: 'url(img/wood.jpg)',
		title: addSelect('Плита OSB 2440 × 1220', [9, 12, 15, 18, 22], 12),
	},
	playWood: {
		width: 1525,
		height: 1525,
		image: 'url(img/playwood.jpg)',
		title: addSelect('Фанера ФК 1525 × 1525', [4, 6, 8, 10, 12, 15, 18, 21], 8),
	},
	playWood24: {
		width: 2440,
		height: 1220,
		image: 'url(img/playwood.jpg)',
		title: addSelect('Фанера ФСФ 2440 × 1220', [9, 12, 15, 18, 21], 9),
	},
	gkl15: {
		width: 1500,
		height: 600,
		image: 'url(img/gkl.jpg)',
		title: 'ГКЛ 1500 × 600 × 12.5 мм',
	},
	gkl: {
		width: 2500,
		height: 1200,
		image: 'url(img/gkl.jpg)',
		title: addSelect('ГКЛ 2500 × 1200', [6.5, 9.5, 12.5, 15], 12.5),
	},
	gkl20: {
		width: 2000,
		height: 1200,
		image: 'url(img/gkl.jpg)',
		title: 'ГКЛ 2000 × 1200 × 12.5 мм',
	},
	gkl26: {
		width: 2600,
		height: 1200,
		image: 'url(img/gkl.jpg)',
		title: 'ГКЛ 2600 × 1200 × 12.5 мм',
	},
	gkl30: {
		width: 3000,
		height: 1200,
		image: 'url(img/gkl.jpg)',
		title: addSelect('ГКЛ 3000 × 1200', [9.5, 12.5, 15], 12.5),
	},
	gkl27: {
		width: 2700,
		height: 1200,
		image: 'url(img/gkl.jpg)',
		title: 'ГКЛ 2700 × 1200 × 12.5 мм',
	},
	gkl33: {
		width: 3300,
		height: 1200,
		image: 'url(img/gkl.jpg)',
		title: 'ГКЛ 3300 × 1200 × 12.5 мм',
	},
	gkl095: {
		width: 1950,
		height: 1200,
		image: 'url(img/gkl.jpg)',
		title: 'ГКЛ 1950 × 1200 × 12.5 мм',
	},
	dvp: {
		width: 2745,
		height: 1220,
		image: 'url(img/dvp.jpg)',
		title: 'ДВП 2745 × 1220 × 3.2 мм',
	},
	dvp21: {
		width: 2140,
		height: 1220,
		image: 'url(img/dvp.jpg)',
		title: 'ДВП 2140 × 1220 × 3 мм',
	},
	gvl: {
		width: 2500,
		height: 1200,
		image: 'url(img/gvl.jpg)',
		title: addSelect('ГВЛ 2500 × 1200', [10, 12], 12),
	},
	gvl20: {
		width: 2000,
		height: 1200,
		image: 'url(img/gvl.jpg)',
		title: 'ГВЛ Knauf 2000х1200х12,5 мм влагостойкий негорючий',
	},
	csp: {
		width: 3200,
		height: 1200,
		image: 'url(img/csp.jpg)',
		title: addSelect('ЦСП 3200 × 1200', [10, 12, 16, 20], 12),
	},
	csp12: {
		width: 1200,
		height: 795,
		image: 'url(img/csp.jpg)',
		title: 'ЦСП 1200 × 795 × 8 мм',
	},
	csp125: {
		width: 3200,
		height: 1250,
		image: 'url(img/csp.jpg)',
		title: addSelect('ЦСП 3200 × 1250', [10, 12, 16, 20], 10),
	},
	dsp: {
		width: 2750,
		height: 1830,
		image: 'url(img/dsp.jpg)',
		title: 'ДСП 2750 × 1830 × 16 мм',
	},
	playWoodLaminated: {
		width: 2440,
		height: 1220,
		image: 'url(img/wood_texture3142.jpg)',
		title: addSelect('Фанера ламинированная 2440 × 1220', [15, 18, 21], 15),
	},
	slate: {
		width: 3000,
		height: 1500,
		image: 'url(img/csp.jpg)',
		title: 'Шифер плоский 3000 × 1500 × 10 мм',
	},
	sml: {
		width: 2440,
		height: 1220,
		image: 'url(img/gvl.jpg)',
		title: addSelect('СМЛ 2440 × 1220', [8, 10], 10),
	},
	slate15: {
		width: 1500,
		height: 300,
		image: 'url(img/csp.jpg)',
		title: 'Шифер плоский 1500 × 300 × 8 мм',
	},
	slate1500: {
		width: 1500,
		height: 1000,
		image: 'url(img/csp.jpg)',
		title: 'Шифер плоский 1500 × 1000 × 10 мм',
	},
	isoplat: {
		width: 2700,
		height: 1200,
		image: 'url(img/dsp.jpg)',
		title: addSelect('Плита Изоплат 2700 × 1200', [12, 24], 12),
	},
	polycarbonate: {
		width: 6000,
		height: 2100,
		image: 'url(img/poly.jpg)',
		title: addSelect('Поликарбонат 6000 × 2100', ['3-4', 4, 6, 8, 10], 4),
	},
	polycarbonateMonolyte: {
		width: 2050,
		height: 1500,
		image: 'url(img/poly.jpg)',
		title: addSelect('Поликарбонат монолитный 2050 × 1500', [2, 4], 4),
	},
	dspGroove600: {
		width: 2440,
		height: 600,
		image: 'url(img/dsp.jpg)',
		title: addSelect(
			'ДСП 2440х600 Quick Deck Professional шпунтованная',
			[16, 22],
			16
		),
	},
	dspGroove900: {
		width: 2440,
		height: 900,
		image: 'url(img/dsp.jpg)',
		title: 'ДСП 2440 х 900 Quick Deck Professional шпунтованная 12 мм',
	},
	hotRolled: {
		width: 2500,
		height: 1250,
		image: 'url(img/csp.jpg)',
		title: addSelect('Лист горячекатаный 2500 х 1250 мм', [1.5, 2, 3, 4], 1.5),
	},
	hotRolled125: {
		width: 1250,
		height: 750,
		image: 'url(img/csp.jpg)',
		title: addSelect('Лист горячекатаный 1250 x 750 мм', [2, 3], 2),
	},
	hotRolled15: {
		width: 1500,
		height: 550,
		image: 'url(img/csp.jpg)',
		title: 'Лист горячекатаный 1500х550 мм х 4 мм',
	},
	akvaV: {
		width: 2400,
		height: 1200,
		image: 'url(img/csp.jpg)',
		title: 'Аквапанель Кнауф Внутренняя 2400 х 1200 х 12,5 мм',
	},
	akvaN: {
		width: 2400,
		height: 1200,
		image: 'url(img/csp.jpg)',
		title: 'Аквапанель Кнауф Наружная 2400 х 1200 х 12,5 мм',
	},
	akvaVsm: {
		width: 1200,
		height: 900,
		image: 'url(img/csp.jpg)',
		title: 'Аквапанель Кнауф Внутренняя 1200 х 900 х 12,5 мм',
	},
}
