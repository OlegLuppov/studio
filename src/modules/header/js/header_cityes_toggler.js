import classInputs from '../../../classes/InputsMethods'
import { CITYES } from '../../../constants/API/API_CITYES'
import showCityList from '../../../constants/functions/togglerClassActive'

const classActive = 'header-city-active'

const cityButton = document.querySelector('.header_sity-wrapper-hover')
const searchCity = document.querySelector('.header-city')
const inputField = document.querySelector('.list-cityes-input')

const listCityes = document.querySelector('.list-cityes')

const city = 'city'
let value = ''

cityButton.addEventListener('click', () => {
  showCityList(searchCity, classActive)
  classInputs.showElemApies(CITYES, listCityes, city)
})

const changeValue = (e) => {
  console.log(e.target)
}

inputField.addEventListener('input', (e) => {})
