import { Button, Container, Typography } from '@mui/material'
import css from './styles.module.css'

const Hero = () => (
  <div className={css.bg}>
    <div className={css.gradientHorizontal}>
      <div className={css.spot1} />
      <div className={css.spot2} />

      {/* Networks image does not show in smaller resolutions */}
      <div className={css.image}>
        <Container className={css.container}>
          <img src="../images/Foundry/safe-foundry-logo.png" alt="Safe Foundry logo" className={css.logo} />

          <div className={css.textBlock}>
            <Typography variant="h1" className={css.title}>
              Open-source <b>Chain Abstraction</b> Research
            </Typography>

            <Typography className={css.text}>
              Discover new experiments in solving UX challenges with the power of modular smart accounts.
            </Typography>

            <div className={css.buttons}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="https://docs.safe.global/home/what-is-safe"
              >
                Build with Safe
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
)

export default Hero
