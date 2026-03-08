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


    const userStore = () =>{

    }

    const userRemoev = () =>{
        
    }

export default api; 
