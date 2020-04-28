import H2 from '../h2';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function CustomList({ title, items }) {
    return (
        <Grid
            item
            container
            direction={'column'}
            justify={'flex-start'}
            xs={12}
            sm={6}
        >
            <H2 style={{ textAlign: 'center' }}>{title}</H2>
            <Box>
                <Grid item>
                    <List style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                    >
                        {(() => items.map(item =>
                            <Grid xs={3}>
                                <ListItem style={{ justifyContent: 'center' }}>{item}</ListItem>
                            </Grid>
                        ))()}
                    </List>
                </Grid>
            </Box>
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
