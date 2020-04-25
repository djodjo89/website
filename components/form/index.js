import Message from '../message';
import MaterialUIForm from 'react-material-ui-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fetch from 'node-fetch';
import Swal from 'sweetalert2';

export default function Form() {
    const handleSubmit = async values => {
        console.log('Values', values);
        const response = await fetch(process.env.mailerUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const body = await response.json();

        body.status === 201
            ? Swal.fire({
                title: 'Perfect !',
                text: 'You\'re message has been sent successfully, I\'ll do my best to answer you as soon as possible',
                icon: 'success',
                confirmButton: 'Ok',
            })
            : Swal.fire({
                title: 'Error !',
                text: 'An error has occured when sending your message, please retry and if it does\'t work, contact me directly by email',
                icon: 'error',
                confirmButtonText: 'Ok',
            });

        console.log('Response', body);
    };

    return (
        <>
            <h2>Form</h2>
            <MaterialUIForm onSubmit={handleSubmit}>
                <TextField label={'Name'} type={'text'} name={'name'} value={''} data-validators={'isRequired'} />
                <TextField label={'Email'} type={'email'} name={'email'} value={''} data-validators={'isRequired'} />
                <TextField label={'Subject'} type={'text'} name={'subject'} value={''} data-validators={'isRequired'} />
                <TextField label={'Message'} type={'text'} name={'content'} value={''} data-validators={'isRequired'} />
                <Button variant={'contained'} type={'submit'}>Submit</Button>
            </MaterialUIForm>
        </>
    );
}
