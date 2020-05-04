import axios from 'axios'

const api = axios.create({
    baseURL: "http://api.cotas.org/",
})

export default api;