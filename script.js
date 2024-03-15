'use strict'

const square = document.getElementById('square')

let r = 0,
	g = 0,
	b = 0
let intervalId = null // Zmienna do przechowywania identyfikatora interwału

const changeColor = () => {
	if (r === 0 && g === 0 && b < 255) {
		b++
	} else if (r === 0 && g < 255 && b > 0) {
		b--
		g++
	} else if (r === 0 && g > 0 && b < 255) {
		b++
	} else if (r < 255 && g > 0 && b > 0) {
		r++
		g--
		b--
	} else if (r > 0 && g === 0 && b < 255) {
		b++
	} else if (r > 0 && g < 255 && b > 0) {
		b--
		g++
	} else if (r > 0 && g > 0 && b < 255) {
		b++
	}

	if (r === 255 && g === 255 && b === 255) {
		// Warunek zakończenia animacji i zatrzymania interwału
		(r = 0), (b = 0), (g = 0)
	}

	square.style.backgroundColor = `rgb(${r},${g},${b})`
}

intervalId = setInterval(changeColor, 10)
