import type { ReactElement } from 'react'
import Link from 'next/link'
import { Container, Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import type { GridSize } from '@mui/material'
import type { BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const GridItem = ({
  image,
  caption,
  title,
  text,
  link,
  width = 4,
}: Partial<BaseBlock> & { width: GridSize }): ReactElement => (
  <Grid size={{ xs: 12, md: width }} className={css.gridItems}>
    <div>
      {image ? <img {...image} alt={image.alt} /> : null}

      <Typography variant="caption" mt={2} color="text.primary" component="div">
        {caption}
      </Typography>

      <Typography variant="h5" className={css.title}>
        {title}
      </Typography>

      <Typography color="primary.light">{text}</Typography>
    </div>

    {link && (
      <Link href={link.href}>
        <LinkButton>{link.title}</LinkButton>
      </Link>
    )}
  </Grid>
)

// TODO: unify the ItemGrid and accept a GridItem component
const TitleItemGrid = ({ variant, title, text, items }: BaseBlock & { variant: '3-columns' | '4-columns' }) => (
  <Container>
    <Grid container className={layoutCss.containerShort} flexDirection="column" alignItems="center">
      <Typography variant="h2" mb={3} textAlign={{ md: 'center' }}>
        {title}
      </Typography>

      {text && <Typography>{text}</Typography>}

      <Grid container className={css.roundCorners} mt={{ xs: 3, md: 7 }}>
        {items?.map((item, index) => <GridItem key={index} width={variant === '3-columns' ? 4 : 3} {...item} />)}
      </Grid>
    </Grid>
  </Container>
)

export default TitleItemGrid
