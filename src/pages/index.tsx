import { Home } from '@/components/Home'
import { InferGetStaticPropsType, NextPage } from 'next'

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Home {...props} />
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

export default HomePage
