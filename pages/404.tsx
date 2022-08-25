type GetPageStaticProps = any

function RouteNotFoundPage() {
  return <>404</>
}

export default RouteNotFoundPage

export const getStaticProps: GetPageStaticProps = async ({ locale }) => ({
  props: {
    up: { href: '/', title: 'Home' },
  },
  revalidate: 60 * 20,
})
