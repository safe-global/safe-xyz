import { Container, Grid, Typography } from '@mui/material'
import { IOS_LINK, GPLAY_LINK } from '@/config/constants'
import IOSDownload from '@/public/images/ios-download.svg'
import GPlayDownload from '@/public/images/google-play-download.svg'
import css from './styles.module.css'

const TextBlockBanner = () => (
  <div className={css.gradient}>
    <Container>
      <Grid container className={css.container}>
        <Grid size={{ md: 6 }} sx={{ textAlign: 'center' }} pt={12}>
          <Typography variant="h2" color="static.main" mb={3}>
            Use Safe <u>WALLET</u> anywhere
          </Typography>
          <Typography color="static.main" mb={5}>
            Access your assets anywhere without compromising on security with our flagship interfaces built on Safe Core
          </Typography>
        </Grid>

        <Grid size={{ md: 8 }}>
          <Grid container gap={2} justifyContent="center">
            <Grid>
              <a href={IOS_LINK} target="_blank" rel="noreferrer" aria-label="AppStore download">
                <IOSDownload />
              </a>
            </Grid>
            <Grid>
              <a href={GPLAY_LINK} target="_blank" rel="noreferrer" aria-label="Google Play download">
                <GPlayDownload />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div className={css.bg} />
    </Container>
  </div>
)

export default TextBlockBanner
