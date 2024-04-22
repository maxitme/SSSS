import { getSqlClient } from "@root/src/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const category = await getSqlClient().category.findMany({
        include:{
            products: true
        }
    })
    if(!category){
        return  NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message:'ok', category});
}