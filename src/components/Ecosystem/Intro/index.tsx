import { Container, Grid, Typography } from '@mui/material'
import BackgroundParticles from '@/public/images/Ecosystem/particle-bg.svg'
import type { BaseBlock } from '@/types/common'
import css from './styles.module.css'

const EcosystemIntro = ({ title, text }: BaseBlock) => (
  <Container>
    <BackgroundParticles className={css.bg} />

    <Grid container className={css.container} spacing={{ xs: 6, md: '30px', xl: '50px' }}>
      <Grid size={{ md: 8 }}>
        <Typography variant="h1" mb={4}>
          {title}
        </Typography>

        <Typography variant="h5" component="div" mb={5}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  </Container>
)

export default EcosystemIntro
