import type { ButtonProps } from '@mui/material'
import { ButtonBase } from '@mui/material'
import AngleIcon from '@/public/images/angle-icon.svg'
import css from './styles.module.css'

const LinkButton = ({
  children,
  underline = true,
  className,
  fullSize = false,
  ...props
}: ButtonProps & { underline?: boolean; fullSize?: boolean }) => {
  return (
    <ButtonBase
      className={`${css.linkButton} ${underline ? css.underline : ''} ${fullSize ? css.fullSize : ''} ${className || ''}`}
      {...props}
      disableRipple
    >
      {children}
      {children ? (
        <div className={css.arrow}>
          <AngleIcon />
        </div>
      ) : undefined}
    </ButtonBase>
  )
}

export default LinkButton
