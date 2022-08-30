import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { Home } from '../components'
import { graphqlSharedClient } from '../lib/graphql/graphqlSsrClient'

export default Home

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const client = graphqlSharedClient(locale)

  const conf = client.query({ query: StoreConfigDocument })

  return {
    props: {
      apolloState: await conf.then(() => client.cache.extract()),
    },
    revalidate: 60 * 20,
  }
}
