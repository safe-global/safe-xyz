import type { ReactElement } from 'react'
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const Values = ({
  title,
  items,
}: {
  title: string
  items: { title: string; text: string; items: string[] }[]
}): ReactElement => {
  return (
    <Container>
      <Grid container className={`${layoutCss.containerShort} ${css.container}`}>
        <Typography variant="h2" className={css.title}>
          {title}
        </Typography>

        <div className={css.tree}>
          <hr className={css.rule} />
        </div>

        <Grid container size={{ xs: 12 }} gap={{ xs: '48px', md: 0 }}>
          {items.map(({ title, text, items }, index, arr) => (
            <Grid key={index} size={{ xs: 12, md: Math.floor(12 / arr.length) }} className={css.card}>
              <Typography className={css.value}>{title}</Typography>

              <Typography variant="caption" className={css.desc}>
                {text}
              </Typography>

              <List className={css.list}>
                {items.map((text, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <ArrowIcon className={css.icon} />
                    </ListItemIcon>

                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Values
