import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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

export default function Nav() {
    return (
        <AppBar position={'sticky'} style={{ backgroundColor: 'black' }}>
            <Toolbar style={{ padding: 0 }} container>
                <Grid item xs={12} sm={3} md={2} style={{ height: '100%' }}>
                    <List dense={true} style={flexContainer} width={1}>
                        {(() => [
                            { url: '/', text: 'Home' },
                            { url: '/contact', text: 'Contact' },
                        ].map(({ url, text }) => (
                            <ListItem key={url} style={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
                                <ButtonBase style={fullSize}>
                                    <Link href={url}>
                                        <a style={linkContainer}>
                                            <Typography
                                                type={'h6'}
                                                style={{ color: 'white', fontWeight: 600 }}
                                            >
                                                {text}
                                            </Typography>
                                        </a>
                                    </Link>
                                </ButtonBase>
                            </ListItem>
                        )))()}
                    </List>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
