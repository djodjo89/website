import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function H1({ style, children }) {
    return (
        <Grid item>
            <Typography type={'h1'} variant={'h3'} style={style}>
                {children}
            </Typography>
        </Grid>
    )
}
