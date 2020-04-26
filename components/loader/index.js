import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const BlackCircularProgress = withStyles({
    root: {
        color: 'black',
    },
})(CircularProgress);

export default function Loader() {
    return (
        <Grid
            container
            justify={'center'}
            alignItems={'center'}
            className={'swal2-container swal2-backdrop-show'}
        >
            <Grid item>
                <BlackCircularProgress
                    size={80}
                />
            </Grid>
        </Grid>
    );
}
