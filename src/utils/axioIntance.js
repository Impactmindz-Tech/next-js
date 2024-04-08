import axios from "axios";
import { getLocalStorage } from "./LocalStorageUtills";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    // headers: {
    //     Authorization: `Bearer ${getLocalStorage('token')}`
    // }
});


axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getLocalStorage('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response =>{
        return response
    },
    error =>{
        if(error.response && error.response.status === 401 || error.response.status == 404){
            localStorage.clear()
            window.location.href = "/auth/login";
        }
        return Promise.reject(error);
    }
)



// axiosInstance.interceptors.response.use(
//     response => {
//         return response
//     },
//     error => {
//         if (error.response && error.response.status === 401 && error.response || error.response.status === 404) {
//             setTimeout(() => {
//                 localStorage.clear()
//                 // window.location.href = "/auth/login";
//             }, 2000);
//         }
//         return Promise.reject(error);
//     }
// )