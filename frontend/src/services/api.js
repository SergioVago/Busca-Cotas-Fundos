import axios from 'axios'

const api = axios.create({
    baseURL: "https://buscafundos.herokuapp.com/",
})

export default api;