import { axiosInstance } from "./axioIntance"


export const LoginPage = async (data)=>{
    try {
        const res = await axiosInstance.post('/auth/login' , data) 
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }

}
export const dashboardget = async ()=>{
    try {
        const res = await axiosInstance.get('/auth/me') 
        return res.data
    } catch (error) {
        console.log(error ,"auth/me api")
    }

}