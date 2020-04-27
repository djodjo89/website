import Layout from '../../components/layout';
import Head from 'next/head';
import ContactForm from '../../components/form';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import ContactHead from '../../components/contacthead';

export default function Contact () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <Fade timeout={500} in>
                <Grid container spacing={2}>
                    <ContactHead />
                    <ContactForm />
                </Grid>
            </Fade>
        </Layout>
    );
}
