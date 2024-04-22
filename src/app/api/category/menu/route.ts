import { getSqlClient } from "@root/src/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET() {
    const category = await getSqlClient().category.findMany({
        include : {
            products : true
        }
    })
    return NextResponse.json({mes:'ok',category})
}