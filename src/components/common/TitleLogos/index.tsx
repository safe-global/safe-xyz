import Link from 'next/link'
import type { ReactElement } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'

const LogoImage = ({ image, link }: { image?: BaseBlock['image']; link?: BaseBlock['link'] }): ReactElement => {
  const imgProps = {
    ...image,
    style: { filter: 'brightness(0) invert(1)' },
  }

  if (link?.href) {
    return (
      <Link href={link.href} passHref target="_blank" rel="noreferrer">
        <img {...imgProps} alt={image?.alt} />
      </Link>
    )
  }

  return <img {...imgProps} alt={image?.alt} />
}

const TitleLogos = ({ title, items, hideMobile }: BaseBlock & { hideMobile?: boolean }): ReactElement => (
  <Container className={`${layoutCss.containerMedium} ${hideMobile ? layoutCss.hideMobile : ''}`}>
    <Typography variant="h2" mb={8} textAlign="center">
      {title}
    </Typography>

    <Grid container justifyContent="center">
      <Grid container size={{ md: 10 }} gap={{ xs: 3, md: 5, lg: 7 }} justifyContent="center" alignItems="center">
        {items?.map((item, index) => (
          <Grid key={index}>
            <LogoImage {...item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default TitleLogos
