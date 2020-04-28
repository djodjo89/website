import Layout from '../components/layout';
import H1 from '../components/h1';
import H2 from '../components/h2';
import Grid from '@material-ui/core/Grid';

export default function Home() {
    return (
        <Layout title={'Home'} spacing={5}>
            <Grid item style={{ width: '100%' }}>
                <H1 style={{ textAlign: 'center' }}>
                    Welcome on my website !
                </H1>
            </Grid>
            {(() => [
                <>I'm <a href={'/about'} style={{ textDecoration: 'none' }}>Mathys Simion</a></>,
                "Fullstack ReactJS & NodeJS developer",
            ].map(content => <H2 style={{ textAlign: 'center' }}>{content}</H2>))()}
        </Layout>
    )
}
