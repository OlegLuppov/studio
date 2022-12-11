class Inputs {
  showElemApies = async (path, list, classElem) => {
    const arr = []
    const response = await fetch(path, {
      method: 'POST',
    })

    const data = await response.json()

    data.forEach((elem) => {
      arr.push(elem)
    })

    arr.forEach((elem) => {
      if (elem.cities) {
        elem.cities.forEach((el) => {
          const li = document.createElement('li')
          li.classList.add(classElem)
          li.textContent = el.name
          list.append(li)
        })
      } else {
        const li = document.createElement('li')
        li.classList.add(classElem)
        li.textContent = elem.name
        list.append(li)
      }
    })
    console.log(arr)
  }
}

const classInputs = new Inputs()

export default classInputs
