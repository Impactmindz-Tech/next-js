import { axiosInstance } from "./axioIntance"


export const LoginPage = async (data)=>{
    try {
        const res = await axiosInstance.POST('/auth/login' , data) 
        return res
    } catch (error) {
        console.log(error)
        throw error
    }

}