import { httpGet, httpPost } from "@root/src/lib/HttpClient"

export async function getDataProductOrderDetails() {
    try {
        const data = await httpGet('/admin/product').then(res => res)
        if(!data){
            return 'not oke'
        }
        return data
    } catch (error) {
        return error
    }
}

export async function postDataProductOrderDetails(datas) {
    try {
        const data = await httpPost('/admin/orderdetails',datas).then(res => res)
        if(!data){
            return 'not oke'
        }
        return data
    } catch (error) {
        return error
    }
}

export async function getDataUser() {
    try {
        const data = await httpGet('/admin/user').then(res => res)
        if(!data){
            return 'not oke'
        }
        return data
    } catch (error) {
        return error
    }
}