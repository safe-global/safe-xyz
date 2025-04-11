import { Container, Divider, Grid, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/types/common'
import css from './styles.module.css'

const Intro = ({ title, buttons, image }: BaseBlock) => (
  <Container>
    <Grid container className={css.container} spacing={{ xs: 6, md: 1, xl: '50px' }}>
      <Grid size={{ md: 7 }}>
        <Typography variant="h1" mb={5}>
          {title}
        </Typography>
        <ButtonsWrapper buttons={buttons} />
      </Grid>

      <Grid size={{ md: 5 }} className={css.imageContainer}>
        <div className={css.imageWrapper}>
          <img {...image} />
        </div>
      </Grid>
    </Grid>
    <Divider />
  </Container>
)

export default Intro
