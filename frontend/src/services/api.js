import axios from 'axios'

const api = axios.create(
    {
        baseURL: "http://localhost:4870/api",
        headers: {
            "Authorization": `Bearer Your Tokan`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })


const userStore = (tokan, user) => {
    sessionStorage.setItem("tokan", tokan)
    sessionStorage.setItem('user', JSON.stringify(user))
}

const userRemoev = () => {
    sessionStorage.removeItem('tokan')
    sessionStorage.removeItem('user')
}

export { api, userStore, userRemoev }; 
