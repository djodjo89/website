import ContactForm from '../../components/form';
import React from 'react';
import ContactHead from '../../components/contacthead';
import Grid from '@material-ui/core/Grid';
import { isBrowser } from "react-device-detect";

export default function Contact () {
    return (
        <Grid id={'contact'}>
            <Grid container direction={'column'} style={{
                maxWidth: '36rem',
                padding: '0 1rem',
                margin: '2rem auto 6rem',
                height: '100vh',
            }}>
                <Grid item container style={{
                    paddingTop: isBrowser ? '5em !important' : 0,
                    width: 'calc(100% + 9px)',
                }}
                >
                    <Grid item container style={{ padding: '10px' }}>
                        <ContactHead />
                        <ContactForm />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
