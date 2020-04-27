import Layout from '../../components/layout';
import Head from 'next/head';
import ContactForm from '../../components/form';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';

export default function Contact () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <Slide direction={'left'} in mountOnEnter>
                <Box>
                    <ContactForm />
                </Box>
            </Slide>
        </Layout>
    );
}
