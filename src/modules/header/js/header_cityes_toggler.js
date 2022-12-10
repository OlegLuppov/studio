import { thisHeader } from '../../../classes/Header'

const cityButton = document.querySelector('.header_sity-wrapper-hover')
const searchCity = document.querySelector('.header-city')

cityButton.addEventListener('click', () => thisHeader.showCityList(searchCity))
