import classNames from 'classnames'
import { Trans } from '../../lib/i18n/I18nProvider'
import data from './Header.data'
import { Image } from './Image'

const renderMenuBlock = (block, i) => {
  switch (block.type) {
    case 'submenu_with_image':
      const { nav_image, nav_image_secound, url, columns_number } = block.settings
      return (
        <li
          key={i}
          data-layout='[navigation-main-menu]-with-images'
          className='navigation__menuitem h-[60px]  group navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand CHAIRS'
          data-active-class='navigation__menuitem--active'
          role='none'
        >
          <div className=' h-[60px] flex items-center gap-2 '>
            <a className='uppercase' href={url}>
              <Trans id={block.settings.menu_heading} />
            </a>
            <svg
              className='rotate-90  text-[12px]'
              fill='currentColor'
              height='1em'
              strokeWidth='0.2px'
              stroke='currentColor'
              viewBox='0 0 16 16'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='bg-white z-[-1] leading-loose absolute shadow left-0 right-0 opacity-0 group-hover:opacity-100 border-y border-opacity-50 pointer-events-none group-hover:pointer-events-auto py-10 duration-500 transition-[opacity,margin] invisible group-hover:visible -mt-6 group-hover:mt-0'>
            <div className='flex justify-center invisible w-full gap-6 px-4 mx-auto sm:px-8 group-hover:visible'>
              {nav_image && (
                <a
                  href={url}
                  className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                >
                  <div className=' flex-1 relative aspect-square w-[260px] block  '>
                    <Image
                      loading='lazy'
                      className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                      src={nav_image}
                      data-sizes='auto'
                      width
                      height
                      data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chair-image_400x.png?v=1656479420'
                      alt
                      sizes='262px'
                    />
                  </div>
                  <div className='flex flex-col leading-tight uppercase'>
                    <span className='text-[20px] leading-[28px]'>Up to</span>
                    <span className='leading-[52px] font-heading text-[75px] font-bold'>50%</span>
                    <span className='text-[20px] leading-[28px]'>off</span>
                    <span className='font-heading mt-[10px] text-[30px] leading-[25px] font-bold text-black'>
                      <Trans id='Express' />
                    </span>
                    <span className='tracking-[4px] text-[30px] mb-[20px]'>Delivery</span>
                    <div className='self-center rounded-none btn-sm btn btn-outline'>
                      Click here
                    </div>
                  </div>
                </a>
              )}
              {nav_image_secound && (
                <a
                  href='/collections/chairs'
                  className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                >
                  <div className=' flex-1 relative aspect-square w-[260px] block  '>
                    <Image
                      loading='lazy'
                      className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                      src={nav_image_secound}
                      data-sizes='auto'
                      width
                      height
                      data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chair-image_400x.png?v=1656479420'
                      alt
                      sizes='262px'
                    />
                  </div>
                  <div className='flex flex-col leading-tight uppercase'>
                    <span className='text-[20px] leading-[28px]'>Up to</span>
                    <span className='leading-[52px] font-heading text-[75px] font-bold'>50%</span>
                    <span className='text-[20px] leading-[28px]'>off</span>
                    <span className='font-heading mt-[10px] text-[30px] leading-[25px] font-bold text-black'>
                      Express
                    </span>
                    <span className='tracking-[4px] text-[30px] mb-[20px]'>Delivery</span>
                    <div className='self-center rounded-none btn-sm btn btn-outline'>
                      Click here
                    </div>
                  </div>
                </a>
              )}
              <ul
                className={classNames(
                  `grid grid-cols-2  list-none justify-center  pt-[50px] content-start items-start`,
                  columns_number === 1 && 'lg:grid-cols-1',
                  columns_number === 2 && 'lg:grid-cols-2',
                  columns_number === 3 && 'lg:grid-cols-3',
                  columns_number === 4 && 'lg:grid-cols-4',
                )}
              >
                {block?.menu?.items.map((item, i) => (
                  <li key={i} className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                    <a className='text-base ' href={`/${item.type}/${item.subject}`}>
                      <Trans id={item.title} />
                    </a>
                  </li>
                ))}
                {block.settings.menu_items.split(',').map((name) => (
                  <li key={name} className='py-1 leading-snug w-[247px]  px-[25px]'>
                    <a className='text-base ' href={`/collection/${name}`}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      )
  }
  return (
    <li
      key={i}
      className='navigation__menuitem h-[60px] navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand '
      role='none'
    >
      <a
        className='flex items-center h-full uppercase js-menu-link js-open-dropdown-on-key'
        href={block.settings.url}
      >
        <Trans id={block.settings.menu_heading} />
      </a>
    </li>
  )
}
export const Header = () => (
  <header
    className='relative z-30 border-solid header-section border-y lg:border-none border-t-white lg:pb-0'
    data-section-id='header'
    data-section-type='header-section'
    data-sticky='true'
  >
    <div>
      <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto   relative h-[60px] lg:h-[74px] flex items-center '>
        <div className='flex justify-center w-full gap-6'>
          {/* start nav container */}
          <div className='flex items-center lg:flex-1'>
            <div className='text-center' id='logo'>
              <div className='text-center first_logo'>
                <a href='/'>
                  <img
                    width={400}
                    height={200}
                    style={{ maxWidth: 175 }}
                    className='w-[220px] md:w-[291px] p-0 transform translate-y-[-8%]'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/LOGO-MOBELARIS_Final_400x.webp?v=1655364268'
                    itemProp='logo'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='z-10   lg:max-w-[300px] bg-white transition-all focus-within:shadow lg:focus-within:shadow-none lg:pointer-events-auto lg:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100 opacity-0 pointer-events-none peer-checked:pointer-events-auto peer-checked:opacity-100 peer-checked:flex px-4 sm:px-8 py-2 lg:pb-0 lg:px-0 flex flex-1 absolute left-0 w-full top-full items-center lg:static'>
            <div className='block w-full group'>
              <form
                className='flex items-center w-full gap-3 pl-2 pr-4 border-b'
                action='/search'
                method='get'
              >
                <input name='type' type='hidden' defaultValue='product' />
                <i
                  aria-hidden='true'
                  className=' text-2xl text-gray-400 icon-search h-[28px] !flex items-center'
                >
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 1024 1024'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z' />
                  </svg>
                </i>
                <input
                  className='flex-1  text-gray-400 focus:text-black focus:outline-none !indent-0 !m-0 !h-[24px] !leading-[24px] lg:text-sm'
                  type='search'
                  name='q'
                  id='q'
                  placeholder='Search entire store here...'
                  role='combobox'
                  aria-expanded='false'
                  aria-owns='predictive-search-results-list'
                  aria-controls='predictive-search-results-list'
                  aria-haspopup='listbox'
                  aria-autocomplete='list'
                  autoCorrect='off'
                  autoComplete='off'
                  autoCapitalize='off'
                  spellCheck='false'
                />
                <div className='flex hidden bg-white max-w-[100px] absolute top-3 bottom-3 w-[100px] right-6 '>
                  <input
                    defaultValue='Search'
                    name='submit'
                    id='search_button'
                    className='!hidden button !h-[24px] !leading-[24px]'
                    type='submit'
                  />
                </div>
                <div
                  className='predictive-search hidden predictive-search--header  absolute top-full lg:top-[75px] left-0 w-full pointer-events-none '
                  tabIndex={-1}
                >
                  <div
                    className='mx-auto max-w-[800px] bg-white shadow-xl max-h-[calc(100vh-101px)] lg:max-h-[calc(100vh-75px)] overflow-auto pointer-events-auto'
                    data-predictive-search
                  />
                  <div
                    className='mx-auto max-w-[400px] focus-withinflex bg-white shadow-xl max-h-[calc(100vh-101px)] lg:max-h-[calc(100vh-75px)] overflow-auto pointer-events-auto'
                    data-holder
                    tabIndex={-1}
                  >
                    <div className='w-full'>
                      <ul className='w-full list-none'>
                        <li
                          className='px-3 pt-5 pb-1 font-bold leading-loose text-left uppercase font-heading'
                          tabIndex={-1}
                        >
                          Polular searches
                        </li>
                        <li
                          aria-selected='false'
                          className='predictive-search__list-item'
                          id='predictive-search-option-1'
                          role='option'
                        >
                          <a
                            href='https://www.mobelaris.com/search?q=Wishbone'
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>
                                Wishbone
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          aria-selected='false'
                          className='predictive-search__list-item'
                          id='predictive-search-option-2'
                          role='option'
                        >
                          <a
                            href='https://www.mobelaris.com/search?q=Eero Saarinen Tulip Chairs'
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>
                                Eero Saarinen Tulip Chairs
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          aria-selected='false'
                          className='predictive-search__list-item'
                          id='predictive-search-option-3'
                          role='option'
                        >
                          <a
                            href='https://www.mobelaris.com/search?q=Eero Saarinen Tulip Tabels'
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>
                                Eero Saarinen Tulip Tabels
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          aria-selected='false'
                          className='predictive-search__list-item'
                          id='predictive-search-option-4'
                          role='option'
                        >
                          <a
                            href='https://www.mobelaris.com/search?q=Eero Saarinen Tulip Tables'
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>
                                Eero Saarinen Tulip Tables
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div
                        className='px-3 pt-5 pb-1 mt-6 text-sm font-bold leading-loose text-left uppercase border-t'
                        tabIndex={-1}
                      >
                        Recents
                      </div>
                      <ul id='search_recents' className='w-full pb-12 list-none'>
                        <li
                          className='predictive-search__list-item'
                          id='predictive-search-option-0'
                          aria-selected='false'
                          role='option'
                        >
                          <a
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            href='https://www.mobelaris.com/search?q=Camaleonda Style Corner Sofa'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>
                                Camaleonda Style Corner Sofa
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className='predictive-search__list-item'
                          id='predictive-search-option-1'
                          aria-selected='false'
                          role='option'
                        >
                          <a
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            href='https://www.mobelaris.com/search?q=camaleoda'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>
                                camaleoda
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className='predictive-search__list-item'
                          id='predictive-search-option-2'
                          aria-selected='false'
                          role='option'
                        >
                          <a
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            href='https://www.mobelaris.com/search?q=Eero Saarinen Tulip Chairs'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>
                                Eero Saarinen Tulip Chairs
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className='predictive-search__list-item'
                          id='predictive-search-option-3'
                          aria-selected='false'
                          role='option'
                        >
                          <a
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            href='https://www.mobelaris.com/search?q=chairs'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>chairs</div>
                            </div>
                          </a>
                        </li>
                        <li
                          className='predictive-search__list-item'
                          id='predictive-search-option-4'
                          aria-selected='false'
                          role='option'
                        >
                          <a
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            href='https://www.mobelaris.com/search?q=tables'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>tables</div>
                            </div>
                          </a>
                        </li>
                        <li
                          className='predictive-search__list-item'
                          id='predictive-search-option-5'
                          aria-selected='false'
                          role='option'
                        >
                          <a
                            className='flex gap-3 px-3 py-1 predictive-search__item'
                            href='https://www.mobelaris.com/search?q=chair'
                            tabIndex={-1}
                          >
                            <div className='py-1 predictive-search__item-content'>
                              <div className='text-sm predictive-search__item-heading '>chair</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span
                  aria-hidden='true'
                  className='predictive-search-status visually-hidden'
                  role='status'
                />
              </form>
            </div>
          </div>
          <ul className='items-center justify-end flex-1 hidden lg:flex ' id='cart'>
            <li>
              <a
                href='/cart?locale=en'
                className='items-center whitespace-nowrap  min-w-[52px] px-3 flex flex-col justify-center relative'
              >
                <span className='cart-words' />
                <div
                  className='minicart'
                  style={{
                    background:
                      'url(//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/mobelaris-icons.webp?v=1039779…) no-repeat -34px -202px',
                    width: 19,
                    height: 18,
                    margin: '8px auto 0',
                  }}
                />
                <div className='mt-1 text-xs leading-none text-center '>MY CART</div>
                <span className='absolute top-0 right-0 text-white bg-black border border-white badge badge-sm empty:hidden' />
                <span className='hidden CartCost'>£0.00</span>
              </a>
            </li>
            <li>
              <a
                className='min-w-[52px] px-3 flex flex-col items-center whitespace-nowrap justify-center'
                href='/account/login'
              >
                <div
                  className='account-icon'
                  style={{
                    background:
                      'url(//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/mobelaris-icons.webp?v=1039779…) no-repeat -68px -202px',
                    width: '19px',
                    height: '18px',
                    marginTop: '8px',
                  }}
                />

                <div className='mt-1 text-xs leading-none text-center'>ACCOUNT</div>
              </a>
            </li>
            <li>
              <a
                href='https://www.mobelaris.com/pages/faqs'
                className='items-center whitespace-nowrap min-w-[52px] px-3 flex flex-col justify-center'
              >
                <div
                  className='faq-icon'
                  style={{
                    background:
                      'url(//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/mobelaris-icons.webp?v=1039779…) no-repeat -158px -202px',
                    width: '19px',
                    height: '18px',
                    marginTop: '8px',
                  }}
                />

                <div className='mt-1 text-xs leading-none text-center '>FAQs</div>
              </a>
            </li>
            <li className='inline-flex items-center h-full align-middle'>
              <div className='flex dropdown dropdown-end dropdown-hover'>
                <div tabIndex={0} className=' !font-normal flex flex-col items-center !mb-0  gap-1'>
                  <img
                    width={19}
                    height={18}
                    className='w-[19px] mt-2 h-[18px] rounded-full object-cover'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/gb-flag.svg?v=85559558288444710101655285928'
                  />
                  <div className='text-xs leading-none uppercase'>en/gb</div>
                </div>
                <div
                  tabIndex={0}
                  className='p-2 top-full py-4 flex flex-col shadow dropdown-content bg-base-100 rounded w-[240px] truncate'
                >
                  <a
                    title='United Kingdom'
                    href='/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  font-bold focus-inset'
                    aria-current='true'
                    data-country='GB'
                    data-lang
                    data-value='GB'
                  >
                    United kingdom
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/gb-flag.svg?v=85559558288444710101655285928'
                    />
                  </a>
                  <a
                    title='Sweden'
                    href='/sv-se/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='SE'
                    data-lang
                    data-value='SE'
                  >
                    Sweden
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/se-flag.svg?v=96789575551074673461655285943'
                    />
                  </a>
                  <a
                    title='Germany'
                    href='/de-de/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='DE'
                    data-lang
                    data-value='DE'
                  >
                    Germany
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/de-flag.svg?v=149501777162787292311655285923'
                    />
                  </a>
                  <a
                    title='Norway'
                    href='/no-no/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='NO'
                    data-lang
                    data-value='NO'
                  >
                    Norway
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/no-flag.svg?v=119158971746191992151655285941'
                    />
                  </a>
                  <a
                    title='France'
                    href='/fr-fr/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='FR'
                    data-lang
                    data-value='FR'
                  >
                    France
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/fr-flag.svg?v=92797901736867105561655285927'
                    />
                  </a>
                  <a
                    title='Netherlands'
                    href='/nl-nl/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='NL'
                    data-lang
                    data-value='NL'
                  >
                    Netherlands
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/nl-flag.svg?v=158148342600437444421655285941'
                    />
                  </a>
                  <a
                    title='Belgium'
                    href='/nl-be/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='BE'
                    data-lang
                    data-value='BE'
                  >
                    Belgium (Dutch)
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/be-flag.svg?v=116003378325675406541655285920'
                    />
                  </a>
                  <a
                    title='Belgium'
                    href='/fr-be/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='BE'
                    data-lang
                    data-value='BE'
                  >
                    Belgium (French)
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/be-flag.svg?v=116003378325675406541655285920'
                    />
                  </a>
                  <a
                    title='Austria'
                    href='/de-at/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='AT'
                    data-lang
                    data-value='AT'
                  >
                    Austria (German)
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/at-flag.svg?v=27547665196861826961655285919'
                    />
                  </a>
                  <a
                    title='Spain'
                    href='/es-es/'
                    className=' items-center !py-2 leading-none capitalize !flex justify-between !px-3 gap-2  hover:underline  focus-inset'
                    data-country='ES'
                    data-lang
                    data-value='ES'
                  >
                    Spain
                    <img
                      width={16}
                      height={16}
                      className='!pl-0 w-4 h-4 rounded-full object-cover'
                      src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/es-flag.svg?v=23887639339118606941655285924'
                    />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className='flex justify-end flex-1 lg:hidden '>
            {/* Shown on Mobile Only */}
            <ul className='flex items-center list-none'>
              <li className='px-2 seeks'>
                <label
                  id='search_trigger'
                  className='m-0 js-search-trigger js-search-mobile-trigger'
                >
                  <i className='text-2xl icon icon-search' aria-hidden='true'>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth={0}
                      viewBox='0 0 1024 1024'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z' />
                    </svg>
                  </i>
                </label>
              </li>
              <li className='px-2'>
                <a
                  href='/cart?locale=en'
                  className='relative site-header__cart-toggle js-drawer-open-right'
                  aria-controls='CartDrawer'
                  aria-expanded='false'
                >
                  <span className='hidden cart-words'>My Cart</span>
                  <i className='text-2xl icon icon-cart' aria-hidden='true'>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth={0}
                      viewBox='0 0 16 16'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
                    </svg>
                  </i>
                  <span className='CartCount absolute top-0 leading-loose right-0 badge badge-xs h-[1.2em] transform translate-x-1/2 -translate-y-1/2 empty:hidden bg-slate-600 border-white' />
                </a>
              </li>
              <li className='flex items-center ml-3 text-left'>
                <label
                  aria-label='Open navigation'
                  className='px-0 text-left text-black'
                  data-slideout-direction='right'
                  data-wau-slideout-target='mobile-navigation'
                  name='button'
                  tabIndex={0}
                  type='button'
                >
                  <i aria-hidden='true' className='text-2xl la la-bars'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth={2}
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <line x1={3} y1={12} x2={21} y2={12} />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                  </i>
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* end nav container */}
      </div>
    </div>
    <div className='justify-center hidden w-full bg-white pointer-events-none lg:flex'>
      <div className='w-full border-y'>
        <nav
          aria-label='Primary Navigation'
          className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  px-4 sm:px-8 pointer-events-auto'
        >
          <ul
            className='navigation__menu gap-x-[2%] justify-between !max-w-none min-h-[60px] items-center flex-wrap bg-white flex mx-auto'
            id='main-nav'
            role='menubar'
          >
            {data.blocks.map(renderMenuBlock)}
          </ul>
        </nav>
      </div>
    </div>
    <div className='drawer pointer-events-none lg:hidden absolute inset-0 top-[100px] w-screen  h-[calc(100vh-103px)]'>
      <input className='drawer-toggle' id='openMenuMobile' type='checkbox' />
      <div className='drawer-side '>
        <label className='drawer-overlay' htmlFor='openMenuMobile' />
        <div className='w-full pointer-events-auto absolute border-t inset-0 flex bg-white overflow-auto pb-[100px] h-full justify-center isolate '>
          <ul className='w-full list-none divide-y'>
            <li
              className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

'
            >
              <div className=' collapse-title leading-[28px] group-focus:bg-transparent'>
                <a className='uppercase ' href='/collections/chairs'>
                  Chairs
                </a>
              </div>
            </li>
            <li
              className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

'
            >
              <div className=' collapse-title leading-[28px] group-focus:bg-transparent'>
                <a className='uppercase ' href='/collections/tables'>
                  {' '}
                  Tables
                </a>
              </div>
            </li>
            <li
              className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

'
            >
              <div className=' collapse-title leading-[28px] group-focus:bg-transparent'>
                <a className='uppercase ' href='/collections/sofas'>
                  Sofa
                </a>
              </div>
            </li>
            <li
              className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

'
            >
              <div className=' collapse-title leading-[28px] group-focus:bg-transparent'>
                <a className='uppercase ' href='/collections/lighting'>
                  {' '}
                  Lighting
                </a>
              </div>
            </li>
            <li
              className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

'
            >
              <div className=' collapse-title leading-[28px] group-focus:bg-transparent'>
                <a className='uppercase ' href='/collections/storage'>
                  Storage
                </a>
              </div>
            </li>
            <li
              className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

'
            >
              <div className=' collapse-title leading-[28px] group-focus:bg-transparent'>
                <a className='uppercase ' href='/collections/accessories'>
                  Accessories
                </a>
              </div>
            </li>
            <li
              className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

'
            >
              <div className=' collapse-title leading-[28px] group-focus:bg-transparent'>
                <a className='uppercase ' href='/collections/express-delivery'>
                  Express Delivery
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)
