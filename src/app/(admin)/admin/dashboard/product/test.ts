
import { httpPut } from '@root/src/lib/HttpClient';
import axios from 'axios';
export async function postProduct(data) {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/admin/product',
      data
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching products in product:', error);
    throw error;
  }
}

export async function getCategory() {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/admin/category'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  }
}

export async function getProduct() {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/admin/product'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products in product:', error);
    throw error;
  }
}

export async function updateStatusProduct(idsToDelete) {
  console.log(idsToDelete,'isd');
  try {
    const response = await httpPut('/admin/product/delete',{id : idsToDelete ,data : false}
      // {
      //   params: { id: idsToDelete },
      //   paramsSerializer: params => {
      //     const parts = [];
      //     for (const key of Object.keys(params)) {
      //       const val = params[key];
      //       if (Array.isArray(val)) {
      //         for (const arrayVal of val) {
      //           parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(arrayVal)}`);
      //         }
      //       } else {
      //         parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
      //       }
      //     }
      //     return parts.join('&');
      //   },
      // }
    ).then(res => res)
    
    return response;
  } catch (error) {
    console.error('Error deleting categories:', error);
    throw error;
  }
}


export async function getIdUpdateProduct(idsToUpadte) {
  try {
    const response = await axios.get('http://localhost:3000/api/admin/product/update',
      {
        params: { id: idsToUpadte },
        paramsSerializer: params => {
          const parts = [];
          for (const key of Object.keys(params)) {
            const val = params[key];
            if (Array.isArray(val)) {
              for (const arrayVal of val) {
                parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(arrayVal)}`);
              }
            } else {
              parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
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

export async function updateDataProduct( id:number[] ,newData :any[]) {
  try {
    const response = await axios.put('http://localhost:3000/api/admin/product/update/as',{id:id,newData:newData},{ 
             headers: {
            'Content-Type': 'application/json',
        }
});
    console.log('Updated record:', response.data);
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error updating record:', error);
    throw error; // Ném ra lỗi để xử lý ở phía gọi hàm
  }
}