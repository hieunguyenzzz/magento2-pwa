import { FramerNextPages } from '@graphcommerce/framer-next-pages'
import { GoogleRecaptchaProvider } from '@graphcommerce/googlerecaptcha'
// import { GoogleAnalyticsScript } from '@graphcommerce/googleanalytics'
// import { GoogleRecaptchaV3Script } from '@graphcommerce/googlerecaptcha'
// import { GoogleTagManagerScript } from '@graphcommerce/googletagmanager'
import { GlobalHead } from '@graphcommerce/magento-store'
import { CssAndFramerMotionProvider, PageLoadIndicator } from '@graphcommerce/next-ui'
import { CssBaseline } from '@mui/material'
import { AppProps } from 'next/app'
import '../assets/global.css'
import { UIProvider } from '../components/ui'
import { GraphQLProvider } from '../lib/graphql/GraphQLProvider'
import { I18nProvider } from '../lib/i18n/I18nProvider'

export default function ThemedApp(props: AppProps) {
  const { router } = props
  const { locale = 'en' } = router

  return (
    <CssAndFramerMotionProvider>
      <I18nProvider key={locale} locale={locale}>
        <GraphQLProvider {...props}>
          <UIProvider value={{}}>
            <GlobalHead />
            <CssBaseline />
            <PageLoadIndicator />
            <GoogleRecaptchaProvider>
              <FramerNextPages {...props} />
            </GoogleRecaptchaProvider>
          </UIProvider>
        </GraphQLProvider>
      </I18nProvider>
    </CssAndFramerMotionProvider>
  )
}
