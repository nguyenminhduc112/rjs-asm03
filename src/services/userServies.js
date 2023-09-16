export const getAllUser = () => {
    const users = JSON.parse(localStorage.getItem('userArr')) || []
    return users
}

export const getUser = (email) => {
    const users = JSON.parse(localStorage.getItem('userArr')) || []
    const user = users.find(user => user.email === email)
    return user
}

export const addUser = (user) => {
    const users = JSON.parse(localStorage.getItem('userArr')) || []
    users.push(user)
    localStorage.setItem('userArr', JSON.stringify(users))
}

export const checkEmailPassword = (userData) => {
    const users = JSON.parse(localStorage.getItem('userArr')) || []
    const user = users.find(user => (user.email === userData.email) && (user.password === userData.password))
    return user
}