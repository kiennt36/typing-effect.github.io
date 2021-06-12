const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const textDefault = $('.text-default')
const typeText = $('.typed-text')
const cursor = $('.cursor')

const type = {
	textList: [
		"Supper Man",
		"Spider Man",
		"Hulk",
		"Captain America",
		"Thor",
		"not Black Window",
		"Black Panther",
		"Doctor Strange",
		"a Normal Person",
		"a Coder",
	],
	typingDelay: 200,
	erasingDelay: 100,
	newTextDelay: 2000,
	textListIndex: 0,
	charIndex: 0,

	handleEvents: function () {
		textDefault.innerText = "I am"
	},

	typing: function () {
		if(this.charIndex < this.textList[this.textListIndex].length) {
			typeText.textContent +=
				this.textList[this.textListIndex].charAt(this.charIndex)
			this.charIndex++

			if(!cursor.classList.contains('typing'))
				cursor.classList.add('typing')

			setTimeout(() => {
				type.typing()
			}, this.typingDelay)
		}
		else {
			cursor.classList.remove('typing')
			setTimeout(() => {
				this.erasing()
			}, this.newTextDelay)
		}
	},

	erasing: function () {
		if(this.charIndex > 0) {
			typeText.textContent =
				this.textList[this.textListIndex].substring(0, this.charIndex-1)
			this.charIndex--

			if(!cursor.classList.contains('typing'))
				cursor.classList.add('typing')

			setTimeout(() => {
				type.erasing()
			}, this.erasingDelay)
		}
		else {
			this.textListIndex++
			if(this.textListIndex >= this.textList.length)
				this.textListIndex = 0

			cursor.classList.remove('typing')

			setTimeout(() => {
				type.typing()
			}, this.typingDelay + 1100)
		}
	},

	start: function () {
		this.handleEvents()
		this.typing()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	type.start()
})