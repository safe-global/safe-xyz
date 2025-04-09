import { Container, Grid, Typography } from '@mui/material'
import ItemGrid from '@/components/common/ItemGrid'
import LinkCard from '@/components/Home/LinkCard'
import { type BaseBlock } from '@/types/common'
import AngleBracketsIcon from '@/public/images/Home/angle-brackets-icon.svg'
import layoutCss from '@/components/common/styles.module.css'

type TextItemGridSpacedCardsProps = BaseBlock & { compactItems: BaseBlock['items'] }

const TextItemGridSpacedCards = ({ title, items, compactItems }: TextItemGridSpacedCardsProps) => (
  <Container className={layoutCss.containerMedium}>
    <Typography variant="h2" textAlign="center">
      {title}
    </Typography>

    <ItemGrid items={compactItems} icon={<AngleBracketsIcon />} />

    <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '80px' }}>
      {items?.map(({ caption, title, text = '', link }, index) => {
        if (!caption || !title || !link) return null

        return (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <LinkCard caption={caption} title={title} text={text} link={link} />
          </Grid>
        )
      })}
    </Grid>
  </Container>
)

export default TextItemGridSpacedCards
