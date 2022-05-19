import { IMailAdapter, ISendMailData } from "../IMailAdapter";

import nodemailer from 'nodemailer';// manda email

const transport = nodemailer.createTransport({//https://mailtrap.io/  -> mailtrap config
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "20de4d0a4189a5",
        pass: "bf777219676a86"
    }
});

export class MailAdapter_NodeMailer implements IMailAdapter {
    async sendMail({subject,body}: ISendMailData,) {
        



        transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Diego Fernandes <batata@gmail.com>',
            subject,//'Novo feedback',
            html: body
        })
    };
}