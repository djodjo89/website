import React from 'react';
import Grid from '@material-ui/core/Grid';
import H2 from '../h2';

export default function Pitch() {
    return (
        <Grid item>
            <H2>
                What can I bring to you ?
            </H2>
            <p>
                As a Fullstack web developer, I can realize multiple missions for you, going from little components to
                add to your website to entire website conception and development.
            </p>
            <p>
                I'm specialized in Javascript-related technologies. I know the most ReactJS and NodeJS, and some frameworks
                made above them like Next.JS, Material-ui or NestJS. With them I can make websites from scratch in a few
                weeks for a good value.
            </p>

            <H2>
                Who am I ?
            </H2>
            <p>
                My name is Mathys SIMION. I'm an 18 years old second
                year of graduate study French IT student. I currently work as a co-op student at&nbsp;
                <a href={'https://www.lafourche.fr'}>La Fourche</a>, an ecommerce platform that sells
                organic products with a subscription system.
            </p>
            <p>
                I aim at becoming an AI (Artificial Intelligence) researcher because AI is the
                domain that fascinates me the most. I'm impressed to see machines able to think and
                to act as humans, or even better. I would like to know how it works and even better,
                participate in this great adventure of pushing the frontier of what Humanity is able
                to make.
            </p>
            <p>
                Thanks to the university, my apprenticeship and my personal work, I've managed to
                acquire very interesting skills in software and web development. To finance my
                studies (and have fun working on new projects :) I want to develop a freelance
                activity alongside them.
            </p>
        </Grid>
    )
}
