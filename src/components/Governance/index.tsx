import type { InferGetStaticPropsType } from 'next'
import PageContent from '@/components/common/PageContent'
import VotingDelegationContext from '@/contexts/VotingDelegationContext'
import governanceContent from '@/content/governance.json'
import type { getStaticProps } from '@/pages/governance'

export const Governance = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <VotingDelegationContext.Provider value={props.votingDelegation}>
    <PageContent content={governanceContent} />
  </VotingDelegationContext.Provider>
)
