import { NextResponse } from "next/server";
import { getSqlClient } from "@src/db"
import { getServerSession } from 'next-auth';
import { authOptions } from '@src/authNotimplementation';
import { custom } from "zod";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';


//API thêm
export async function POST(request) {

    const data = await request.json();
    console.log(data);
    const { firstName, lastName, email, phoneNumber, birthDate,gender } = data;

    let formattedBirthDate = birthDate;
    if (birthDate && Date.parse(birthDate)) {
        // birthDate hợp lệ, chuyển đổi sang định dạng mong muốn (nếu cần)
        formattedBirthDate = new Date(birthDate).toISOString();
    } else {
        // Nếu birthDate không hợp lệ, sử dụng giá trị mặc định hoặc bỏ qua trường này
        formattedBirthDate = null; // Hoặc xử lý tùy ý bạn
    }
    const Genders = ["Male", "Female", "Other"];
    const validGender = Genders.includes(gender) ? gender : null;

    const AddCustomer = await getSqlClient().customer.create({
        data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            birthDate: formattedBirthDate,
            gender: validGender ,
        },
    });

    return NextResponse.json({ message: "User created successfully", customer: AddCustomer }, { status: 201 });
}


export async function GET(request) {
  console.log("GET");
    let customers;
    let attempts = 0;
    while (attempts < 1) {
      try {
        // Lấy danh sách tất cả khách hàng từ cơ sở dữ liệu
        customers = await getSqlClient().customer.findMany({
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            birthDate: true,
            gender: true,
          },
        });
        // Nếu không có lỗi, thoát khỏi vòng lặp
        break;
      } catch (error) {
        console.error(`Attempt ${attempts} failed. Retrying...`);
        // Nếu đã thử 3 lần và vẫn gặp lỗi, trả về thông báo lỗi ngay lập tức
        if (attempts === 1) {
          return NextResponse.json({ error: 'Failed to fetch customers after 3 attempts' }, { status: 500 });
        }
      }
    }

    // Trả về danh sách khách hàng dưới dạng JSON
    return NextResponse.json({ customers }, { status: 200 });
  }


  export async function PUT(request, { params }) {
    const { id } = params;
    const { newFirstName: firstName, newLastName: lastName } = await request.json();
  
    await getSqlClient().customer.update({
      where: { id: id },
      data: { firstName: firstName, lastName: lastName },
    });
  
    return NextResponse.json({ message: "customer updated" }, { status: 200 });
  }
  