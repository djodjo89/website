import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function H2({ style, children }) {
    return(
        <Typography component={'h2'} variant={'h5'} style={style}>
            {children}
        </Typography>
    )
}
