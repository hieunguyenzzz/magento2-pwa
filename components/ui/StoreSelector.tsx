import Link from 'next/link'
import { useRouter } from 'next/router'
import { Trans } from '../../lib/i18n/I18nProvider'
import data from './Header.data'
import { Image } from './Image'

export const StoreSelector = () => {
  const { locale, locales } = useRouter()
  return (
    <div className='flex dropdown dropdown-end dropdown-hover'>
      <div className=' !font-normal flex flex-col items-center !mb-0  gap-1'>
        {data.localeStores
          .filter((item) => (item.key || 'en-us') === locale)
          .map((item) => (
            <Image
              key={item.key}
              width={19}
              height={18}
              className='w-[19px] mt-2 h-[18px] rounded-full object-cover'
              src={item.flag.src}
            />
          ))}

        <div className='text-xs leading-none uppercase'>en/gb</div>
      </div>
      <div className='p-2 top-full py-4 flex flex-col shadow dropdown-content bg-base-100 rounded w-[240px] truncate'>
        {data.localeStores.map(
          (store: { key: string; name: string; flag: { src: string } }) =>
            locales?.includes(store.key) && (
              <Link key={store.key} href='#' locale={store.key}>
                <a
                  title={store.name}
                  className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  font-bold focus-inset'
                >
                  <Trans id={store.name} />
                  <Image
                    width={16}
                    height={16}
                    className='!pl-0 w-4 h-4 rounded-full object-cover'
                    src={store.flag.src}
                  />
                </a>
              </Link>
            ),
        )}
      </div>
    </div>
  )
}
