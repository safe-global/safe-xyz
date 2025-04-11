import ParallaxUseCasesElement from '@/components/Core/ParallaxCaseStudies/ParallaxUseCasesElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'

const ParallaxCaseStudies = (props: ParallaxTextProps) => (
  <ParallaxText {...props} variant="image-text">
    {props.items ? <ParallaxUseCasesElement items={props.items} /> : null}
  </ParallaxText>
)

export default ParallaxCaseStudies
