import dynamic from 'next/dynamic'
import { Typography } from '@mui/material'
import type { BaseBlock } from '@/types/common'
import css from './style.module.css'

const LoopingImages = dynamic(() => import('../LoopingImages'), {
  ssr: false,
})

const Possibilities = ({ items, title }: BaseBlock) => (
  <section className={css.sectionContainer}>
    {items && <LoopingImages items={items} />}

    <Typography variant="h3" className={css.title}>
      {title}
    </Typography>
  </section>
)

export default Possibilities
