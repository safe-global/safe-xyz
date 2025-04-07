import { Grid, Typography } from '@mui/material'
import css from '@/components/Home/HeroVideo/styles.module.css'
import type { BaseBlock } from '@/types/common'
import { useEffect, useRef, useState } from 'react'

const HeroVideo = ({ title, text }: BaseBlock) => {
  const [ready, setReady] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const poll = setInterval(() => {
      if (!videoRef.current) return
      if (videoRef.current.readyState >= videoRef.current.HAVE_FUTURE_DATA) {
        setReady(true)
        clearInterval(poll)
      }
    }, 100)

    return () => clearInterval(poll)
  }, [])

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <video
            autoPlay
            muted
            playsInline
            loop
            ref={videoRef}
            style={{ opacity: 0 }}
            className={`${css.video} ${ready ? css.ready : ''}`}
          >
            <source src="/videos/Home/safe-2024-hero-vp9.webm" type="video/webm" />
            <source src="/videos/Home/safe-2024-hero-hevc.mov" type="video/quicktime; codecs=hvc1" />
          </video>
        </div>

        <Grid container className={css.content} width="100%" height="100%">
          <Grid>
            <Typography variant="h1" className={css.title}>
              {title}
            </Typography>
            <Typography variant="h1" className={css.title} color="primary.main">
              {text}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="caption" className={css.scroll}>
          Scroll
        </Typography>
      </div>
    </div>
  )
}

export default HeroVideo
