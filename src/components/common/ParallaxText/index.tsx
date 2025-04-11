import type { ReactNode } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock, BlockWithVariant } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type ParallaxTextProps = BaseBlock & BlockWithVariant

const ParallaxText = ({
  title,
  text,
  buttons,
  caption,
  variant,
  mobileVariant = 'image-text',
  children,
}: ParallaxTextProps & { children: ReactNode }) => (
  <Container>
    <Grid
      container
      className={`${layoutCss.containerMedium} ${
        variant === 'image-text' ? css.imageFirst : css.textFirst
      } ${mobileVariant === 'text-image' ? css.textFirstMobile : ''}`}
      spacing={{ xs: 6, md: '30px', xl: '50px' }}
      justifyContent="space-between"
    >
      <Grid
        size={{ xs: 12, md: 5 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={{ xs: 3, md: 4 }}
      >
        {caption && (
          <Typography variant="caption" component="div">
            {caption}
          </Typography>
        )}

        <Typography variant="h2">{title}</Typography>

        <Typography className={css.textBlock}>{text}</Typography>

        <ButtonsWrapper buttons={buttons} />
      </Grid>

      <Grid size={{ xs: 12, md: 1 }} display={{ xs: 'none', md: 'block' }} />

      <Grid size={{ xs: 12, md: 6 }} display="flex" alignItems="center">
        {children}
      </Grid>
    </Grid>
  </Container>
)

export default ParallaxText
