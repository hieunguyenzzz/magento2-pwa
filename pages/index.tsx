import { Home } from '../components'
import { HomeDocument } from '../components/home.gql'
import { GlobalDocument } from '../graphql/Global.gql'
import { graphqlSharedClient, graphqlSsrClient } from '../lib/graphql/graphqlSsrClient'

export default Home

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const client = graphqlSharedClient(locale)
  const staticClient = graphqlSsrClient(locale)

  const global = client.query({ query: GlobalDocument })
  const homePage = staticClient.query({
    query: HomeDocument,
  })
  return {
    props: {
      home: (await homePage).data,
      apolloState: await global.then(() => client.cache.extract()),
    },
    revalidate: 60 * 20,
  }
}
