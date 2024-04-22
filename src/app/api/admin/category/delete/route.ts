import { getSqlClient } from '@root/src/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function DELETE(req: NextApiRequest) {
  //   let { id } = req;
  //   const idsToDelete = Array.isArray(id) ? id.map(Number) : [Number(id)];

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
      const deleteResult = await getSqlClient().category.deleteMany({
        where: {
          id: {
            in: idNumbers,
          },
        },
      });

      
        return NextResponse.json({ message: 'ok', deleteResult });
    } catch (error) {
      console.error('Error deleting categories:', error);
    }
}
