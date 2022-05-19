import { UseCase_SubmitFeedback } from "./UseCase_SubmitFeedback"

const createFeedbackSpy=jest.fn();//cria uma função zuada
const sendMailSpy=jest.fn();

const test_SubmitFeedback = new UseCase_SubmitFeedback(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('shoud be able to submit a feedback', async () => {//ele deve ser capaz de enviar um feedback
        await expect(test_SubmitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64asdf'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('shoud not be able to submit a feedback without type', async () => {//ele não deve ser capaz de enviar um feedback sem type
        await expect(test_SubmitFeedback.execute({
            type: '',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64asdf'
        })).rejects.toThrow()
    })

    it('shoud not be able to submit a feedback without comment', async () => {//ele não deve ser capaz de enviar um feedback sem comment
        await expect(test_SubmitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64asdf'
        })).rejects.toThrow()
    })

    it('shoud not be able to submit a feedback without screenshot startsWith data:image/png;base64', async () => {//ele não deve ser capaz de enviar um feedback sem screenshot iniciar com data:image/png;base64
        await expect(test_SubmitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'asdfdata:image/png;base64asdf'
        })).rejects.toThrow()
    })
})