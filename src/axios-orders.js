import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://burger-build-257db.firebaseio.com/'
})

export default instance