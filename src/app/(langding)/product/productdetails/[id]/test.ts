import { httpPut } from "@root/src/lib/HttpClient";
import axios from "axios";

export async function getDataProductDetails(params) {
    try {
        const data = await axios.get(`/api/product/details/${params}`)
        return data.data
    } catch (error) {
        return error
    }
}

export async function sellProduct(id,datas) {
    try {
        const data = await httpPut(`/product/details/${id}`,datas).then(res =>  res)
        return data
    } catch (error) {
        return error
    }
}