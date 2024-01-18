import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    return Response.json({
        data: prisma.users.findMany()
    })
}