import { getSqlClient } from "@root/src/db";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  const url = req.url;
  const urlObj = new URL(url);

  // Lấy ra chuỗi truy vấn
  const queryString = urlObj.search;

  // Sử dụng URLSearchParams để trích xuất 'id'
  const params = new URLSearchParams(queryString);
  const ids = params.getAll('id'); // Trả về một mảng với tất cả giá trị cho 'id'

  // Chuyển đổi mảng chuỗi thành mảng số
  const idNumbers = ids.map(Number);

  console.log(idNumbers); // [1, 3]

    try {
      const getResultUpdate = await getSqlClient().product.findMany({
        where: {
          id: {
            in: idNumbers,
          },
        },
      });

      
        return NextResponse.json({ message: 'ok', getResultUpdate });
    } catch (error) {
      console.error('Error deleting product:', error);
    }
}