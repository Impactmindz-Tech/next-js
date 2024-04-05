import axios from "axios";
import { getLocalStorage } from "./LocalStorageUtills";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        Authorization: `Bearer ${getLocalStorage('token')}`
    }
});
