import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:4870/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
});

// request interceptor (token add)
api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// response interceptor (optional error handling)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// store user data
const userStore = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}

// remove user data
const userRemove = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}

export { api, userStore, userRemove };














// import axios from 'axios'

// const api = axios.create(
//     {
//         baseURL: "http://localhost:4870/api",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         }
//     })

// api.interceptors.request.use((config) => {

//     const token = sessionStorage.getItem("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// const userStore = (token, user) => {
//     sessionStorage.setItem("token", token)
//     sessionStorage.setItem('user', JSON.stringify(user))
// }

// const userRemoev = () => {
//     sessionStorage.removeItem('token')
//     sessionStorage.removeItem('user')
// }
// export { api, userStore, userRemoev }; 
