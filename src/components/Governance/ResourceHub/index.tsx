import { Container, Grid } from '@mui/material'
import HeaderCTA from '@/components/common/HeaderCTA'
import { GridItem } from '@/components/common/TitleItemGrid'
import type { BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const ResourceHub = ({ items, ...props }: BaseBlock) => (
  <Container className={layoutCss.containerShort}>
    <HeaderCTA {...props} />

    <Grid container className={css.gridContainer}>
      {items?.map((item, index) => <GridItem key={index} width={4} {...item} />)}
    </Grid>
  </Container>
)

export default ResourceHub
