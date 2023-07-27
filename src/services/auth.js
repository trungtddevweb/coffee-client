import jwtDecode from 'jwt-decode'

// Thời gian hết hạn của token (thời gian tính bằng giây)
// const TOKEN_EXPIRATION_TIME = 3600;

// Lấy token từ localStorage
const getToken = () => localStorage.getItem('token')

// Lưu token vào localStorage
const setToken = (token) => localStorage.setItem('token', token)

// Kiểm tra xem token có hết hạn hay không
const isTokenExpired = (token) => {
    const decodedToken = jwtDecode(token)
    if (!decodedToken || !decodedToken.exp) return true
    return Date.now() >= decodedToken.exp * 1000
}

// Hàm kiểm tra xem người dùng đã đăng nhập hay chưa
const isAuthenticated = () => {
    const token = getToken()
    return token && !isTokenExpired(token)
}

export { getToken, setToken, isAuthenticated }
