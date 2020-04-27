import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function ContactHead() {
    return (
        <Grid item>
            <Typography component={'h2'} variant={'h4'}>
                Contact me
            </Typography>
            <p>Phone : +33651314088</p>
            <p>Email : msimion.pro@gmail.com</p>
        </Grid>
    )
}
