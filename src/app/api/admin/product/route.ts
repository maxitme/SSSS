import { getSqlClient } from '@src/db';
import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(request: NextApiRequest) {
  let chunks = '';
  if (request.body instanceof ReadableStream) {
    const reader = request.body.getReader();
    // Chuỗi để lưu trữ dữ liệu đọc được
    let done, value;
    while (!done) {
      ({ done, value } = await reader.read());
      if (!done) {
        chunks += new TextDecoder().decode(value);
      }
    }
    // Dữ liệu text đã được đọc hoàn tất
  }

  try {
    const postProduct = await getSqlClient().product.create({
      data: JSON.parse(chunks),
    });
    return NextResponse.json({ message: 'ok', postProduct });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'not ok', });
  }
}

export async function GET() {
  try {
    const getproduct = await getSqlClient().product.findMany({
      orderBy: {
        id: 'desc', // Sắp xếp theo ID từ cao đến thấp
      },
      include:{
        WarehouseDetails:true
      }
    });
    return NextResponse.json({ message: 'ok', getproduct });
  } catch (error) {
    console.log(error);
     return NextResponse.json({ message: 'not ok'});
  }
}

