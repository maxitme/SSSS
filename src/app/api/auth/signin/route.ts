import { NextResponse } from "next/server";
import { getSqlClient } from "@src/db";
import bcrypt from "bcryptjs";

// To handle a POST request to /api/login
export async function POST(request) {
  const data = await request.json();
  const { email, password } = data;

  // Fetch user data from the database based on the provided email
  const user = await getSqlClient().user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    // If user is not found, return an error response
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Compare the provided password with the hashed password stored in the database
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    // If passwords don't match, return an error response
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  // Passwords match, user is authenticated
  // You can generate a session token or JWT here and return it in the response
  // For simplicity, let's just return the user object
  return NextResponse.json({ message: "Login successful", user });
}