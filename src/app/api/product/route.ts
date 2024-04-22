import { getSqlClient } from "@src/db"
import { NextResponse } from "next/server";

export async function GET() {
    const product = await getSqlClient().product.findMany()
    if(!product){
        return  NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message:'ok', product});
}