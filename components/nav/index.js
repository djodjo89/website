import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';

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

const divContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
};

const pages = [
    { url: '/', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/contact', text: 'Contact' },
];

const appBarStyle = isMobile => {
    const style = { backgroundColor: '#0d0e0f' };
    const position = isMobile ? { bottom: 0, top: 'initial' } : { top: 0 };
    return Object.assign(style, position);
};

const icon = (url, text) => {
    switch (url) {
        case '/':
            return <HomeIcon />;
            break;
        case '/about':
            return <InfoIcon />;
            break;
        case '/contact':
            return <ContactMailIcon />;
            break;
        default:
            return (
                <Typography
                    type={'h6'}
                    style={{ color: 'white', fontWeight: 600 }}
                >
                    {text}
                </Typography>
            );
    }
};

export default function Nav({ isMobile }) {
    return (
        <AppBar position={isMobile ? 'fixed' : 'sticky'} style={appBarStyle(isMobile)}>
            <Toolbar style={{ padding: 0, height: 50 }}>
                <Grid item xs={12} sm={pages.length * 2} md={pages.length * 2} lg={pages.length} style={{ height: '100%' }}>
                    <List dense={true} style={flexContainer} width={1}>
                        {(() => pages.map(({ url, text }) => (
                            <li key={url} style={{ width: '100%' }}>
                            <Link key={url} href={`${url.substring(0,1)}${'/' === url ? '' : '#' }${url.substring(1, url.length)}`}>
                                <a style={linkContainer}>
                                    <ButtonBase style={fullSize} aria-label={text}>
                                        <div style={divContainer}>
                                            {
                                                isMobile
                                                    ? icon(url, text)
                                                    : <Typography
                                                        type={'h6'}
                                                        style={{ color: 'white', fontWeight: 600 }}
                                                    >
                                                        {text}
                                                    </Typography>
                                            }
                                        </div>
                                </ButtonBase>
                                </a>
                            </Link>
                            </li>
                        )))()}
                    </List>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
