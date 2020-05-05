import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const flexContainer =  {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    height: '100%',
};

const fullSize = {
    width: '100%',
    height: '100%',
    padding: 0,
};

const linkContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
};

const pages = [
    { url: '/', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/contact', text: 'Contact' },
];

export default function Nav() {
    return (
        <AppBar position={'sticky'} style={{ backgroundColor: 'black' }}>
            <Toolbar style={{ padding: 0, height: 50 }}>
                <Grid item xs={12} sm={pages.length * 2} md={pages.length * 2} lg={pages.length} style={{ height: '100%' }}>
                    <List dense={true} style={flexContainer} width={1}>
                        {(() => pages.map(({ url, text }) => (
                            <Link key={url} href={`${url.substring(0,1)}#${url.substring(1, url.length)}`}>
                                <ButtonBase style={fullSize}>
                                    <a style={linkContainer}>
                                            <Typography
                                                type={'h6'}
                                                style={{ color: 'white', fontWeight: 600 }}
                                            >
                                                {text}
                                            </Typography>
                                    </a>
                                </ButtonBase>
                            </Link>
                        )))()}
                    </List>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
