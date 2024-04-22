import { getSqlClient } from "@root/src/db"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const data = await getSqlClient().user.findMany()
        if(!data){
            return 'not ok user'
        }
        return NextResponse.json({mes:'oke',data}) 
    } catch (error) {
        return NextResponse.json({mes:'not oke'}) 
    }
    
}