import { getSqlClient } from '@src/db';
import type { NextApiRequest, NextApiResponse } from 'next';
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
    const postCategory = await getSqlClient().category.create({
      data: JSON.parse(chunks),
    });
    return NextResponse.json({ message: 'ok', postCategory });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    const getCategory = await getSqlClient().category.findMany({
      orderBy: {
        id: 'desc', // Sắp xếp theo ID từ cao đến thấp
      },
    });
    return NextResponse.json({ message: 'ok', getCategory });
  } catch (error) {
    console.log(error);
  }
}
