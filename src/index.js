import { getApi} from './api'


const form = document.querySelector('form')
const address = document.querySelector('#address')


form.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const x  = await getApi(address.value)
    console.log(x)

})


