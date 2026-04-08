import { getApi } from './api'
import './styles.css'
import rainyImg from './img/rainy.svg'
import sunnyImg from './img/sunny.svg'
import cloudyImg from './img/cloud.svg'

const form = document.querySelector('form')
const address = document.querySelector('#address')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const x = await getApi(address.value)
  appendDiv(x)
})

const cardBig = document.querySelector('.card-big')
const smallCardOne = document.querySelector('.card-small-one')
const smallCardTwo = document.querySelector('.card-small-two')

appendDiv(await getApi('Palo Alto'))

function appendDiv(data) {
  cardBig.innerHTML = ''
  smallCardOne.innerHTML = ''
  smallCardTwo.innerHTML = ''
  const iconDiv = document.createElement('div')
  iconDiv.setAttribute('class', 'icon-big')
  const imgBig = document.createElement('img')

  const cityDiv = document.createElement('div')
  cityDiv.setAttribute('class', 'city-big')
  cityDiv.innerText = data.location

  const tempDiv = document.createElement('div')
  tempDiv.setAttribute('class', 'temp-big')
  tempDiv.innerHTML = `${data.temp}&deg C`

  const descriptionDiv = document.createElement('div')
  descriptionDiv.setAttribute('class', 'description')
  descriptionDiv.innerText = data.description

  const conditionDiv = document.createElement('div')
  conditionDiv.setAttribute('class', 'condition')
  conditionDiv.innerText = data.condition

  appendImg(iconDiv, imgBig, data.condition)

  const iconOne = document.createElement('div')
  iconOne.setAttribute('class', 'icon-small')
  const imgOne = document.createElement('img')


  const tempOne = document.createElement('div')
  tempOne.setAttribute('class', 'temp')
  tempOne.innerHTML = `${data.nextDay[0]}&deg C`

  const descOne = document.createElement('div')
  descOne.setAttribute('class', 'descirption')
  descOne.innerText = data.nextDay[1]

  const dateOne = document.createElement('div')
  dateOne.innerText = data.nextDay[2]

  appendImg(iconOne, imgOne, data.nextDay[1])

  const iconTwo = document.createElement('div')
  iconTwo.setAttribute('class', 'icon-small')
  const imgTwo = document.createElement('img')

  const tempTwo = document.createElement('div')
  tempTwo.setAttribute('class', 'temp')
  tempTwo.innerHTML = `${data.dayTwo[0]}&deg C`

  const descTwo = document.createElement('div')
  descTwo.setAttribute('class', 'descirption')
  descTwo.innerText = data.dayTwo[1]

  const dateTwo = document.createElement('div')
  dateTwo.innerText = data.dayTwo[2]

    appendImg(iconTwo, imgTwo, data.dayTwo[1])

  cardBig.append(iconDiv, cityDiv, tempDiv, conditionDiv, descriptionDiv)
  smallCardOne.append(iconOne, tempOne, dateOne, descOne)
  smallCardTwo.append(iconTwo, tempTwo, dateTwo, descTwo)
}

function appendImg(parent, img, data) {
  if (data.includes('Clear')) {
    img.src = sunnyImg
    parent.append(img)
  } else if (
    data.includes('cloudy') ||
    data.includes('Cloudy')
  ) {
    img.src = cloudyImg
    parent.append(img)
  } else if (
    data.includes('rain') ||
    data.includes('Rain')
  ) {
    img.src = rainyImg
    parent.append(img)
  }
}
