import { getSqlClient } from '@root/src/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getSqlClient().order.findMany({
      where: {
        status : 'đang xuất'
      },
      include: {
        user: true, 
      },
      orderBy: {
        createdAt: 'desc', // 'desc' để sắp xếp từ mới nhất đến cũ nhất
      },
    });
    if (!data) {
      return 'not ok order';
    }
    return NextResponse.json({ mes: 'oke', data });
  } catch (error) {
    return NextResponse.json({ mes: 'not oke' });
  }
}
