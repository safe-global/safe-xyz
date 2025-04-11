import ParallaxDaoStatsElement from '@/components/Governance/ParallaxDaoStats/ParallaxDaoStatsElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'

const ParallaxDaoStats = (props: ParallaxTextProps) => (
  <ParallaxText {...props}>
    <ParallaxDaoStatsElement items={props.items} />
  </ParallaxText>
)

export default ParallaxDaoStats
