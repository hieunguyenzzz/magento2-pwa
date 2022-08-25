import { Home } from '../components/home.server'

export default Home

export const getStaticProps = async ({ locale, params }) => ({
  props: {},
  revalidate: 60 * 20,
})
