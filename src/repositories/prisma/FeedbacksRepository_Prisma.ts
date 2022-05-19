import { IFeedbackCreateData, IFeedbacksRepository } from "../IFeedbacksRepository"

import { prisma } from "../../prisma"//prisma cliente, js->sql

export class FeedbackRepository_Prisma implements IFeedbacksRepository {
    async create({ type, comment, screenshot }: IFeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}