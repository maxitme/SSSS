import { getSqlClient } from '@root/src/db';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  const data = req.url;
  const parts = data.split('/');
  const id = parts[parts.length - 1];
  try {
    const orderDetail = await getSqlClient().orderDetails.findMany({
      where: {
        orderId: id,
      },
      include: {
        product: true,
      },
    });

    if (!orderDetail) {
      return NextResponse.json({ mes: 'not oke' });
    }
    return NextResponse.json({ mes: 'oke', orderDetail });
  } catch (error) {
    console.log(error, 'error');
    return error;
  }
}
