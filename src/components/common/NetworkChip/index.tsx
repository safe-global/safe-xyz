import { Box, Typography } from '@mui/material'
import type { ChainProps } from '@/components/common/Networks'
import css from './styles.module.css'

export type NetworkChipProps = {
  name: string
  icon: {
    src: string
    alt: string
  }
  isNew?: boolean
} & Pick<ChainProps, 'textColor' | 'backgroundColor'>

const NetworkChip = ({ name, icon, textColor, backgroundColor, isNew }: NetworkChipProps) => (
  <Box className={css.wrapper} sx={{ backgroundColor }}>
    <div className={css.icon}>
      <img {...icon} alt={icon.alt} width={40} height={40} />
    </div>

    <Typography className={css.name} color={textColor}>
      {name}
    </Typography>

    {isNew && <div className={css.newBadge}>New!</div>}
  </Box>
)

export default NetworkChip
