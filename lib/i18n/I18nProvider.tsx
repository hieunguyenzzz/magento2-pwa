/**
 * Reason for it to exist: We're loading the translations from a relative path, this a good thing.
 * This allows for easy overwriting of translations.
 *
 * We provide the loader and ssrLoader because we need to:
 *
 * - Be able to load different translations based on the locale in the browser.
 * - Be able to load the translations while rendering server side. We need this to be synchronous.
 *
 * See `examples/magento-graphcms/pages/_app.tsx` for usage.
 *
 * Todo: When React Server Components is released, move this to a server component.
 */

import { createContext, useMemo } from 'react'

const translationContext = createContext({
  locale: 'en',
  translations: {},
})
export const Trans = ({ id }) => (
  <translationContext.Consumer>
    {({ translations }) => translations[id]}
  </translationContext.Consumer>
)
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
