import Layout from '../components/layout';
import Head from 'next/head';
import MainTitle from '../components/maintitle';
import Pitch from '../components/pitch';
import Technologies from '../components/technologies';
import SocialNetworks from '../components/socialnetworks';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <Fade timeout={500} in>
                <Grid>
                    <MainTitle />
                    <Pitch />
                    <Technologies />
                    <SocialNetworks />
                </Grid>
            </Fade>
        </Layout>
    )
}
