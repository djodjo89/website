import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import { isBrowser } from 'react-device-detect';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

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

const state = {};

export default function Nav() {
    return (
        <>
            {
                isBrowser
                    ? <AppBar position={'sticky'} style={{ backgroundColor: 'black' }}>
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
                    : <BottomNavigation
                        style={{
                            opacity: 1,
                            flexDirection: 'row',
                            paddingTop: '.5em',
                            position: 'fixed',
                            width: '100%',
                            backgroundColor: 'black',
                            top: '90%',
                            height: '10%',
                            zIndex: 1,
                        }}
                        value={state.page}
                        showLabels
                        onChange={(event, newValue) => {
                            console.log('Target', event.target);
                            console.log('Value', newValue);
                            window.location = `${newValue.substring(0,1)}#${newValue.substring(1, newValue.length)}`;
                        }}
                    >
                        {(() => pages.map(({ url }) => {
                            console.log('Url', url);
                            const label = `${url.charAt(1).toUpperCase()}${url.substring(2,url.length)}`;
                            let icon;
                            const style = { color: 'white', backgroundColor: 'black' };

                            switch (url) {
                                case '/':
                                    icon = <HomeIcon style={style} />;
                                    break;
                                case '/about':
                                    icon = <InfoIcon style={style} />;
                                    break;
                                case '/contact':
                                    icon = <ContactMailIcon style={style} />;
                                    break;
                                default:
                                    icon = <HomeIcon style={style} />;
                                    break;
                            }

                            return (
                                <BottomNavigationAction
                                    key={url}
                                    label={label}
                                    value={url}
                                    icon={icon}
                                />
                            );
                        }))()}
                    </BottomNavigation>
            }
        </>
    )
}
