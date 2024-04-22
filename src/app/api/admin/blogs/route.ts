import { getSqlClient } from "@src/db"
import { Console } from "console";
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse ,NextRequest} from 'next/server';
export async function GET(req) {

    //const temp = req.json()
    //console.log(temp)

    return NextResponse.json({ message:'GET'}, { status: 200 });
}

export async function POST(request : NextRequest) {
   //     console.log('POST' ,req ,req.body)
     //   console.log('1' ,request.text())

   //  console.log('2' ,request.json())
    const test = await request.json()
    console.log(test)

    return NextResponse.json({ message:'POST'}, { status: 200 });
}

export async function PUT(req,res) {
   //  console.log('PUT' ,req ,req.body)
  //  const temp = req.body.json()
 //  console.log(temp)

    return NextResponse.json({ message:'PUT'}, { status: 200 });
}

export async function DELETE(req,res) {
      //  console.log('DELETE')
    //const temp = req.json()
    //console.log(temp)

    return NextResponse.json({ message:'DELETE'}, { status: 200 });
}
