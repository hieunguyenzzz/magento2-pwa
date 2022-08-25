import data from './settings_data.json'

export function linearNestedObj(obj, id, result = { text: '', arr: [] }) {
  for (const iKey in obj) {
    let newid = iKey
    if (id) {
      newid = `${id}.${iKey}`
    }
    if (obj.hasOwnProperty(iKey)) {
      if (typeof obj[iKey] === 'object' && obj[iKey] !== null) {
        linearNestedObj(obj[iKey], newid, result)
      } else if (`${obj[iKey]}`.includes('t:')) {
        const value = obj[iKey].replace('t:', '')
        if (iKey === 'rt_text') console.log({ 'obj[iKey]': obj[iKey], value })
        result.arr.push({ key: newid, value })
        obj[iKey] = newid
      }
    }
  }
  return { obj, result }
}
export function getSettingsData(data) {
  return linearNestedObj(data)
}
const settingsData = getSettingsData(data)
console.log({ settingsData })
export default settingsData
