import { getSqlClient } from '@root/src/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const test = await request.json();
  try {
    let id = '';
    const orderAction = test[0]?.action;
    const result = await getSqlClient().$transaction(async prisma => {
      // Kiểm tra và cập nhật WarehouseDetails
      for (const item of test) {
        id = item.userId;
        const warehouseExists = await prisma.warehouse.findUnique({
          where: { id: item.warehouseId },
        });

        if (!warehouseExists) {
          throw new Error(
            `Warehouse with ID ${item.warehouseId} does not exist.`
          );
        }

        const detailExists = await prisma.warehouseDetails.findFirst({
          where: {
            warehouseId: item.warehouseId,
            productId: item.key,
          },
        });

        if (detailExists) {
          let s = detailExists.quantity;
          let ss = s + Number(item.orderquantity);
          let exports = s - Number(item.exquantity);
          if (item.action === 'IN') {
            // Cập nhật quantity nếu WarehouseDetails đã tồn tại
            await prisma.warehouseDetails.update({
              where: { id: detailExists.id },
              data: { quantity: Number(ss) }, // Hoặc cập nhật dữ liệu khác từ item
            });
          }
          if (item.action === 'OUT') {
            // Cập nhật quantity export nếu WarehouseDetails đã tồn tại
            await prisma.warehouseDetails.update({
              where: { id: detailExists.id },
              data: { quantity: Number(exports) }, // Hoặc cập nhật dữ liệu khác từ item
            });
          }
        } else {
          if (item.action === 'IN') {
            // Tạo mới nếu không tìm thấy
            await prisma.warehouseDetails.create({
              data: {
                warehouseId: item.warehouseId,
                productId: item.key,
                quantity: Number(item.orderquantity), // Hoặc thêm dữ liệu khác từ item
              },
            });
          } else {
            throw new Error(
              `Cannot find product with ID ${item.key} in warehouse to export.`
            );
          }
        }
      }

      if (orderAction === 'IN') {
        const order = await prisma.order.create({
          data: {
            userId: id, // Thay đổi này tùy theo cách bạn lấy userId
            status: 'đang chờ',
            total: test.reduce(
              (acc, item) =>
                acc + Number(item.orderquantity) * Number(item.price),
              0
            ),
            orderDetails: {
              create: test.map(item => ({
                productId: item.key,
                quantity: Number(item.orderquantity),
                price: Number(item.price),
              })),
            },
          },
          include: {
            orderDetails: true, // Để trả về OrderDetails trong response
          },
        });
        return order;
      }
      if(orderAction === 'OUT'){
         const order = await prisma.order.create({
          data: {
            userId: id, // Thay đổi này tùy theo cách bạn lấy userId
            status: 'đang xuất',
            total: test.reduce(
              (acc, item) =>
                acc + Number(item.exquantity) * Number(item.price),
              0
            ),
            orderDetails: {
              create: test.map(item => ({
                productId: item.key,
                quantity: Number(item.exquantity),
                price: Number(item.price),
              })),
            },
          },
          include: {
            orderDetails: true, // Để trả về OrderDetails trong response
          },
        });
        return order;
      }
    });
    return NextResponse.json({ mes: 'oke', result });
  } catch (error) {
    console.log(error, 'error');
    return NextResponse.json({ mes: 'not ok', error });
  }
}
