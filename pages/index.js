import Layout from '../components/layout';
import React, { useEffect } from 'react';
import Welcome from '../components/welcome';
import About from '../components/about';
import Contact from '../components/contact';
import { useRouter } from 'next/router';

export default function Home({ isMobile }) {
    const path = useRouter().asPath;
    useEffect(() => {
        if (['/', '/#', '/#welcome'].includes(path)) {
            window.scrollTo(0,0);
        }
    }, []);

    return (
        <Layout title={'Mathys Simion'} spacing={5} isMobile={isMobile}>
            <Welcome/>
            <About isMobile={isMobile} />
            <Contact isMobile={isMobile} />
        </Layout>
    )
}


Home.getInitialProps = async ({ req }) => {
    let userAgent;
    if (req) { // if you are on the server and you get a 'req' property from your context
        userAgent = req.headers['user-agent'] // get the user-agent from the headers
    } else {
        userAgent = navigator.userAgent // if you are on the client you can access the navigator from the window object
    }

    let isMobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ));

    return { isMobile };
};
