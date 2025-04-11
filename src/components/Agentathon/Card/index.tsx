import { Typography } from '@mui/material'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'
import type { BaseBlock } from '@/types/common'
import css from './style.module.css'

const Card = ({ item }: { item: Partial<BaseBlock> }) => (
  <a href={item.buttons?.[0]?.href} target="_blank" rel="noreferrer noopener" className={css.cardContainer}>
    <ArrowIcon className={css.icon} />

    {item.image?.src && <img src={item.image.src} alt={item.image.alt} className={css.image} />}

    <Typography variant="h5" className={css.title}>
      {item.title}
    </Typography>
  </a>
)

export default Card
