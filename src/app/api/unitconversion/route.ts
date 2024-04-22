import { getSqlClient } from "@root/src/db";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const getdata = await getSqlClient().product.findMany()
        if(!getdata){
            return NextResponse.json({mes:'not ok'})
        }
        return NextResponse.json({mes:'ok',getdata})
    }catch(error){
        console.log(error,'error');
    }
}