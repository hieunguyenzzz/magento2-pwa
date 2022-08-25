const assetUrl = 'https://cdn.shopify.com/s/files/1/0648/7883/8019/files/'
export const Image = ({ src, ...rest }) => {
  const imgUrl = src.replace('/shop_images/', assetUrl)
  return <img {...rest} src={imgUrl} />
}
