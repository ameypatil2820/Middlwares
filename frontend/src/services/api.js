import axios from 'axios'

const api = axios.create(
    {
        baseURL: "http://localhost:4870/api",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })

api.interceptors.request.use((config) => {

    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const userStore = (token, user) => {
    sessionStorage.setItem("token", token)
    sessionStorage.setItem('user', JSON.stringify(user))
}

const userRemoev = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
}
export { api, userStore, userRemoev }; 
 