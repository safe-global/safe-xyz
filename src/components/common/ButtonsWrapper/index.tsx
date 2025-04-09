import LinkButton from '@/components/common/LinkButton'
import { Button } from '@mui/material'
import SafeLink from '@/components/common/SafeLink'
import type { Button as ButtonType } from '@/types/common'
import css from './styles.module.css'

type ButtonsWrapperProps = {
  buttons?: ButtonType[]
  mobileDirection?: 'column' | 'row'
  isDisabled?: boolean
}

const ButtonsWrapper = ({ buttons, mobileDirection }: ButtonsWrapperProps) => {
  if (!buttons || buttons.length === 0) return null

  return (
    <div className={`${css.wrapper} ${mobileDirection === 'row' && css.mobileRow}`}>
      {buttons.map((button, index) => {
        const { text, variant, href, color = 'primary' } = button
        const isButton = variant === 'button'

        return (
          <SafeLink key={index} href={href} isDisabled={!!button.isDisabled}>
            {isButton ? (
              <Button variant="contained" size="large" color={color}>
                {text}
              </Button>
            ) : (
              <LinkButton>{text}</LinkButton>
            )}
          </SafeLink>
        )
      })}
    </div>
  )
}

export default ButtonsWrapper
