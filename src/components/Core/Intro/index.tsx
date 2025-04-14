import { Container, Grid, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/types/common'
import css from './styles.module.css'

const CoreIntro = ({ title, text, buttons }: BaseBlock) => (
  <Container>
    <Grid container className={css.container} rowSpacing={{ xs: 6 }} columnSpacing={{ md: '30px', xl: '50px' }}>
      <Grid size={{ md: 6 }} display="flex" justifyContent="center">
        <video autoPlay muted playsInline loop poster="/images/Core/intro-chip.png" className={css.video}>
          <source src="./videos/Core/intro-chip.webm" type="video/webm" />
          <source src="./videos/Core/intro-chip.hevc.mp4" type="video/mp4" />
          <img src="/images/Core/intro-chip.png" alt="Core Chip" />
        </video>
      </Grid>

      <Grid size={{ md: 6 }}>
        <Typography variant="h1" mb={4}>
          {title}
        </Typography>

        <Typography variant="h5" component="div" mb={5}>
          {text}
        </Typography>

        <ButtonsWrapper buttons={buttons} />
      </Grid>
    </Grid>
  </Container>
)

export default CoreIntro
