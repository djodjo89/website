import Nav from '../nav';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import React from 'react';

export default function Layout({ spacing, title, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Nav/>
            <Fade timeout={500} in>
                <div className={'container'}>
                    <Grid container spacing={spacing} direction={'column'}>
                        {children}
                    </Grid>
                </div>
            </Fade>
            <style jsx>{`
                .container {
                    max-width: 36rem;
                    padding: 0 1rem;
                    margin: 2rem auto 6rem;
                }
            `}</style>
            <style global jsx>{`
                body {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
        </div>
    );
}
