import { getSqlClient } from '@root/src/db';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  const idss = await req.url;
  const parts = idss.split('/');
  const ids = parts[parts.length - 1];
  try {
    const data = await getSqlClient().product.findUnique({
      where: {
        id: Number(ids),
      },
      include: {
        WarehouseDetails: true,
      },
    });
    return NextResponse.json({ mes: 'oke', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ mes: 'oke' });
  }
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  try {
    const dataput = await getSqlClient().$transaction(async prisma => {
      const warehouseDetail = await prisma.warehouseDetails.findMany({
        where : {
            productId : Number(data.id)
        }
      });

      if (!warehouseDetail) {
        throw new Error('Sản phẩm không tồn tại trong kho.');
      }

      if (warehouseDetail[0].quantity < data.quantity) {
        throw new Error('Không đủ số lượng sản phẩm trong kho.');
      }

      const updatedWarehouseDetail = await prisma.warehouseDetails.update({
        where: {
          id: warehouseDetail[0].id,
        },
        data: {
          quantity: {
            decrement: data.quantity, // Trừ đi số lượng đặt hàng
          },
        },
      });
      return updatedWarehouseDetail
    });
    return NextResponse.json({ mes: 'oke put',dataput });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ mes: 'not oke' });
  }
}
