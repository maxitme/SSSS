import { getServerSession } from "next-auth/next"

import { authOptions } from "@src/authNotimplementation"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}
