import { httpGet, httpPost } from '@root/src/lib/HttpClient';
import axios from 'axios';
export async function postCategory(data) {
  try {
    const response = await axios.post(
      '/api/admin/category',
      data
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  }
}

export async function getCategory() {
  try {
    const response = await axios.get(
      '/api/admin/category'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  }
}

export async function deleteIdCategory(idsToDelete) {
  console.log(idsToDelete, 'isd');
  try {
    const response = await axios.delete(
      '/api/admin/category/delete',
      {
        params: { id: idsToDelete },
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
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting categories:', error);
    throw error;
  }
}

export async function getCategoryHighLevel() {
  try {
    const response = await axios.get(
      '/api/admin/category/catehighlevel'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  }
}

export async function postCategoryHighLevel(data) {
  try {
    const response = await httpPost('/admin/category/catehighlevel',data).then(
      res => res
    );
    return response;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  }
}
