import { PrismaClient } from '@prisma/client'


export const getSqlClient = () => {
  return new PrismaClient()
}