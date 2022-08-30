import settings_data from '../../localData/settings_data'

const data = settings_data.obj
const headerResult = {
  ...data.current.sections.header,
  localeStores: data.localeStores,
  blocks: data.current.sections.header.block_order.map((blockid) => {
    const block = data.current.sections.header.blocks[blockid]
    return {
      ...block,
      menu: data.navigation.menu.items.find((item) => item.subject === block.settings.menu_item),
    }
  }),
}
export default headerResult
