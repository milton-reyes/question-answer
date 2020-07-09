import Axios from 'axios'

const server = !process.env.NODE_ENV || process.env.NODE_ENV == 'development' ?
    'http://localhost:3000' : 'http://localhost:3000'

export const internalAxios = Axios.create({
    baseURL: server
})