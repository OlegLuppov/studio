export class Header {
  showCityList = async (block) => {
    block.classList.toggle('header-city-active')
  }
}

export const thisHeader = new Header()
