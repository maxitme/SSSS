import { httpGet } from '@root/src/lib/HttpClient';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export async function getDataOrder() {
  try {
    const data = await httpGet('/admin/order').then(res => res);
    return data;
  } catch (error) {
    return error;
  }
}
export async function getDataOrderExport() {
  try {
    const data = await httpGet('/admin/order/warehouse').then(res => res);
    return data;
  } catch (error) {
    return error;
  }
}

export async function getDataOrderDetails(id) {
  try {
    const datas = await axios.get(`/api/admin/order/details/${id}`);
    return datas.data;
  } catch (error) {
    return error;
  }
}

export async function getDataCategoryById(id) {
  try {
    const datas = await axios.get(`/api/admin/category/catehighlevel/${id}`);
    return datas.data;
  } catch (error) {
    return error;
  }
}

export function exportToExcel(data, fileName) {
  // Tạo một workbook mới
  const wb = XLSX.utils.book_new();
  // Chuyển đổi dữ liệu thành một worksheet
  const ws = XLSX.utils.json_to_sheet(data);

  // Thêm worksheet vào workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Orders');
  // Tạo một đối tượng Blob từ workbook
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  saveAs(
    new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
    `${fileName}.xlsx`
  );
}
