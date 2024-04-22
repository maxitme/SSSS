import { httpGet } from "@root/src/lib/HttpClient";
import axios from "axios";

export async function getDataWarshouse() {
    try{
        const data = await httpGet(`/admin/warshouse`).then(res => res)
        if(!data){
            return 'not data'
        }
        return data
    }catch(error){
        return error
    }
}


export async function getDataWarshouseAndDetails(id) {
    try{
        const datas = await axios.get(`/api/admin/warshouse/${id}`)
        if(!datas){
            return 'not data'
        }
        return datas.data
    }catch(error){
        return error
    }
}

