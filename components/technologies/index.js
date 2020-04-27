import Grid from '@material-ui/core/Grid';

export default function Technologies() {
    return (
        <Grid item>
            <h2>Technologies</h2>
            <ul>
                <li>React</li>
                <li>NodeJS</li>
            </ul>
            <style jsx>{`
                ul { 
                    list-style: none;
                    display: flex; 
                    justify-content: flex-start;
                }
                li { margin: 0 5% 0 0; }
            `}</style>
        </Grid>
    )
}
