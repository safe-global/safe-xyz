import { Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/types/common'
import css from './style.module.css'

const Hero = ({ caption, title, text, buttons }: BaseBlock) => (
  <section className={css.sectionContainer}>
    <div className={css.blurredGradient}></div>

    <div className={css.videoWrapper}>
      <video autoPlay muted playsInline loop className={css.video}>
        <source src="./videos/Agentathon/hero.mp4" type="video/mp4" />
      </video>
    </div>

    <Typography className={css.caption}>{caption}</Typography>

    <Typography variant="h1" className={css.title}>
      {title}
    </Typography>

    <Typography variant="body1" className={css.text}>
      {text}
    </Typography>

    <ButtonsWrapper buttons={buttons} mobileDirection="row" />
  </section>
)

export default Hero
