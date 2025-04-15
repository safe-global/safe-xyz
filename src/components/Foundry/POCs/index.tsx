import { Container, Grid, Typography } from '@mui/material'
import Card from '@/components/Foundry/POCs/Card'
import { BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const items: BaseBlock[] = [
  {
    caption: 'In collaboration with',
    title: 'L1 Keystore',
    text: 'Leveraging L1sload to build a unified multichain Keystore.',
    buttons: [
      {
        text: 'View GitHub',
        href: 'https://github.com/5afe/safe-labs-cross-chain/tree/main/packages/safe-scroll-keystore',
        variant: 'button',
      },
      {
        text: 'Share',
        href: `https://x.com/intent/tweet?text=Safe%20is%20experimenting%20to%20solve%20networks%20fragmentation.%20Here%27s%20the%20POC%20with%20Scroll%20-%20&url=https://github.com/5afe/safe-labs-cross-chain/tree/main/packages/safe-scroll-keystore`,
        variant: 'link',
      },
    ],
    image: {
      src: '../images/Foundry/Scroll-logo.png',
      alt: 'Scroll Logo',
    },
  },
  {
    caption: 'In collaboration with',
    title: 'Base MKSR (KeySpace)',
    text: (
      <>
        Integrating <a href="https://docs.key.space/">KeySpace</a> to Safe SmartAccount to provide a shared state to
        manage keys handled by <a href="https://hackmd.io/@mdehoog/mksr">MKSR (Minimum KeyStore Rollup)</a>.
      </>
    ),
    buttons: [
      {
        text: 'View GitHub',
        href: 'https://github.com/5afe/safe-labs-cross-chain/tree/main/packages/safe-keyspace',
        variant: 'button',
      },
      {
        text: 'Share',
        href: `https://x.com/intent/tweet?text=Safe%20is%20experimenting%20to%20solve%20networks%20fragmentation.%20Here's%20the%20POC%20with%20Base%20-%20&url=https://github.com/5afe/safe-labs-cross-chain/tree/main/packages/safe-keyspace`,
        variant: 'link',
      },
    ],
    image: {
      src: '../images/chainsLogos/BaseLogo.png',
      alt: 'Base Logo',
    },
  },
]

const POCs = () => (
  <Container className={`${layoutCss.containerShort} ${layoutCss.centeredContent}`}>
    <Typography variant="h2" className={css.title}>
      Discover new PoCs
    </Typography>

    <Typography className={css.text}>
      Safe is collaborating with top web3 teams like Coinbase, Scroll and more to build the future of smart accounts
    </Typography>

    <Grid container columnSpacing={2} rowGap="30px" className={css.gridContainer}>
      {items.map((item, index) => (
        <Grid key={index} size={{ xs: 12, md: 5 }}>
          <Card key={item.caption} {...item} />
        </Grid>
      ))}
    </Grid>

    <Typography className={css.caption}>More projects coming soon...</Typography>
  </Container>
)

export default POCs
