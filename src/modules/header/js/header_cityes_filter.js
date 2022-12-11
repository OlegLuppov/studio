import classInputs from '../../../classes/InputsMethods'

const citysItems = '.city'
const inputField = document.querySelector('.list-cityes-input')

inputField.addEventListener('input', (e) => {
  classInputs.filter(e, citysItems)
})
