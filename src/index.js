import { getApi} from './api'
import './styles.css'


const form = document.querySelector('form')
const address = document.querySelector('#address')


const x = await getApi('jammu')
console.log(x)


form.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const x  = await getApi(address.value)
    console.log(x)

})


