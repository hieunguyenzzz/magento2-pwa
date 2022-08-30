import settings_data from '../../localData/settings_data'

const data = settings_data.obj
const footerResult = {
  ...data.current.sections.footer,
  localeStores: data.localeStores,
  blocks: data.current.sections.footer.block_order.map((blockid) => {
    const block = data.current.sections.footer.blocks[blockid]
    return {
      ...block,
      menu: data.navigation.footer.items.find((item) => item.subject === block.settings.menu_item),
    }
  }),
}
export default footerResult
