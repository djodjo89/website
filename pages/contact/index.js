import Layout from '../../components/layout';
import Head from 'next/head';
import ContactDetails from '../../components/contactdetails';
import Form from '../../components/form';

export default function Contact () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactDetails />
            <Form />
        </Layout>
    );
}
