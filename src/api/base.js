import axios from 'axios'

const mainAPI = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 10_000,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
})

export default mainAPI
