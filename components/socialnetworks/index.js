import Grid from '@material-ui/core/Grid';

export default function SocialNetworks() {
    return (
        <Grid item>
            <h2>Social networks</h2>
            <ul>
                <li>
                    <a href={'https://www.linkedin.com/in/mathys-simion/'}>
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href={'https://github.com/djodjo89'}>
                        Github
                    </a>
                </li>
            </ul>
            <style jsx>{`
                ul { 
                    list-style: none;
                    display: flex; 
                    justify-content: flex-start;
                }
                li { margin: 0 5% 0 0; }
                a { text-decoration: none; }
            `}</style>
        </Grid>
    )
}
