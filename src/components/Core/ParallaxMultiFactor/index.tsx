import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'
import ParallaxMultiFactorElement from '@/components/Core/ParallaxMultiFactor/ParallaxMultiFactorElement'

const ParallaxMultiFactor = (props: ParallaxTextProps) => (
  <ParallaxText {...props}>
    <ParallaxMultiFactorElement />
  </ParallaxText>
)

export default ParallaxMultiFactor
