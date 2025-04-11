import { Typography } from '@mui/material'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import LinkButton from '@/components/common/LinkButton'
import FrameImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/background.svg'
import type { BaseBlock } from '@/types/common'
import css from './styles.module.css'

const blockClassNames = ['stepZero', 'stepOne', 'stepTwo', 'stepThree', 'stepFour', 'stepFive', 'stepSix']
const depths = [0, 1] as const

const trailingShadow = (
  <>
    <div className={`${css.shadow} ${css.first}`} />
    <div className={`${css.shadow} ${css.second}`} />
  </>
)

const ParallaxUseCasesElement = ({ items }: { items: BaseBlock['items'] }) => (
  <div className={css.parallaxWrapper}>
    <FrameImage className={css.baseImage} />

    {items?.map(({ title, link }, index) => {
      const className = blockClassNames[index]
      const depth = depths[index % 2]

      return (
        <ParallaxWrapper translateX={0} translateY={0} depth={depth} direction={-1} key={index}>
          <div className={`${css.movingElement} ${css[className]}`}>
            <Typography>
              {link ? <LinkButton href={link.href} fullSize underline={false} /> : undefined}
              {title}
            </Typography>
            {trailingShadow}
          </div>
        </ParallaxWrapper>
      )
    })}
  </div>
)

export default ParallaxUseCasesElement
