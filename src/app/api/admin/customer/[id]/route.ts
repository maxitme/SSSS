import { PrismaClient } from '@prisma/client';
import { getSqlClient } from '@root/src/db';
import { error } from 'console';
import { url } from 'inspector';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  const customerID = params.id;
  if (!customerID) {
    // Trả về lỗi nếu không có ID được cung cấp
    return params.status(400).json({ message: 'ID is required' });
  }
  console.log(customerID);
  const url = new URL(request.url);
  console.log(url);

  try {
    const customer = customerID
      ? await getSqlClient().customer.delete({
          where: { id: parseInt(customerID) },
        })
      : await getSqlClient().customer.findMany();

    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { newFirstName: firstName, newLastName: lastName , email, phoneNumber , birthDate } =
    await request.json();

  await getSqlClient().customer.update({
    where: { id: parseInt(id) },
    data: { firstName: firstName, lastName: lastName , email: email, phoneNumber: phoneNumber, birthDate: birthDate},
  });

  return NextResponse.json({ message: 'customer updated' }, { status: 200 });
}

export async function GET(request: NextApiRequest, { params }) {
  const { id } = params;
  console.log(params);
  const customer = await getSqlClient().customer.findFirst({
    where: { id: parseInt(id) },
  });

  return NextResponse.json({ customer }, { status: 200 });
}
