import ContactForm from '../../components/form';
import React from 'react';
import ContactHead from '../../components/contacthead';
import Grid from '@material-ui/core/Grid';

export default function Contact () {
    return (
        <Grid id={'contact'}>
            <Grid container spacing={2} direction={'column'} style={{
                maxWidth: '36rem',
                padding: '0 1rem',
                margin: '2rem auto 6rem',
            }}>
                <Grid item container spacing={2} style={{
                    paddingTop: '5em',
                    width: 'calc(100% + 9px)',
                }}
                >
                    <Grid item container spacing={2} style={{ height: '100vh', padding: '10px' }}>
                        <ContactHead />
                        <ContactForm />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
