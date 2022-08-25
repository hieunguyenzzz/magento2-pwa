export default function linearNestedObj(obj, id, result = {}) {
  for (iKey in obj) {
    if (obj.hasOwnProperty(iKey)) {
      if (typeof obj[iKey] === 'object' && obj[iKey] !== null) {
        let newid = iKey
        if (id) {
          newid = `${id}.${iKey}`
        }
        deepKeySearch(obj[iKey], newid, result)
      } else if (`${obj[iKey]}`.includes('t:')) result[id] = obj[iKey]
    }
  }
  return result
}
