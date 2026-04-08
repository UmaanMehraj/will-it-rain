import { getApi} from './api'
import './styles.css'


const form = document.querySelector('form')
const address = document.querySelector('#address')

form.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const x  = await getApi(address.value)
    console.log(x)
    appendDiv(x)

})

const cardBig = document.querySelector('.card-big')

function appendDiv(data){
    cardBig.innerHTML = ''
    const iconDiv = document.createElement('div')
    iconDiv.setAttribute('class', 'icon-big')

    const cityDiv = document.createElement('div')
    cityDiv.setAttribute('class', 'city-big')
    cityDiv.innerText = data.location

    const tempDiv = document.createElement('div')
    tempDiv.setAttribute('class', 'temp-big')
    tempDiv.innerHTML = `Temperature: ${data.temp}&deg C`

    const descriptionDiv = document.createElement('div')
    descriptionDiv.setAttribute('class', 'description')
    descriptionDiv.innerText = data.description

    const conditionDiv = document.createElement('div')
    conditionDiv.setAttribute('class', 'condition')
    conditionDiv.innerText = data.condition

    cardBig.append(iconDiv, cityDiv, tempDiv,conditionDiv,  descriptionDiv)



}


