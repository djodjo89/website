import Layout from '../../components/layout';
import ContactForm from '../../components/form';
import React from 'react';
import ContactHead from '../../components/contacthead';

export default function Contact () {
    return (
        <Layout title={'Contact'} spacing={2}>
            <ContactHead />
            <ContactForm />
        </Layout>
    );
}
