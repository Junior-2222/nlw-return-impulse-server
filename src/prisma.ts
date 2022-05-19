//js -> sql
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log:['query']//mostra cada alteraçao no console
})