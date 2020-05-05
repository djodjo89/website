import React from 'react';
import fetch from 'node-fetch';
import Swal from 'sweetalert2';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import Loader from '../loader';

export default function ContactForm() {
    return (
        <Grid item>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    content: '',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);

                    console.log('Values', values);

                    const response = await fetch(`/api/send-email`, {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    });

                    const body = await response.json();

                    setSubmitting(false);

                    body.status === 201
                        ? Swal.fire({
                            title: 'Perfect !',
                            text: 'You\'re message has been sent successfully, I\'ll do my best to answer you as soon as possible',
                            icon: 'success',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: 'black',
                        })
                        : Swal.fire({
                            title: 'Error !',
                            text: 'An error has occured when sending your message, please check the fields values or contact me directly by email',
                            icon: 'error',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: 'black',
                        });

                    console.log('Response', body);
                }}
            >
                {({ isSubmitting }) =>
                    <Form>
                        {(() => isSubmitting ? <Loader /> : null)()}
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Field
                                    label={'Name'}
                                    type={'text'}
                                    name={'name'}
                                    value={''}
                                    required
                                    fullWidth
                                    component={TextField}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label={'Email'}
                                    type={'email'}
                                    name={'email'}
                                    value={''}
                                    required
                                    fullWidth
                                    component={TextField}
                                    autoComplete={'email'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label={'Subject'}
                                    type={'text'}
                                    name={'subject'}
                                    value={''}
                                    required
                                    fullWidth
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label={'Describe more precisely what you want to do'}
                                    type={'text'}
                                    name={'content'}
                                    value={''}
                                    required
                                    fullWidth
                                    component={TextField}
                                    multiline
                                    rows={10}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: '1em' }}>
                                <Button
                                    variant={'outlined'}
                                    type={'submit'}
                                    size={'large'}
                                    fullWidth
                                    endIcon={<SendIcon>send</SendIcon>}
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                }
            </Formik>
        </Grid>
    );
}
