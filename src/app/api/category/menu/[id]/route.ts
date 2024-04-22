import { getSqlClient } from '@root/src/db';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  const ids = await req.url;
  const parts = ids.split('/');
  const id = parts[parts.length - 1];
  try {
    const data = await getSqlClient().product.findMany({
      where: {
        categoryId: Number(id),
      },
      include:{
        category: true
      }
    });
    return NextResponse.json({ mes: 'oke', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ mes: 'not oke' });
  }
}
