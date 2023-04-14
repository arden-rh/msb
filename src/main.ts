import './css/style.min.css'

/**
 * HTML Elements
 */

// Info boxes (accordion style)
const infoBox1 = document.querySelector('#info-box-1') as HTMLDivElement
const infoBox1Content = document.querySelector('#info-box-1-content') as HTMLDivElement
const infoBox1Text = document.querySelector('#info-box-1-text') as HTMLElement

const infoBox2 = document.querySelector('#info-box-2') as HTMLDivElement
const infoBox2Content = document.querySelector('#info-box-2-content') as HTMLDivElement
const infoBox2Text = document.querySelector('#info-box-2-text') as HTMLElement

const infoBox3 = document.querySelector('#info-box-3') as HTMLDivElement
const infoBox3Content = document.querySelector('#info-box-3-content') as HTMLDivElement
const infoBox3Text = document.querySelector('#info-box-3-text') as HTMLElement

const infoBox4 = document.querySelector('#info-box-4') as HTMLDivElement
const infoBox4Content = document.querySelector('#info-box-4-content') as HTMLDivElement
const infoBox4Text = document.querySelector('#info-box-4-text') as HTMLElement


/**
 * Function to toggle info boxes from hidden to showing
 * @param boxContent
 * @param boxText
 */
const toggleBox = (boxContent: HTMLElement, boxText: HTMLElement) => {
	boxContent.classList.toggle('hidden')
	boxContent.classList.toggle('box-content')

	boxText.classList.toggle('box-text')
	boxText.classList.toggle('box-text-toggled')

	boxContent.scrollIntoView({ behavior: 'smooth'})

}

infoBox1.addEventListener('click', () => {

	toggleBox(infoBox1Content, infoBox1Text)


})

infoBox2.addEventListener('click', () => {

	toggleBox(infoBox2Content, infoBox2Text)

})

infoBox3.addEventListener('click', () => {

	toggleBox(infoBox3Content, infoBox3Text)

})

infoBox4.addEventListener('click', () => {

	toggleBox(infoBox4Content, infoBox4Text)

})
