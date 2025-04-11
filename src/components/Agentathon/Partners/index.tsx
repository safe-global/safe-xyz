import { Typography } from '@mui/material'
import type { BaseBlock } from '@/types/common'
import css from './style.module.css'

const Partners = ({ caption, items }: BaseBlock) => (
  <section className={css.sectionContainer}>
    <Typography className={css.caption}>{caption}</Typography>
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
  </section>
)

export default Partners
