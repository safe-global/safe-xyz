import { Container, Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import RadialAnimation from './RadialAnimation'
import type { BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'

const TextRadialAnimation = ({ title, text, link }: BaseBlock) => (
  <Container>
    <Grid
      container
      className={layoutCss.containerShort}
      spacing={{ xs: 6, md: '30px', xl: '50px' }}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <RadialAnimation />
      </Grid>

      <Grid size={{ xs: 12, md: 1 }} display={{ xs: 'none', md: 'block' }} />

      <Grid size={{ xs: 12, md: 5 }}>
        <Typography variant="h2" mb={{ xs: 2, md: 4 }}>
          {title}
        </Typography>

        <Typography mb={{ xs: 3, md: 5 }}>{text}</Typography>

        {link && (
          <SafeLink href={link.href}>
            <LinkButton>{link.title}</LinkButton>
          </SafeLink>
        )}
      </Grid>
    </Grid>
  </Container>
)

export default TextRadialAnimation
