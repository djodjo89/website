import Typography from '@material-ui/core/Typography';

export default function H1({ style, children }) {
    return (
        <Typography type={'h1'} variant={'h3'} style={style}>
            {children}
        </Typography>
    )
}
