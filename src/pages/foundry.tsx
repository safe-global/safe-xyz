import { NextPage } from 'next'
import MetaTags from '@/components/common/MetaTags'
import Foundry from '@/components/Foundry'

const FoundryPage: NextPage = () => (
  <>
    <MetaTags
      pageTitle="Safe{Foundry} - The Newest Smart Account experiments"
      description="Get to know the latest Safe POCs"
      image="../images/Foundry/meta-image.png"
    />
    <Foundry />
  </>
)

export default FoundryPage
