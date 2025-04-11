import { Typography } from '@mui/material'
import type { BaseBlock } from '@/types/common'
import ButtonsWrapper from '@/components/Agentathon/ButtonsWrapper'
import css from './style.module.css'

const Prizes = ({ image, title, buttons, items }: BaseBlock) => (
  <section className={css.sectionContainer}>
    {items?.map(
      (item, index) =>
        item.image?.src && <img src={item.image.src} className={css.dots} alt={item.image.alt} key={index} />,
    )}

    {image && <img src={image.src} alt={image.alt} className={css.prizeAmount} />}

    <Typography variant="h2" className={css.title}>
      {title}
    </Typography>

    <div className={css.buttonsWrapper}>
      <ButtonsWrapper buttons={buttons} />
    </div>
  </section>
)

export default Prizes
