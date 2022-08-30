import settings_data from '../localData/settings_data'

const data = settings_data.obj
const homeResult = {
  blocks: data.current.content_for_index.map((secctionId) => {
    const block = data.current.sections[secctionId]
    return {
      ...block,
      menu: data.navigation.menu.items.find((item) => item.subject === block.settings.menu_item),
    }
  }),
}
export default homeResult
