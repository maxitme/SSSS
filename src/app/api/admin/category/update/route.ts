import { getSqlClient } from '@root/src/db';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req) {
  const data = req.url;
  const urlObj = new URL(data);
  const queryString = urlObj.search;
  const params = new URLSearchParams(queryString);
  const ids = params.getAll('id');
  const idNumbers = ids.map(Number);
  try {
    const data = await getSqlClient().category.findMany({
      where: {
        id: {
          in: idNumbers,
        },
      },
    });
    if (!data) {
      return 'not ok category';
    }
    return NextResponse.json({ mes: 'oke', data });
  } catch (error) {
    return NextResponse.json({ mes: 'not oke' });
  }
}

export async function PUT(req : NextRequest) {
  const data = await req.json()
  try {
    const updatedRecords = [];
    for (let i = 0; i < data.id.length; i++) {
      let id = data.id[i];
      let newData = data.newData[i];

      // Thực hiện cập nhật cho mỗi sản phẩm dựa trên id và dữ liệu mới tương ứng
      const updatedRecord = await getSqlClient().category.update({
        where: { id },
        data: newData,
      });
      updatedRecords.push(updatedRecord);
    }  
    return NextResponse.json({ mes: 'oke',updatedRecords });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ mes: 'not oke' });
  }
}
