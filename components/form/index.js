import Input from '../input';
import Message from '../message';
import SubmitButton from '../submitbutton/submitbutton';

export default function Form() {
    return (
        <>
            <h2>Form</h2>
            <form id={'contact-form'}>
                <Input
                    id={'name'}
                    placeholder={'Name'}
                    name={'Name'}
                >
                    Name
                </Input>
                <Input
                    id={'email'}
                    placeholder={'Exemple: test@gmail.com'}
                    name={'Email'}
                >
                    Email
                </Input>
                <Message
                    id={'message'}
                    placeholder={'Write your message here'}
                    name={'Message'}
                    formId={'contact-form'}
                >
                    Message
                </Message>
                <SubmitButton />
                <style jsx>{`
                form {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
            </form>
        </>
    )
}
