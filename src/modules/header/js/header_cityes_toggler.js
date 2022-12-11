import classInputs from '../../../classes/InputsMethods'
import { CITYES } from '../../../constants/API/API_CITYES'
import showCityList from '../../../constants/functions/togglerClassActive'

const classActive = 'header-city-active'

const cityButton = document.querySelector('.header_sity-wrapper-hover')
const searchCity = document.querySelector('.header-city')
const listCityes = document.querySelector('.list-cityes')

const city = 'city'
const optionsCityes = {
  PATH: CITYES,
  classElem: city,
  list: listCityes,
  arr: [],
}

cityButton.addEventListener('click', () => {
  showCityList(searchCity, classActive)
  classInputs.showElemApies(optionsCityes)
})
