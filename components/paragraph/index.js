import H2 from '../h2';
import Grid from '@material-ui/core/Grid';

export default function Paragrah({ title, children }) {
    return (
        <Grid item container>
            <H2>{title}</H2>
            <p>{children}</p>
        </Grid>
    )
}
