import Layout from '../../components/layout';
import Head from 'next/head';
import ContactForm from '../../components/form';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';

export default function Contact () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <Fade timeout={500} direction={'left'} in mountOnEnter unmountOnExit>
                <Box>
                    <ContactForm />
                </Box>
            </Fade>
        </Layout>
    );
}
