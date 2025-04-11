import { Typography } from '@mui/material'
import Card from '@/components/Agentathon/Card'
import type { BaseBlock } from '@/types/common'
import css from './style.module.css'

const LearnToUse = ({ title, caption, image, items }: BaseBlock) => (
  <section className={css.sectionContainer}>
    {image && <img src={image.src} alt={image.alt} className={css.image} />}

    <Typography variant="caption" className={css.caption}>
      {caption}
    </Typography>

    <Typography variant="h3" className={css.title} pb={5}>
      {title}
    </Typography>

    <div className={css.cardsContainer}>{items?.map((item, index) => <Card key={index} item={item} />)}</div>
  </section>
)

export default LearnToUse
