import Layout from '../../components/layout';
import Head from 'next/head';
import ContactForm from '../../components/form';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

export default function Contact () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <Fade timeout={500} in>
                <Grid>
                    <ContactForm />
                </Grid>
            </Fade>
        </Layout>
    );
}
