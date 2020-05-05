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
                    <Grid container spacing={spacing} direction={'column'}>
                        {children}
                    </Grid>
            </Fade>
            <style global jsx>{`
                body {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
        </div>
    );
}
