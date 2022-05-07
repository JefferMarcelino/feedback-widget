import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "15f2e3690c7971",
      pass: "35d02c567eba61"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedback.com>",
            to: "Jeffer Marcelino <jeffersunde72@gmail.com>",
            subject,
            html: body
        })
    }
}