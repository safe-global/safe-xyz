import { Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const BannerGradientImage = ({ title, buttons, caption, text, image }: BaseBlock) => (
  <Container className={layoutCss.containerMedium}>
    <div className={css.container}>
      <Grid container>
        <Grid size={{ xs: 12, md: 8 }}>
          <Chip label={<Typography variant="caption">{caption}</Typography>} className={css.chip} variant="outlined" />

          <Typography variant="h2" mt={2} mb={3}>
            {title}
          </Typography>

          <Typography mb={5}>{text}</Typography>

          <ButtonsWrapper buttons={buttons} />
        </Grid>

        {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
      </Grid>
    </div>
  </Container>
)

export default BannerGradientImage
