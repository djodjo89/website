import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export default function H2({ style, children }) {
    return(
        <Grid item>
            <Typography component={'h2'} variant={'h5'} style={style}>
                {children}
            </Typography>
        </Grid>
    )
}
