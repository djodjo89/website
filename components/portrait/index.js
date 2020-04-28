import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

export default function Portrait() {
    return (
        <Grid
            item
            container
            xs={6}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
            <Avatar
                alt={'My photo'}
                src={'/nv_mathys_thumbnail.png'}
                style={{
                    width: '50%',
                    height: '100%',
                }}
            />
        </Grid>
    );
}
