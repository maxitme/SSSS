import { getSqlClient } from '@root/src/db';
import { NextResponse } from 'next/server';

export async function PUT(req) {
  try {
    let chunks = '';
    let e = '';
    if (req.body instanceof ReadableStream) {
      const reader = req.body.getReader();
      // Chuỗi để lưu trữ dữ liệu đọc được
      let done, value;
      while (!done) {
        ({ done, value } = await reader.read());
        if (!done) {
          chunks += new TextDecoder().decode(value);
        }
      }

      e = JSON.parse(chunks);
      // Dữ liệu text đã được đọc hoàn tất
    }
    const updatedRecords = [];
    for (let i = 0; i < e.id.length; i++) {
      let id = e.id[i];
      let newData = e.newData[i];

      // Thực hiện cập nhật cho mỗi sản phẩm dựa trên id và dữ liệu mới tương ứng
      const updatedRecord = await getSqlClient().product.update({
        where: { id },
        data: newData,
      });
      updatedRecords.push(updatedRecord);
    }  
     return NextResponse.json({ message: 'ok' ,updatedRecords});
  } catch (error) {
    console.error('Error updating record:', error);
    return NextResponse.json({ message: 'not ok' });
  }
}

