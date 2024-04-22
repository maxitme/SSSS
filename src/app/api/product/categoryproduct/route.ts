import { getSqlClient } from "@root/src/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getSqlClient().product.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json({mes:'oke',products});
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  } 
}