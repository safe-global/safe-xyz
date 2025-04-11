import NextLink from 'next/link'
import { Container, Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import GradientChip from '@/components/Safenet/GradientChip'
import { AppRoutes } from '@/config/routes'
import type { BaseBlock } from '@/types/common'
import css from './styles.module.css'

const items: BaseBlock['items'] = [
  {
    image: {
      src: '/images/Safenet/CrossChain/arrows.png',
      alt: 'Forward arrows',
    },
    title: (
      <>
        Instant
        <br />
        Transactions
      </>
    ),
    text: 'Get your transactions executed within 500ms, without cross-chain latency',
    caption: 'Speed',
  },
  {
    image: {
      src: '/images/Safenet/CrossChain/padlock.png',
      alt: 'Verified padlock',
    },
    title: (
      <>
        Execution <br />
        guarantees
      </>
    ),
    text: 'Set custom policies and security checks ',
    caption: 'Security',
  },
  {
    image: {
      src: '/images/Safenet/CrossChain/blobs.png',
      alt: 'Unified blobs',
    },
    title: (
      <>
        Unified <br />
        Balances
      </>
    ),
    text: 'Spend from a single balance across all chains and offchain',
    caption: 'Scale',
  },
]

const BLOG_LINK = `${AppRoutes.blog.index}/introducing-safenet`

const CrossChain = () => (
  <div className={css.anchor}>
    <div className={css.upperArc} />

    <Container className={css.container}>
      <div className={css.contentWrapper}>
        <GradientChip caption="Cross-chain accounts" />

        <Typography className={css.title}>
          Access your assets <br />
          <span className={css.titleGradient}>on any network</span>!
        </Typography>

        <Typography className={css.text}>
          Cross-chain interactions are simplified. Say goodbye to gas fee hassles and enjoy a seamless, stress-free
          experience.
        </Typography>
      </div>

      <div className={css.blocksStack}>
        {items.map((item, index) => (
          <div className={`${css[`block${index + 1}`]} ${css.blockItem}`} key={index}>
            {item.image ? <img src={item.image.src} alt={item.image.alt} className={css.blockImage} /> : null}
            <Typography className={css.blockCaption}>{item.caption}</Typography>
            <Typography className={css.blockTitle}>{item.title}</Typography>
            <Typography className={css.blockText}>{item.text}</Typography>
          </div>
        ))}
      </div>

      <div className={css.blocksWrapper}>
        <Grid container className={css.gridContainer}>
          {items.map((item, index) => (
            <Grid size={{ md: 4 }} className={css.blockItem} key={index}>
              {item.image ? <img src={item.image.src} alt={item.image.alt} className={css.blockImage} /> : null}
              <Typography className={css.blockCaption}>{item.caption}</Typography>
              <Typography className={css.blockTitle}>{item.title}</Typography>
              <Typography className={css.blockText}>{item.text}</Typography>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={css.buttonWrapper}>
        <NextLink href={BLOG_LINK} target="_blank">
          <LinkButton>Safenet Vision</LinkButton>
        </NextLink>
      </div>
    </Container>
  </div>
)

export default CrossChain
