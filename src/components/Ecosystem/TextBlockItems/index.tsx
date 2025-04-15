import { Container, Grid, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import Cards from '@/components/Ecosystem/Cards'
import { type BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'

const TextBlockItems = ({ title, text, buttons, items }: BaseBlock) => (
  <Container>
    <Grid container className={layoutCss.containerTiny} spacing={{ xs: '30px', xl: '50px' }} mb={30}>
      <Grid size={{ md: 5 }}>
        <Typography variant="h2" mb={{ xs: 2, md: 4 }}>
          {title}
        </Typography>
        <Typography mb={5}>{text}</Typography>
        <ButtonsWrapper buttons={buttons} mobileDirection="row" />
      </Grid>

      <Grid size={{ md: 2 }} display={{ xs: 'none', md: 'block' }} />

      <Grid size={{ md: 5 }}>
        <Cards items={items} stacked />
      </Grid>
    </Grid>
  </Container>
)

export default TextBlockItems
