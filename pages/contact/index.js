import Layout from '../../components/layout';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import ContactDetails from '../../components/contactdetails';
import ContactForm from '../../components/form';

export default function Contact () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <Grid container spacing={4}>
                <ContactDetails />
                <ContactForm />
            </Grid>
        </Layout>
    );
}
