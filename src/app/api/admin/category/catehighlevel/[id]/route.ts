import { getSqlClient } from '@root/src/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const ids = await req.url;
  const parts = ids.split('/');
  const id = parts[parts.length - 1];
  try {
    const data = await getSqlClient().category.findMany({
      where: {
        parentId : Number(id)
      }
    });
    if (!data) {
      return NextResponse.json({ mes: 'not oke data' });
    }
    return NextResponse.json({ mes: 'oke', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ mes: 'not oke' });
  }
}
