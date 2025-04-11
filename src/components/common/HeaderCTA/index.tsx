import { Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import type { BaseBlock } from '@/types/common'
import css from './styles.module.css'

type HeaderCTAProps = BaseBlock & {
  bigTitle?: boolean
  onClick?: () => void
}

const HeaderCTA = (props: HeaderCTAProps) => (
  <Grid container mb={{ xs: 5, md: 7 }}>
    <Grid size={{ xs: 12, md: !props.bigTitle ? 8 : undefined }}>
      <Typography variant="h2" mb={3} className={`${props.bigTitle ? css.bigTitle : null}`}>
        {props.title}
      </Typography>

      <Typography color="primary.light">{props.text}</Typography>
    </Grid>

    {props.link && (
      <Grid size={{ xs: 12, md: 4 }} className={`${css.linkButton} ${!props.bigTitle && css.alignEnd}`}>
        <SafeLink href={props.link.href}>
          <LinkButton className={css.shortPadding} onClick={props.onClick}>
            {props.link.title}
          </LinkButton>
        </SafeLink>
      </Grid>
    )}
  </Grid>
)

export default HeaderCTA
