import { getSqlClient } from '@root/src/db';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  const data = req.url;
  const parts = data.split('/');
  const id = parts[parts.length - 1];
  try {
    const warehouseDetail = await getSqlClient().warehouseDetails.findMany({
      where: {
        warehouseId: Number(id),
      },
      include: {
        warehouse: true, // Đảm bảo rằng bạn đã thiết lập mối quan hệ trong schema Prisma của mình
        product: true, // Tương tự như trên, đảm bảo mối quan hệ đã được thiết lập
      },
    });

    if (!warehouseDetail) {
      return NextResponse.json({ mes: 'not oke' });
    }
    return NextResponse.json({ mes: 'oke', warehouseDetail });
  } catch (error) {
    console.log(error, 'error');
    return error;
  }
}
