import Layout from '../components/layout';
import Head from 'next/head';
import MainTitle from '../components/maintitle';
import Pitch from '../components/pitch';
import Technologies from '../components/technologies';
import SocialNetworks from '../components/socialnetworks';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <MainTitle />
            <Pitch />
            <Technologies />
            <SocialNetworks />
        </Layout>
    )
}
