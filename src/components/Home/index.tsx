import { InferGetStaticPropsType } from 'next'
import homeContent from '@/content/home.json'
import PageContent from '../common/PageContent'
import ChainsContext from '@/contexts/ChainsContext'
import SafeStatsContext from '@/contexts/SafeStatsContext'
import { getStaticProps } from '@/pages'

export const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <SafeStatsContext.Provider value={props.safeStatsData}>
    <ChainsContext.Provider value={props.chainsData}>
      <PageContent content={homeContent} />
    </ChainsContext.Provider>
  </SafeStatsContext.Provider>
)
