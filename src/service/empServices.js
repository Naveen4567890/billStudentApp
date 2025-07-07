import axios from "axios"
import axiosInstance from "../components/AxiosInstance/instance"

let empServices={

    regiUser: async(payload)=>{
    try {
        let data=await axiosInstance.post("/register",payload)
        return data
    } catch (error) {
        return error
    }
    }, 
    loginUser: async(payload)=>{
    try {
        let data=await axiosInstance.post("/login",payload)
        return data
    } catch (error) {
        return error
    }
    },
    addBills:async (payload,token)=>{
        try {
            let data=await axiosInstance.post("/add-bill",payload,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            return data
        } catch (error) {
           return error 
        }
    },
    allBills:async(token)=>{
         try {
            let data=await axiosInstance.get("/get-bill-by-user",{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            return data
        } catch (error) {
           return error 
        }
    }

}
export default empServices