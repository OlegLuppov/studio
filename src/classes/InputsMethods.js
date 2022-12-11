class Inputs {
  showElemApies = async (options) => {
    if (options.arr.length === 0) {
      const response = await fetch(options.PATH, {
        method: 'POST',
      })

      const data = await response.json()

      data.forEach((elem) => {
        options.arr.push(elem)
      })
      options.arr.forEach((elem) => {
        if (elem.cities) {
          elem.cities.forEach((el) => {
            const li = document.createElement('li')
            li.classList.add(options.classElem)
            li.textContent = el.name
            options.list.append(li)
          })
        } else {
          const li = document.createElement('li')
          li.classList.add(options.classElem)
          li.textContent = elem.name
          options.list.append(li)
        }
      })
    }
  }

  filter = (e, list) => {
    const arrElem = document.querySelectorAll(list)

    if (e.target.value !== '') {
      let value = e.target.value.trim()
      let newValue = value[0].toUpperCase() + value.slice(1)

      arrElem.forEach((el) => {
        if (el.innerText.search(newValue) === -1) {
          el.classList.add('hide')
        } else {
          el.classList.remove('hide')
          let str = el.innerText
          el.innerHTML = this.insertTrim(str, el.innerText.search(newValue), newValue.length)
        }
      })
    } else {
      arrElem.forEach((el) => {
        el.classList.remove('hide')
      })
    }
  }

  insertTrim = (str, pos, len) =>
    `${str.slice(0, pos)}<mark>${str.slice(pos, pos + len)}</mark>${str.slice(pos + len)}`
}

const classInputs = new Inputs()

export default classInputs
