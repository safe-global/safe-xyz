import OuterLayer from '@/public/images/Core/RadialAnimation/Planets/outer.svg'
import MiddleLayer from '@/public/images/Core/RadialAnimation/Planets/middle.svg'
import InnerLayer from '@/public/images/Core/RadialAnimation/center.svg'
import css from '@/components/Core/TextRadialAnimation/RadialAnimation/styles.module.css'

const RadialAnimation = () => (
  <div className={css.wrapper}>
    <OuterLayer className={css.outerLayer} />
    <MiddleLayer className={css.middleLayer} />
    <InnerLayer className={css.innerLayer} />
  </div>
)

export default RadialAnimation
