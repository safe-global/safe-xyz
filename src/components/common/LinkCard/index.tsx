import type { DetailedHTMLProps, ImgHTMLAttributes, ReactElement } from 'react'
import { Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'
import css from './styles.module.css'

export type CardProps = {
  caption?: string
  title: string | ReactElement
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  link?: {
    href: string
    title?: string
  }
  icon?: React.ReactNode
  highlight?: boolean
}

const LinkCard = ({ caption, title, image, link, icon, highlight }: CardProps) => (
  <div className={`${css.card} ${highlight ? css.highlight : css.outline}`}>
    <div className={css.cardHeader}>
      {caption ? <Typography variant="caption">{caption}</Typography> : undefined}
      {image ? <img src={image.src || ''} alt={image.alt || 'card icon'} /> : (icon ?? undefined)}
    </div>

    <div className={css.cardBody}>
      <Typography variant="h4" className={css.title}>
        {title}
      </Typography>

      {link ? (
        <SafeLink href={link?.href}>
          <LinkButton underline={false} fullSize>
            {link.title}
          </LinkButton>
        </SafeLink>
      ) : undefined}
    </div>

    <ArrowIcon className={css.arrow} />
  </div>
)

export default LinkCard
