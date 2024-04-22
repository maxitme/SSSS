import { NextResponse } from "next/server";
import { getSqlClient } from "@src/db"
import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth';
import { authOptions } from '@src/authNotimplementation';
// To handle a GET request to /api

export async function GET(request) {
  const session = getServerSession(authOptions)
  const users = await getSqlClient().user.findMany();
  // Do whatever you want
  return NextResponse.json(users, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  const data = await request.json();
  const { email, name, password, address, phone } = data;
  // Save user data to the database


  const enscriptPassword = bcrypt.hashSync(password)

  const newUser = await getSqlClient().user.create({
    data: {
      email,
      name,
      password: enscriptPassword,

    },
  });

  return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
}