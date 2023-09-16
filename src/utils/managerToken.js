export const getToken = () => {
    const tokenLogin = JSON.parse(localStorage.getItem('userToken'))
    return tokenLogin
}

export const setToken = (token) => {
    localStorage.setItem('userToken', JSON.stringify(token))
}

export const removeToken = () => {
    localStorage.removeItem('userToken')
}