import axios from 'axios'

const mainAPI = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 10_000,
    withCredentials: true,
})

// Add a response interceptor
mainAPI.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token') // Replace 'userToken' with the key you use to store the token in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default mainAPI
