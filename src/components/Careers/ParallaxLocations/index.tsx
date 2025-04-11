import ParallaxLocationsElement from '@/components/Careers/ParallaxLocations/ParallaxLocationsElement'
import ParallaxTextCentered, { type ParallaxTextCenteredProps } from '@/components/Careers/ParallaxText'

const ParallaxLocations = (props: ParallaxTextCenteredProps) => (
  <ParallaxTextCentered {...props}>
    <ParallaxLocationsElement />
  </ParallaxTextCentered>
)

export default ParallaxLocations
