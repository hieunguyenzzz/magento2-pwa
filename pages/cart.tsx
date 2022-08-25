type Props = Record<string, unknown>
type GetPageStaticProps = GetStaticProps<any, Props>

function CartPage() {
  return <>CART</>
}

export default CartPage

export const getStaticProps: GetPageStaticProps = async ({ locale }) => ({
  props: {},
})
