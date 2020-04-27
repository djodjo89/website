import Layout from '../components/layout';
import Head from 'next/head';
import MainTitle from '../components/maintitle';
import Pitch from '../components/pitch';
import Technologies from '../components/technologies';
import SocialNetworks from '../components/socialnetworks';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <Slide direction={'right'} in mountOnEnter>
                <Box>
                    <MainTitle />
                    <Pitch />
                    <Technologies />
                    <SocialNetworks />
                </Box>
            </Slide>
        </Layout>
    )
}
