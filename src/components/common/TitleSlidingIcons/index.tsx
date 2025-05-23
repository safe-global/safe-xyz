import { Typography } from '@mui/material'
import IconCarouselElement, { type Carousel } from './IconCarouselElement'
import { type BaseBlock } from '@/types/common'

const TitleSlidingIcons = ({ title, text, icons, reverse = false }: BaseBlock & Carousel) => (
  <>
    <Typography variant="h3" textAlign="center">
      {title}
    </Typography>

    {text && (
      <Typography color="primary.light" textAlign="center" marginTop={4}>
        {text}
      </Typography>
    )}

    <IconCarouselElement icons={icons} reverse={reverse} />
  </>
)

export default TitleSlidingIcons
