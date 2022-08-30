import deflag from '../assets/flags/de-flag.svg'
import esflag from '../assets/flags/es-flag.svg'
import frflag from '../assets/flags/fr-flag.svg'
import enflag from '../assets/flags/gb-flag.svg'
import nlflag from '../assets/flags/nl-flag.svg'
import noflag from '../assets/flags/no-flag.svg'
import seflag from '../assets/flags/se-flag.svg'
import countries from './countries.json'
import data from './settings_data.json'

const localeStores = [
  {
    code: 'GB',
    flag: enflag,
    lang: 'en',
    key: 'en-us',
    ...countries.find((item) => item.code === 'GB'),
  },
  {
    code: 'SE',
    flag: seflag,
    lang: 'se',
    key: 'sv-se',
    ...countries.find((item) => item.code === 'SE'),
  },
  {
    code: 'DE',
    flag: deflag,
    lang: 'de',
    key: 'de-de',
    ...countries.find((item) => item.code === 'DE'),
  },
  {
    code: 'NO',
    flag: noflag,
    lang: 'no',
    key: 'no-no',
    ...countries.find((item) => item.code === 'NO'),
  },
  {
    code: 'FR',
    flag: frflag,
    lang: 'fr',
    key: 'fr-fr',
    ...countries.find((item) => item.code === 'FR'),
  },
  {
    code: 'NL',
    flag: nlflag,
    lang: 'nl',
    key: 'nl-nl',
    ...countries.find((item) => item.code === 'NL'),
  },
  {
    code: 'BE',
    flag: nlflag,
    lang: 'nl',
    key: 'nl-be',
    show: true,
    ...countries.find((item) => item.code === 'BE'),
  },
  {
    code: 'BE',
    flag: frflag,
    lang: 'fr',
    key: 'fr-be',
    show: true,
    ...countries.find((item) => item.code === 'BE'),
  },
  {
    code: 'AT',
    flag: deflag,
    lang: 'de',
    key: 'de-at',
    show: true,
    ...countries.find((item) => item.code === 'AT'),
  },
  {
    code: 'ES',
    flag: esflag,
    lang: 'es',
    key: 'es-es',
    ...countries.find((item) => item.code === 'ES'),
  },
].map((item) => ({ ...item, name: `t:${item.name}` }))

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
const settingsData = getSettingsData({
  ...data,
  localeStores,
})
console.log({ settingsData })
export default settingsData
