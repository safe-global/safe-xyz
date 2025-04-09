import { InferGetStaticPropsType, NextPage } from 'next'
import { Home } from '@/components/Home'
import { fetchTotalBalanceUsd } from '@/lib/fetchTotalBalanceUsd'
import { fetchTotalSafesDeployed } from '@/lib/fetchTotalSafesDeployed'
import { fetchTotalTransactions } from '@/lib/fetchTotalTransactions'
import { loadChainsData } from '@/lib/loadChainsData'

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Home {...props} />
}

export async function getStaticProps() {
  const [chainsData, totalTransactions, totalBalanceUsd, totalSafesDeployed] = await Promise.all([
    loadChainsData(),
    fetchTotalTransactions(),
    fetchTotalBalanceUsd(),
    fetchTotalSafesDeployed(),
  ])

  return {
    props: {
      chainsData,
      safeStatsData: {
        totalTransactions,
        totalBalanceUsd,
        totalSafesDeployed,
      },
    },
  }
}

export default HomePage
