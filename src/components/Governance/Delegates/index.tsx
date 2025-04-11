import React from 'react'
import { Avatar, Container, Grid, IconButton, SvgIcon, Typography } from '@mui/material'
import HeaderCTA from '@/components/common/HeaderCTA'
import { getDelegateImage } from '@/lib/getDelegateImage'
import { shortenAddress } from '@/lib/shortenAddress'
import delegatesData from '@/content/delegates.json'
import type { BaseBlock } from '@/types/common'
import XIcon from '@/public/images/x-icon.svg'
import DiscordIcon from '@/public/images/discord-icon.svg'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

type Delegate = {
  name: string
  address: string
  ens: string | null
  image: string
  reason: string
  contribution: string
} & {
  twitter?: string
  discord?: string
}

const DelegateCard = (props: Delegate) => (
  <div className={css.card}>
    <div className={css.cardHeader}>
      <Avatar className={css.avatar} src={getDelegateImage(props.address)}>
        &nbsp;
      </Avatar>

      <div>
        <Typography variant="h5" className={css.name}>
          {props.name}
        </Typography>

        <Typography color="primary.light">{props.ens || shortenAddress(props.address)}</Typography>
      </div>
    </div>

    <Typography className={css.description}>{props.reason}</Typography>

    <div className={css.socials}>
      {props.twitter && (
        <IconButton aria-label="Twitter link" href={props.twitter} target="_blank" rel="noreferrer" size="small">
          <SvgIcon component={XIcon} fontSize="inherit" color="inherit" inheritViewBox />
        </IconButton>
      )}

      {props.discord && (
        <IconButton aria-label="Discord link" href={props.discord} target="_blank" rel="noreferrer" size="small">
          <SvgIcon component={DiscordIcon} fontSize="inherit" color="inherit" inheritViewBox />
        </IconButton>
      )}
    </div>
  </div>
)

const Delegates = (props: BaseBlock & { footer: { text: string; highlight: string } }) => {
  return (
    <Container className={layoutCss.containerMedium}>
      <HeaderCTA {...props} />

      <Grid container className={css.cardGrid} spacing={{ xs: '16px', md: '30px', xl: '50px' }}>
        {delegatesData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <DelegateCard {...item} />
          </Grid>
        ))}
        <div className={css.gradient} />
      </Grid>

      <div className={css.footer}>
        <Typography color="primary.light" textAlign="center">
          {props.footer.text}

          <span>{props.footer.highlight}</span>
        </Typography>
      </div>
    </Container>
  )
}

export default Delegates
