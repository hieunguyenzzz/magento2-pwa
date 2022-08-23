export function Home() {
  return (
    <div>
      <div id='shopify-section-header' className='shopify-section'>
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
                  <predictive-search className='block w-full group'>
                    <form
                      className='flex items-center w-full gap-3 pl-2 pr-4 border-b'
                      action='/search'
                      method='get'
                    >
                      <input name='type' type='hidden' defaultValue='product' />
                      <i
                        aria-hidden='true'
                        className=' icon text-gray-400 icon-search h-[28px] !flex items-center'
                      />
                      <input
                        className='flex-1  text-gray-400 focus:text-black focus:outline-none !indent-0 !m-0 !h-[24px] !leading-[24px] lg:text-sm'
                        type='search'
                        name='q'
                        id='q'
                        placeholder='Search entire store here...'
                        defaultValue
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
                                    <div className='text-sm predictive-search__item-heading '>
                                      chairs
                                    </div>
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
                                    <div className='text-sm predictive-search__item-heading '>
                                      tables
                                    </div>
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
                                    <div className='text-sm predictive-search__item-heading '>
                                      chair
                                    </div>
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
                  </predictive-search>
                </div>
                <ul className='items-center justify-end flex-1 hidden lg:flex ' id='cart'>
                  <li>
                    <a
                      href='/cart?locale=en'
                      className='items-center whitespace-nowrap  w-[52px] flex flex-col justify-center relative'
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
                  <li className='cust'>
                    <a
                      className='w-[52px] flex flex-col items-center whitespace-nowrap justify-center'
                      href='/account/login'
                    >
                      <div
                        className='account-icon'
                        style={{
                          background:
                            'url(//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/mobelaris-icons.webp?v=1039779…) no-repeat -68px -202px',
                          width: 19,
                          height: '18px !important',
                          marginTop: '8px !important',
                        }}
                      />

                      <div className='mt-1 text-xs leading-none text-center'>ACCOUNT</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.mobelaris.com/pages/faqs'
                      className='items-center whitespace-nowrap w-[52px] flex flex-col justify-center'
                    >
                      <div
                        className='faq-icon'
                        style={{
                          background:
                            'url(//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/mobelaris-icons.webp?v=1039779…) no-repeat -158px -202px',
                          width: 19,
                          height: '18px !important',
                          marginTop: '8px !important',
                        }}
                      />

                      <div className='mt-1 text-xs leading-none text-center '>FAQs</div>
                    </a>
                  </li>
                  <li className='inline-flex items-center h-full align-middle'>
                    <div className='flex dropdown dropdown-end dropdown-hover'>
                      <div
                        tabIndex={0}
                        className=' !font-normal flex flex-col items-center !mb-0  gap-1'
                      >
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
                  <ul className='flex list-none'>
                    <li className='px-2 seeks'>
                      <label
                        onClick="document.querySelector('predictive-search [name=q]').focus()"
                        id='search_trigger'
                        className='m-0 js-search-trigger js-search-mobile-trigger'
                      >
                        <i className='icon icon-search' aria-hidden='true' />
                      </label>
                    </li>
                    <li className='px-2'>
                      <a
                        href='/cart?locale=en'
                        className='relative site-header__cart-toggle js-drawer-open-right'
                        aria-controls='CartDrawer'
                        aria-expanded='false'
                      >
                        <span className='cart-words'>My Cart</span>
                        <i className='icon icon-cart' aria-hidden='true' />
                        <span className='CartCount absolute top-0 leading-loose right-0 badge badge-xs h-[1.2em] transform translate-x-1/2 -translate-y-1/2 empty:hidden bg-slate-600 border-white' />
                      </a>
                    </li>
                    <li className='ml-3 text-left slideout__trigger--open'>
                      <button
                        aria-label='Open navigation'
                        className='px-0 text-left text-black slideout__trigger-mobile-menu js-slideout-open'
                        data-slideout-direction='right'
                        data-wau-slideout-target='mobile-navigation'
                        name='button'
                        tabIndex={0}
                        type='button'
                      >
                        <i aria-hidden='true' className='la la-bars' />
                      </button>
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
                  <li
                    data-layout='[navigation-main-menu]-with-images'
                    aria-expanded='false'
                    aria-haspopup='true'
                    className='navigation__menuitem h-[60px]  group navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand CHAIRS'
                    data-active-class='navigation__menuitem--active'
                    role='none'
                  >
                    <div className=' h-[57px] flex items-center gap-2 '>
                      <a className='uppercase' href='/collections/chairs'>
                        CHAIRS
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
                        <a
                          href='/collections/chairs'
                          className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                        >
                          <div className=' flex-1 relative aspect-square w-[260px] block  '>
                            <img
                              loading='lazy'
                              className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                              id={580307714307}
                              data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chair-image_400x.png?v=1656479420'
                              data-sizes='auto'
                              width
                              height
                              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chair-image_400x.png?v=1656479420'
                              alt
                              sizes='262px'
                              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chair-image_400x.png?v=1656479420'
                            />
                            <noscript>
                              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full
                              !h-full object-contain" width="281" height="296"
                              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/chair-image_400x.png?v=1656479420"
                              alt=""&gt;
                            </noscript>
                          </div>
                          <div className='flex flex-col leading-tight uppercase'>
                            <span className='text-[20px] leading-[28px]'>Up to</span>
                            <span className='leading-[52px] font-heading text-[75px] font-bold'>
                              50%
                            </span>
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
                        <ul className='grid grid-cols-2 lg:grid-cols-3 list-none justify-center  pt-[50px] content-start items-start'>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/dining-chairs'>
                              Dining Chair
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/armchairs'>
                              Arm Chair
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/high-back-chairs'>
                              High Back Chair{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/lounge-chair'>
                              Lounge Chair
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/bar-stools'>
                              Bar Stools
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/stools'>
                              Stools
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/modern-rocking-chairs'>
                              Modern Rocking Chairs{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/office-chairs'>
                              Office Chairs
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/modern-benches'>
                              Modern Benches
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    data-layout='[navigation-main-menu]-with-images'
                    aria-expanded='false'
                    aria-haspopup='true'
                    className='navigation__menuitem h-[60px]  group navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand TABLES'
                    data-active-class='navigation__menuitem--active'
                    role='none'
                  >
                    <div className=' h-[57px] flex items-center gap-2 '>
                      <a className='uppercase' href='/collections/tables'>
                        TABLES
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
                        <a
                          href='/collections/tables'
                          className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                        >
                          <div className=' flex-1 relative aspect-square w-[260px] block  '>
                            <img
                              loading='lazy'
                              className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                              id={580307878147}
                              data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/table-image_400x.png?v=1656479544'
                              data-sizes='auto'
                              width
                              height
                              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/table-image_400x.png?v=1656479544'
                              alt
                              sizes='262px'
                              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/table-image_400x.png?v=1656479544'
                            />
                            <noscript>
                              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full
                              !h-full object-contain" width="300" height="145"
                              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/table-image_400x.png?v=1656479544"
                              alt=""&gt;
                            </noscript>
                          </div>
                          <div className='flex flex-col leading-tight uppercase'>
                            <span className='text-[20px] leading-[28px]'>Up to</span>
                            <span className='leading-[52px] font-heading text-[75px] font-bold'>
                              50%
                            </span>
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
                        <ul className='grid grid-cols-2 lg:grid-cols-3 list-none justify-center  pt-[50px] content-start items-start'>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/dining-tables'>
                              Dining Tables
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/modern-coffee-table'>
                              Modern Coffee Table{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/side-tables'>
                              Side Tables
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/desks'>
                              Desks
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/conference-table'>
                              Conference Table
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    data-layout='[navigation-main-menu]-with-images'
                    aria-expanded='false'
                    aria-haspopup='true'
                    className='navigation__menuitem h-[60px]  group navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand SOFA'
                    data-active-class='navigation__menuitem--active'
                    role='none'
                  >
                    <div className=' h-[57px] flex items-center gap-2 '>
                      <a className='uppercase' href='/collections/sofas'>
                        SOFA
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
                        <a
                          href='/collections/sofas'
                          className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                        >
                          <div className=' flex-1 relative aspect-square w-[260px] block  '>
                            <img
                              loading='lazy'
                              className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                              id={580307943683}
                              data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/sofa-image_400x.webp?v=1656479618'
                              data-sizes='auto'
                              width
                              height
                              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/sofa-image_400x.webp?v=1656479618'
                              alt
                              sizes='262px'
                              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/sofa-image_400x.webp?v=1656479618'
                            />
                            <noscript>
                              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full
                              !h-full object-contain" width="286" height="265"
                              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/sofa-image_400x.webp?v=1656479618"
                              alt=""&gt;
                            </noscript>
                          </div>
                          <div className='flex flex-col leading-tight uppercase'>
                            <span className='text-[20px] leading-[28px]'>Up to</span>
                            <span className='leading-[52px] font-heading text-[75px] font-bold'>
                              50%
                            </span>
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
                        <ul className='grid grid-cols-2 lg:grid-cols-3 list-none justify-center  pt-[50px] content-start items-start'>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/2-seater-sofa'>
                              2 Seater Sofa
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/3-seater-sofa'>
                              3 Seater Sofa
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/chaise-lounge-day-beds'>
                              Chaise Lounge / Day Beds
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    data-layout='[navigation-main-menu]-with-images'
                    aria-expanded='false'
                    aria-haspopup='true'
                    className='navigation__menuitem h-[60px]  group navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand LIGHTING'
                    data-active-class='navigation__menuitem--active'
                    role='none'
                  >
                    <div className=' h-[57px] flex items-center gap-2 '>
                      <a className='uppercase' href='/collections/lighting'>
                        LIGHTING
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
                        <a
                          href='/collections/lighting'
                          className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                        >
                          <div className=' flex-1 relative aspect-square w-[260px] block  '>
                            <img
                              loading='lazy'
                              className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                              id={580307616003}
                              data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/pendant_lights_400x.webp?v=1656479420'
                              data-sizes='auto'
                              width
                              height
                              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/pendant_lights_400x.webp?v=1656479420'
                              alt
                              sizes='262px'
                              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/pendant_lights_400x.webp?v=1656479420'
                            />
                            <noscript>
                              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full
                              !h-full object-contain" width="136" height="180"
                              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/pendant_lights_400x.webp?v=1656479420"
                              alt=""&gt;
                            </noscript>
                          </div>
                          <div className='flex flex-col leading-tight uppercase'>
                            <span className='text-[20px] leading-[28px]'>Up to</span>
                            <span className='leading-[52px] font-heading text-[75px] font-bold'>
                              50%
                            </span>
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
                        <ul className='grid grid-cols-2 lg:grid-cols-3 list-none justify-center  pt-[50px] content-start items-start'>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/table-lamps'>
                              Table Lamps
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/floor-lamps'>
                              Floor Lamps{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/wall-lamps'>
                              Wall Lamps
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/pendant-lights'>
                              Pendant Lights
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    data-layout='[navigation-main-menu]-with-images'
                    aria-expanded='false'
                    aria-haspopup='true'
                    className='navigation__menuitem h-[60px]  group navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand STORAGE'
                    data-active-class='navigation__menuitem--active'
                    role='none'
                  >
                    <div className=' h-[57px] flex items-center gap-2 '>
                      <a className='uppercase' href='/collections/storage'>
                        STORAGE
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
                        <a
                          href='/collections/storage'
                          className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                        >
                          <div className=' flex-1 relative aspect-square w-[260px] block  '>
                            <img
                              loading='lazy'
                              className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                              id={580308074755}
                              data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/storage-image_400x.png?v=1656479716'
                              data-sizes='auto'
                              width
                              height
                              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/storage-image_400x.png?v=1656479716'
                              alt
                              sizes='262px'
                              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/storage-image_400x.png?v=1656479716'
                            />
                            <noscript>
                              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full
                              !h-full object-contain" width="287" height="228"
                              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/storage-image_400x.png?v=1656479716"
                              alt=""&gt;
                            </noscript>
                          </div>
                          <div className='flex flex-col leading-tight uppercase'>
                            <span className='text-[20px] leading-[28px]'>Up to</span>
                            <span className='leading-[52px] font-heading text-[75px] font-bold'>
                              50%
                            </span>
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
                        <ul className='grid grid-cols-2 lg:grid-cols-3 list-none justify-center  pt-[50px] content-start items-start'>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/sideboards'>
                              Sideboards
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/display-cabinet'>
                              {' '}
                              Display Cabinet{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/chest-of-drawers'>
                              Chest of Drawers{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/cabinets'>
                              Cabinets{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/modern-tv-unit'>
                              Modern TV Unit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    data-layout='[navigation-main-menu]-with-images'
                    aria-expanded='false'
                    aria-haspopup='true'
                    className='navigation__menuitem h-[60px]  group navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand ACCESSORIES'
                    data-active-class='navigation__menuitem--active'
                    role='none'
                  >
                    <div className=' h-[57px] flex items-center gap-2 '>
                      <a className='uppercase' href='/collections/accessories'>
                        ACCESSORIES
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
                        <a
                          href='/collections/accessories'
                          className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                        >
                          <div className=' flex-1 relative aspect-square w-[260px] block  '>
                            <img
                              loading='lazy'
                              className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                              id={580307583235}
                              data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/classic_clocks_1_400x.png?v=1656479420'
                              data-sizes='auto'
                              width
                              height
                              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/classic_clocks_1_400x.png?v=1656479420'
                              alt
                              sizes='262px'
                              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/classic_clocks_1_400x.png?v=1656479420'
                            />
                            <noscript>
                              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full
                              !h-full object-contain" width="162" height="160"
                              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/classic_clocks_1_400x.png?v=1656479420"
                              alt=""&gt;
                            </noscript>
                          </div>
                          <div className='flex flex-col leading-tight uppercase'>
                            <span className='text-[20px] leading-[28px]'>Up to</span>
                            <span className='leading-[52px] font-heading text-[75px] font-bold'>
                              50%
                            </span>
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
                        <a
                          href='/collections/accessories'
                          className="hover:scale-110 will-change-transform items-center scale-100 transition-transform  duration-700 max-w-[480px] relative before:absolute before:inset-3 before:border-black before:border before:conten-['']  p-6 bg-[#f5f6f7] flex gap-6  order-2 w-1/3 flex-shrink-0"
                        >
                          <div className=' flex-1 relative aspect-square w-[260px] block '>
                            <img
                              loading='lazy'
                              className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                              id={580307648771}
                              data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/coat_hook_400x.png?v=1656479420'
                              data-sizes='auto'
                              width
                              height
                              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/coat_hook_400x.png?v=1656479420'
                              alt
                              sizes='262px'
                              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/coat_hook_400x.png?v=1656479420'
                            />
                            <noscript>
                              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full
                              !h-full object-contain" width="180" height="140"
                              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/coat_hook_400x.png?v=1656479420"
                              alt=""&gt;
                            </noscript>
                          </div>
                          <div className='flex flex-col leading-tight uppercase'>
                            <span className='text-[20px] leading-[28px]'>Up to</span>
                            <span className='leading-[52px] font-heading text-[75px] font-bold'>
                              50%
                            </span>
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
                        <ul className='grid grid-cols-1 list-none justify-center  pt-[50px] content-start items-start'>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/coat-hooks-stands'>
                              Coat Hooks &amp; Stands{' '}
                            </a>
                          </li>
                          <li className='py-1 leading-snug w-[247px] min-h-[49px] px-[25px]'>
                            <a className='text-base ' href='/collections/designer-clock'>
                              Designer Clock
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    aria-expanded='false'
                    aria-haspopup='true'
                    className='navigation__menuitem h-[60px] navigation__menuitem--dropdown js-doubletap-to-go js-aria-expand '
                    data-active-class='navigation__menuitem--active'
                    role='none'
                  >
                    <a
                      className='flex items-center h-full uppercase js-menu-link js-open-dropdown-on-key'
                      href='/collections/express-delivery'
                    >
                      EXPRESS DELIVERY
                    </a>
                  </li>
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
        <div
          className='hidden phantom js-phantom phantom--hidden'
          id='phantom'
          style={{ height: 136 }}
        />
      </div>
      <div
        id='shopify-section-template--16177733763331__mobelaris-features'
        className='shopify-section'
      >
        <ul className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto   border-y list-none grid grid-cols-2 md:grid-cols-4 justify-center gap-3  md:gap-6 py-3 md:py-6 prose-p:m-0 first:prose-p:font-heading first:prose-p:text-xs prose-p:text-sm md:prose-p:text-base md:first:prose-p:text-sm  prose-strong:text-[#dc9916]'>
          <li className='flex items-center flex-1 max-w-xs'>
            <img
              className='object-contain h-[24px] md:h-[30px] '
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/customer-reviews_1_50x.png?v=1655442247'
              width={50}
              height={36}
              alt='icon'
            />
            <div className='mt-2 '>
              <p>
                TOPS FOR <strong>SUPPORT </strong>
              </p>
              <p>100's of Independant reviews</p>
            </div>
          </li>
          <li className='flex items-center flex-1 max-w-xs'>
            <img
              className='object-contain h-[24px] md:h-[30px] '
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/2-Customer_Support_Designer_Editions_50x.png?v=1655442247'
              width={50}
              height={36}
              alt='icon'
            />
            <div className='mt-2 '>
              <p>
                SUPPORT <strong>7 DAYS</strong> A WEEK
              </p>
              <p>Live Chat</p>
            </div>
          </li>
          <li className='flex items-center flex-1 max-w-xs'>
            <img
              className='object-contain h-[24px] md:h-[30px] '
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/Designer-Editions-Warranty_50x.png?v=1655442247'
              width={50}
              height={36}
              alt='icon'
            />
            <div className='mt-2 '>
              <p>
                30 DAY<strong> GUARANTEE</strong>
              </p>
              <p>No quibbles money back</p>
            </div>
          </li>
          <li className='flex items-center flex-1 max-w-xs'>
            <img
              className='object-contain h-[24px] md:h-[30px] '
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/4-Safe-shopping_8547d486-1066-4860-919f-f2932b2e7be7_50x.png?v=1655442586'
              width={50}
              height={36}
              alt='icon'
            />
            <div className='mt-2 '>
              <p>
                PAYMENT<strong> </strong>100%<strong> SECURE</strong>
              </p>
              <p>Payment 100% Secure</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
