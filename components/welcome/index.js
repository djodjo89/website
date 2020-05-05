import Grid from '@material-ui/core/Grid';
import H1 from '../h1';
import H2 from '../h2';
import React from 'react';

export default function Welcome() {
    return (
        <Grid id={'welcome'}
              item
              container
              spacing={5}
              style={{
                  flexDirection: 'column',
                  height: '100vh',
                  justifyContent: 'center',
                  paddingBottom: '20vh',
                  width: '100%',
              }}>
            <Grid item style={{ width: '100%' }}>
                <H1 style={{ textAlign: 'center' }}>
                    Welcome on my website !
                </H1>
            </Grid>
            {(() => [
                <>I'm <a href={'/#about'} style={{ textDecoration: 'none' }}>Mathys Simion</a></>,
                "Fullstack ReactJS & NodeJS developer",
            ].map((content, index) => <H2 key={index} style={{ textAlign: 'center' }}>{content}</H2>))()}
            <style global jsx>{`
                #welcome {
                        background-image: url('computer.svg');
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;
                        background-attachment: fixed;
                        height: 100%;
                        margin: 0 !important;
                }
            `}</style>
        </Grid>
    )
}
