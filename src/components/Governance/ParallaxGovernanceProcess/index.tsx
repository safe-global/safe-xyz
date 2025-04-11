import ParallaxGovernanceProcessElement from '@/components/Governance/ParallaxGovernanceProcess/ParallaxGovernanceProcessElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'

const ParallaxGovernanceProcess = (props: ParallaxTextProps) => (
  <ParallaxText {...props}>
    <ParallaxGovernanceProcessElement />
  </ParallaxText>
)

export default ParallaxGovernanceProcess
