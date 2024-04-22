import { getSqlClient } from '@root/src/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const warehouses = await getSqlClient().warehouse.findMany();
    if (!warehouses) {
      return NextResponse.json({ mes: 'not oke' });
    }
    return NextResponse.json({ mes: 'oke', warehouses });
  } catch (error) {
    return error;
  }
}
