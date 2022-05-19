import express from 'express';//rotas
import { MailAdapter_NodeMailer } from './adapters/node-mailer/MailAdapter_NodeMailer';
import { FeedbackRepository_Prisma } from './repositories/prisma/FeedbacksRepository_Prisma';
import { UseCase_SubmitFeedback } from './use-cases/UseCase_SubmitFeedback';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;


    new UseCase_SubmitFeedback(
        new FeedbackRepository_Prisma(),//save in Repository
        new MailAdapter_NodeMailer()//sand mail
    ).execute({ type, comment, screenshot })//submit


    return res.status(201).send();
})