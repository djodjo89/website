import Layout from '../components/layout';
import Head from 'next/head';
import MainTitle from '../components/maintitle';
import Pitch from '../components/pitch';
import Technologies from '../components/technologies';
import SocialNetworks from '../components/socialnetworks';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <Fade timeout={500} direction={'right'} in mountOnEnter unmountOnExit>
                <Box>
                    <MainTitle />
                    <Pitch />
                    <Technologies />
                    <SocialNetworks />
                </Box>
            </Fade>
        </Layout>
    )
}
