import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function ContactDetails() {
    return (
        <Grid item>
            <Typography component={'h2'} variant={'h4'}>
                Contact details
            </Typography>
            <p>Phone +33651314088</p>
            <p>Email msimion.pro@gmail.com</p>
        </Grid>
    )
}
