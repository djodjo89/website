import React from 'react'
import Grid from '@material-ui/core/Grid'
import LazyAvatar from '../lazyavatar';

export default function Portrait() {
  return (
    <Grid item container direction={'row'} justify={'center'}>
      <Grid
        item
        container
        xs={8}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <LazyAvatar alt={'My photo'} src={'/nv_mathys_thumbnail.webp'} style={{
            width: '50%',
            height: '100%',
        }} />
      </Grid>
    </Grid>
  )
}
