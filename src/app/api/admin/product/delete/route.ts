import { getSqlClient } from '@root/src/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  const url = await req.json();
  try {
    const updates = url.id.map(async id => {
      await getSqlClient().product.updateMany({
        where: { id: id },
        data: {status :url.data},
      });
    });
    return NextResponse.json({ message: 'ok', updates });
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}
