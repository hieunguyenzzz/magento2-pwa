import { createContext, useCallback, useContext, useMemo } from 'react'

const translationContext = createContext({
  locale: 'en',
  translations: {},
})
export const Trans = ({ id }: { id: string }) => (
  <translationContext.Consumer>
    {({ translations }) => translations[id] || id}
  </translationContext.Consumer>
)
export const useTrans = () => {
  const { translations } = useContext(translationContext)
  return useCallback((id) => translations[id], [translations])
}
export function I18nProvider({ locale, children }) {
  return (
    <translationContext.Provider
      key={locale}
      value={useMemo(
        () => ({
          locale,
          // eslint-disable-next-line import/no-dynamic-require
          translations: require(`../../localData/translations/${locale}.json`),
        }),
        [locale],
      )}
    >
      {children}
    </translationContext.Provider>
  )
}
