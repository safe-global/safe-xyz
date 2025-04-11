import { Typography } from '@mui/material'
import ButtonsWrapper from '@/components/Agentathon/ButtonsWrapper'
import type { BaseBlock } from '@/types/common'
import css from './style.module.css'

const BestAgents = ({ caption, items, buttons }: BaseBlock) => (
  <section className={css.sectionContainer}>
    <Typography variant="caption" className={css.caption}>
      {caption}
    </Typography>

    <div className={css.itemsWrapper}>
      {items?.map((item, index) => (
        <a
          href={item.buttons?.[0]?.href}
          target="_blank"
          rel="noreferrer noopener"
          className={css.itemWrapper}
          key={index}
        >
          {item.image?.src && <img src={item.image.src} className={css.itemImage} alt={item.image.alt} />}
          <Typography variant="body1" className={css.itemTitle}>
            {item.title}
          </Typography>
        </a>
      ))}
    </div>

    <ButtonsWrapper buttons={buttons} mobileDirection="row" />
  </section>
)

export default BestAgents
