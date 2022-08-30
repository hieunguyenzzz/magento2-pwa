// import { GoogleAnalyticsScript } from '@graphcommerce/googleanalytics'
// import { GoogleRecaptchaV3Script } from '@graphcommerce/googlerecaptcha'
// import { GoogleTagManagerScript } from '@graphcommerce/googletagmanager'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../assets/font.css'
import '../assets/global.css'
import { UIProvider } from '../components/ui'
import { I18nProvider } from '../lib/i18n/I18nProvider'

export default function ThemedApp(props: AppProps) {
  const { router } = props
  const { locale = 'en' } = router
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  return (
    <I18nProvider key={locale} locale={locale}>
      <UIProvider value={{}}>
        <props.Component {...props} />
      </UIProvider>
    </I18nProvider>
  )
}
