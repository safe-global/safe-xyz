import { Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import GithubIcon from '@/public/images/github-icon.svg'
import { BaseBlock } from '@/types/common'
import css from './styles.module.css'

const Card = ({ caption, title, text, image, buttons }: BaseBlock) => (
  <div className={css.card}>
    <div className={css.cardHeader}>
      <Typography variant="h4">{title}</Typography>

      <GithubIcon />
    </div>

    <div className={css.cardBody}>
      <Typography>{text}</Typography>

      <div className={css.extraText}>
        <Typography color="primary.light">{caption}</Typography>

        <div className={css.partner}>
          <img src={image?.src} alt={image?.alt} />
          <span>{image?.alt.split(' ')[0]}</span>
        </div>
      </div>

      <div className={css.buttons}>
        <ButtonsWrapper buttons={buttons} />
      </div>
    </div>
  </div>
)

export default Card
