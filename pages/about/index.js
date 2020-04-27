import Layout from '../../components/layout';
import MainTitle from '../../components/maintitle';
import Pitch from '../../components/pitch';
import Technologies from '../../components/technologies';
import SocialNetworks from '../../components/socialnetworks';

export default function About() {
    return (
        <Layout title={'About'} spacing={2}>
            <MainTitle />
            <Pitch />
            <Technologies />
            <SocialNetworks />
        </Layout>
    )
}
