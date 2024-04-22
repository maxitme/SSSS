import { httpPut } from '@root/src/lib/HttpClient';
import axios from 'axios';

export async function getIdUpdateCategory(id) {
  console.log(id);
  try {
    const data = await axios
      .get(`/api/admin/category/update`, {
        params: { id: id },
        paramsSerializer: params => {
          const parts = [];
          for (const key of Object.keys(params)) {
            const val = params[key];
            if (Array.isArray(val)) {
              for (const arrayVal of val) {
                parts.push(
                  `${encodeURIComponent(key)}=${encodeURIComponent(arrayVal)}`
                );
              }
            } else {
              parts.push(
                `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
              );
            }
          }
          return parts.join('&');
        },
      })
      .then(res => res);
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function updateCategory(ids: number[], newData: any[]) {
  try {
    const data = await httpPut(`/admin/category/update`, {id: ids, newData : newData}).then(res => res)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
