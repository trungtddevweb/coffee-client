import mainAPI from './base'

// Auth APIs
export const signUpAPI = async (data) => {
    return await mainAPI.post('/auth/sign-up', data)
}

export const loginAPI = async (data) => {
    const response = await mainAPI.post('/auth/sign-in', data)
    return response.data
}
