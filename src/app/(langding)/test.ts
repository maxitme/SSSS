import { httpGet } from "@root/src/lib/HttpClient";
import axios from "axios";

export async function getDataCategory(){
    const data = await httpGet('/category').then(res => res)
    if(!data){
        return 'not oke'
    }
    return data
}