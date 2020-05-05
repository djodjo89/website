import React from 'react';
import Grid from '@material-ui/core/Grid';
import Portrait from '../../components/portrait';
import Technologies from '../../components/technologies';
import SocialNetworks from '../../components/socialnetworks';
import H1 from '../../components/h1';
import Layout from '../../components/layout';
import Paragrah from '../../components/paragraph';
import Welcome from '../welcome';
import Fade from '@material-ui/core/Fade';

export default function About() {
    return (
        <Grid id={'about'} style={{ backgroundColor: 'rgba(0,0,0,.2)' }}>
            <Grid container spacing={2} direction={'column'} style={{
                maxWidth: '36rem',
                padding: '0 1rem',
                margin: '2rem auto 6rem',
            }}>
                <Grid item container spacing={2} style={{
                    paddingTop: '5em !important',
                    width: 'calc(100% + 9px)',
                    padding: '10px',
                }}
                >
                    <H1>About me</H1>
                    <Paragrah title={'What I can do for you'}>
                        As a Fullstack web developer, I can carry out various kinds of projects for you,
                        going from adding little components to your web application to code your entire
                        website.
                    </Paragrah>
                    <Paragrah title={'My Skills'}>
                        I'm specialized in ReactJS and NodeJS, and some frameworks made on top of them
                        like Next.JS, Material-ui or NestJS. With them I can make websites from scratch
                        quickly.
                    </Paragrah>

                    <Grid item container spacing={2}>
                        <Technologies />
                        <SocialNetworks />
                    </Grid>

                    <Portrait />

                    <Paragrah title={'Who I am'}>
                        My name is Mathys SIMION. I'm an 18 years old second
                        year of graduate IT student. I currently work as a co-op student at&nbsp;
                        <a href={'https://www.lafourche.fr'} style={{ textDecoration: 'none' }}>La Fourche</a>, an ecommerce platform that sells
                        organic products.
                    </Paragrah>
                    <Paragrah title={'My goals'}>
                        I aim at becoming an AI (Artificial Intelligence) researcher because AI is the
                        domain that fascinates me the most. I'm impressed to see machines able to think and
                        to act as humans, or even better. I would like to know how it works and
                        get involved in this great adventure of pushing the frontier of what Humanity is able
                        to do.
                    </Paragrah>
                    <Paragrah title={'Why I work as a freelance'}>
                        Thanks to the university, my apprenticeship and my personal work, I've managed to
                        acquire very interesting skills in software and web development. To finance my
                        studies (and have fun working on new projects : ) I want to develop a freelance
                        activity alongside them.
                    </Paragrah>
                </Grid>
            </Grid>
        </Grid>
    )
}
