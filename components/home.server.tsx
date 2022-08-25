import { useEffect, useRef } from 'react'
import { Layout } from './ui/Layout'

export function Home() {
  return (
    <Layout>
      <Banner />
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
              <h4>
                TOPS FOR <strong>SUPPORT </strong>
              </h4>
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
              <h4>
                SUPPORT <strong>7 DAYS</strong> A WEEK
              </h4>
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
              <h4>
                30 DAY<strong> GUARANTEE</strong>
              </h4>
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
              <h4>
                PAYMENT<strong> </strong>100%<strong> SECURE</strong>
              </h4>
              <p>Payment 100% Secure</p>
            </div>
          </li>
        </ul>
      </div>
      <Block1 />
      <Block2 />
      <Block2 />
      <Block2 />
      <Block3 />
      <NewLetter />
    </Layout>
  )
}
const Block1 = () => (
  <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  mt-10 mb-14 flex flex-col items-center'>
    <a className='max-w-3xl mx-auto text-center'>
      <h2 className='text-[26px] m-0'>MOST SEARCHED</h2>
      <div className='py-3 mt-2 border-t border-black border-solid'>
        <p>
          At Mobelaris we try to bring you all of the best style designer furniture from the UK
          including 1920's to inspired by modern pieces of today.
        </p>
      </div>
    </a>
    <ul className='grid w-full grid-cols-1 gap-3 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6'>
      <li>
        <a href='/collections/storage' className='relative flex items-center justify-center group'>
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579426091267}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/modern-storage_299x.png?v=1655710906'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/modern-storage_299x.png?v=1655710906'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/modern-storage_299x.png?v=1655710906'
            />
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Storage
          </h3>
        </a>
      </li>
      <li>
        <a
          href='/collections/modern-coffee-table'
          className='relative flex items-center justify-center group'
        >
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579421929731}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/DROPDOWN-Banners-tables_800x.webp?v=1655706898'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/DROPDOWN-Banners-tables_800x.webp?v=1655706898'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/DROPDOWN-Banners-tables_800x.webp?v=1655706898'
            />
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Modern Coffee Table
          </h3>
        </a>
      </li>
      <li>
        <a
          href='/collections/chaise-lounge-day-beds'
          className='relative flex items-center justify-center group'
        >
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579230368003}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chaise-longues_299x.webp?v=1655449382'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chaise-longues_299x.webp?v=1655449382'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/chaise-longues_299x.webp?v=1655449382'
            />
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Chaise Lounge / Day Beds
          </h3>
        </a>
      </li>
      <li>
        <a
          href='/collections/floor-lamps'
          className='relative flex items-center justify-center group'
        >
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579425861891}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-floor-lamps_299x.png?v=1655710906'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-floor-lamps_299x.png?v=1655710906'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-floor-lamps_299x.png?v=1655710906'
            />
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Floor Lamps
          </h3>
        </a>
      </li>
      <li>
        <a href='/collections/sofas' className='relative flex items-center justify-center group'>
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579426025731}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/Designer-Sofas_299x.png?v=1655710906'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/Designer-Sofas_299x.png?v=1655710906'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/Designer-Sofas_299x.png?v=1655710906'
            />
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Sofas
          </h3>
        </a>
      </li>
      <li>
        <a
          href='/collections/dining-chairs'
          className='relative flex items-center justify-center group'
        >
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579426058499}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/dining-chairs_299x.png?v=1655710906'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/dining-chairs_299x.png?v=1655710906'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/dining-chairs_299x.png?v=1655710906'
            />
            <noscript>
              &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
              object-cover" width="299" height="180"
              src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/dining-chairs_299x.png?v=1655710906"
              alt=""&gt;
            </noscript>
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Dining Chairs
          </h3>
        </a>
      </li>
      <li>
        <a
          href='/collections/lounge-chair'
          className='relative flex items-center justify-center group'
        >
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579425992963}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-lounge-chairs_299x.png?v=1655710906'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-lounge-chairs_299x.png?v=1655710906'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-lounge-chairs_299x.png?v=1655710906'
            />
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Lounge Chair
          </h3>
        </a>
      </li>
      <li>
        <a
          href='/collections/pendant-lights'
          className='relative flex items-center justify-center group'
        >
          <div className='inset-0 w-full h-full bg-gray-100 ' style={{ paddingBottom: '60%' }}>
            <img
              loading='lazy'
              className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
              id={579425894659}
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-pendant-lights_299x.png?v=1655710906'
              data-sizes='auto'
              width
              height
              data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-pendant-lights_299x.png?v=1655710906'
              alt
              sizes='282px'
              src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-pendant-lights_299x.png?v=1655710906'
            />
          </div>
          <h3 className='py-1 text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
            Pendant Lights
          </h3>
        </a>
      </li>
    </ul>
  </div>
)
const Block2 = () => {
  const containerRef = useRef()
  useEffect(() => {
    let timer = null
    const start = () => {
      const sroller = containerRef.current.querySelector('ul')
      const arrowLeft = containerRef.current.querySelector('scrolling-arrow-left')
      const arrowRight = containerRef.current.querySelector('scrolling-arrow-right')
      arrowRight.addEventListener('click', () => {
        sroller.scrollLeft += sroller.clientWidth
      })
      arrowLeft.addEventListener('click', () => {
        sroller.scrollLeft -= sroller.clientWidth
      })

      const valid = () => {
        if (sroller.scrollLeft === 0) {
          arrowLeft.setAttribute('hidden', true)
        } else {
          arrowLeft.removeAttribute('hidden')
        }
        if (sroller.scrollLeft + sroller.clientWidth === sroller.scrollWidth) {
          arrowRight.setAttribute('hidden', true)
        } else {
          arrowRight.removeAttribute('hidden')
        }
      }
      sroller.addEventListener(
        'scroll',
        () => {
          if (timer !== null) {
            clearTimeout(timer)
          }
          timer = setTimeout(valid, 150)
        },
        false,
      )

      valid()
    }
    const handleIntersection = (entries, observer) => {
      if (!entries[0].isIntersecting) return

      observer.unobserve(containerRef.current)
      start()
    }
    new IntersectionObserver(handleIntersection.bind(containerRef.current), {
      rootMargin: '0px 0px 500px 0px',
    }).observe(containerRef.current)
  }, [])
  return (
    <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  mt-10 mb-14 flex flex-col items-center'>
      <a className='max-w-3xl mx-auto text-center'>
        <h2 className='text-[26px] m-0'>FAVORITE DINING CHAIRS</h2>
        <div className='py-3 mt-2 border-t border-black border-solid'>
          <p>
            Style Mid Century Designer Dining from Oak to Fibreglass, Verner Panton to Hans J
            Wegner, to name but a few.
          </p>
        </div>
      </a>
      <scrolling-carousel ref={containerRef} class='relative block w-full '>
        <ul className='m-0 carousel carousel-center lg:gap-6 gap-[1vw] w-full' role='list'>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-arne-jacobsen-drop-chair'
                  title='Drop Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 494 }}
                      >
                        <img
                          loading='lazy'
                          className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00519001e1_1_3_360x504.png?v=1655718735'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00519001e1_1_3_360x504.png?v=1655718735'
                          alt
                          sizes='257px'
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00519001e1_1_3_360x504.png?v=1655718735'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="494" height="829"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00519001e1_1_3_360x504.png?v=1655718735"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                        id={30752928399619}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa0051912034_1_360x504.png?v=1655718735'
                        data-sizes='auto'
                        width={487}
                        height={820}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa0051912034_1_360x504.png?v=1655718735'
                        alt='9199BA-B-9002'
                        sizes='282px'
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa0051912034_1_360x504.png?v=1655718735'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="487" height="820"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa0051912034_1_360x504.png?v=1655718735"
                        alt="9199BA-B-9002"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-arne-jacobsen-drop-chair'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>Drop Chair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£349.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£699.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £349.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720560034051} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <img
                  loading='lazy'
                  className='absolute tent w-[70px] max-w-[25%] z-10 top-2 left-2'
                  src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/Best-Seller_140x.png?v=21826527805891791031656922603'
                  src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/Best-Seller_140x.png?v=21826527805891791031656922603'
                />
                <a
                  className='block'
                  href='/products/style-wishbone-y-chair-hans-wegner'
                  title='Wishbone (Y) Chair - CH24'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 590 }}
                      >
                        <img
                          loading='lazy'
                          className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_soaped_oak_01_1_360x504.png?v=1655718203'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_soaped_oak_01_1_360x504.png?v=1655718203'
                          alt
                          sizes='257px'
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_soaped_oak_01_1_360x504.png?v=1655718203'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="590" height="785"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_soaped_oak_01_1_360x504.png?v=1655718203"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                        id={30752826392835}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/daf_1_360x504.jpg?v=1655718203'
                        data-sizes='auto'
                        width={605}
                        height={797}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/daf_1_360x504.jpg?v=1655718203'
                        alt='XS-W03-Black'
                        sizes='282px'
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/daf_1_360x504.jpg?v=1655718203'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="605" height="797"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/daf_1_360x504.jpg?v=1655718203"
                        alt="XS-W03-Black"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-wishbone-y-chair-hans-wegner'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Wishbone (Y) Chair - CH24
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£139.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£279.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £139.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720559280387} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-tulip-chair-eero-saarinen'
                  title='Tulip Chair - Fibreglass'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 722 }}
                      >
                        <img
                          loading='lazy'
                          className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-2-b203_red_1_2_360x504.jpg?v=1655717847'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-2-b203_red_1_2_360x504.jpg?v=1655717847'
                          alt
                          sizes='257px'
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-2-b203_red_1_2_360x504.jpg?v=1655717847'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="722" height="1073"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-2-b203_red_1_2_360x504.jpg?v=1655717847"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                        id={30752759578883}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-1-b203-red1_360x504.png?v=1655717847'
                        data-sizes='auto'
                        width={555}
                        height={831}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-1-b203-red1_360x504.png?v=1655717847'
                        alt='DF0109-B209-FG502'
                        sizes='282px'
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-1-b203-red1_360x504.png?v=1655717847'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="555" height="831"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0109-1-b203-red1_360x504.png?v=1655717847"
                        alt="DF0109-B209-FG502"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-tulip-chair-eero-saarinen'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Tulip Chair - Fibreglass
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£249.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£499.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £249.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720558493955} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-tolix-chair-xavier-pauchard'
                  title='Tolix Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 501 }}
                      >
                        <img
                          loading='lazy'
                          className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465bbc88_1_360x504.png?v=1655713343'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465bbc88_1_360x504.png?v=1655713343'
                          alt
                          sizes='257px'
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465bbc88_1_360x504.png?v=1655713343'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="501" height="797"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465bbc88_1_360x504.png?v=1655713343"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                        id={30752007028995}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465b7d35_360x504.png?v=1655713343'
                        data-sizes='auto'
                        width={897}
                        height={825}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465b7d35_360x504.png?v=1655713343'
                        alt='XS-M820-Black'
                        sizes='282px'
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465b7d35_360x504.png?v=1655713343'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="897" height="825"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01465b7d35_360x504.png?v=1655713343"
                        alt="XS-M820-Black"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-tolix-chair-xavier-pauchard'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>Tolix Chair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£114.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£229.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £114.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720543715587} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/modern-style-dexter-upholstered-dining-chair'
                  title='Dexter Style Upholstered Dining Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 497 }}
                      >
                        <img
                          loading='lazy'
                          className=' p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloading'
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_360x504.png?v=1655723388'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_360x504.png?v=1655723388'
                          alt
                          sizes='257px'
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_360x504.png?v=1655723388'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="497" height="783"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_360x504.png?v=1655723388"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className=' p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloading'
                        id={30753683374339}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_1_360x504.png?v=1655723388'
                        data-sizes='auto'
                        width={497}
                        height={783}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_1_360x504.png?v=1655723388'
                        alt='DF0108B-B205'
                        sizes='282px'
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_1_360x504.png?v=1655723388'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="497" height="783"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/dsx_style_upholstered_dining_chair_charcoal_grey_01_1_360x504.png?v=1655723388"
                        alt="DF0108B-B205"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/modern-style-dexter-upholstered-dining-chair'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Dexter Style Upholstered Dining Chair
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£214.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£429.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £214.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720574583043} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/modern-style-alfi-upholstered-dining-chair'
                  title='Alfi Style Upholstered Dining Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 711 }}
                      >
                        <img
                          loading='lazy'
                          className=' p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloading'
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_2_360x504.png?v=1655723318'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_2_360x504.png?v=1655723318'
                          alt
                          sizes='257px'
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_2_360x504.png?v=1655723318'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="711" height="831"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_2_360x504.png?v=1655723318"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className=' p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloading'
                        id={30753672954115}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_1_360x504.png?v=1655723318'
                        data-sizes='auto'
                        width={711}
                        height={831}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_1_360x504.png?v=1655723318'
                        alt='DF0106B-B201'
                        sizes='282px'
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_1_360x504.png?v=1655723318'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="711" height="831"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/df0106b-2_1_1_360x504.png?v=1655723318"
                        alt="DF0106B-B201"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/modern-style-alfi-upholstered-dining-chair'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Alfi Style Upholstered Dining Chair
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£229.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£459.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £229.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720574189827} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-charles-eames-dkr-wire-dining-chair'
                  title='DKR Style Wire Dining Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 455 }}
                      >
                        <img
                          loading='lazy'
                          className=' p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloading'
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c9672f82_360x504.png?v=1655723262'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c9672f82_360x504.png?v=1655723262'
                          alt
                          sizes='257px'
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c9672f82_360x504.png?v=1655723262'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="455" height="798"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c9672f82_360x504.png?v=1655723262"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className=' p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloading'
                        id={30753663222019}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dkr-black-base_360x504.png?v=1655723262'
                        data-sizes='auto'
                        width={481}
                        height={841}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dkr-black-base_360x504.png?v=1655723262'
                        alt='WJY15028B-ML001'
                        sizes='282px'
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/dkr-black-base_360x504.png?v=1655723262'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="481" height="841"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/dkr-black-base_360x504.png?v=1655723262"
                        alt="WJY15028B-ML001"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-charles-eames-dkr-wire-dining-chair'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    DKR Style Wire Dining Chair
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£159.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£319.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £159.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720573894915} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-charles-eames-bikini-wire-dining-chair'
                  title='Bikini Wire Dining Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 459 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c950af1d_360x504.png?v=1655723236'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c950af1d_360x504.png?v=1655723236'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="459" height="776"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c950af1d_360x504.png?v=1655723236"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30753659126019}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c94e1ae5_1_360x504.png?v=1655723236'
                        data-sizes='auto'
                        width={476}
                        height={795}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c94e1ae5_1_360x504.png?v=1655723236'
                        alt='WJY15028SL-C-Black'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="476" height="795"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c94e1ae5_1_360x504.png?v=1655723236"
                        alt="WJY15028SL-C-Black"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-charles-eames-bikini-wire-dining-chair'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Bikini Wire Dining Chair
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£224.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£449.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £224.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720573665539} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/modern-style-lucia-upholstered-patchwork-chair'
                  title='Lucia Style Upholstered - Patchwork'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 574 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/daw-patchwork-upholstery-1_1_360x504.png?v=1655723056'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/daw-patchwork-upholstery-1_1_360x504.png?v=1655723056'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="574" height="753"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/daw-patchwork-upholstery-1_1_360x504.png?v=1655723056"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30753628324099}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/daw-patchwork-upholstery-1_360x504.png?v=1655723056'
                        data-sizes='auto'
                        width={574}
                        height={753}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/daw-patchwork-upholstery-1_360x504.png?v=1655723056'
                        alt='XRB-047-AB2'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="574" height="753"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/daw-patchwork-upholstery-1_360x504.png?v=1655723056"
                        alt="XRB-047-AB2"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/modern-style-lucia-upholstered-patchwork-chair'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Lucia Style Upholstered - Patchwork
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£79.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£199.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £79.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720572780803} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/modern-style-lilly-plastic-chair'
                  title='Lilly Style Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 525 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c6d404ec_360x504.png?v=1655722939'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c6d404ec_360x504.png?v=1655722939'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="525" height="802"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c6d404ec_360x504.png?v=1655722939"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30753608007939}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c6af0945_1_360x504.png?v=1655722939'
                        data-sizes='auto'
                        width={504}
                        height={825}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c6af0945_1_360x504.png?v=1655722939'
                        alt='XS-020M-Black-P11'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="504" height="825"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00c6af0945_1_360x504.png?v=1655722939"
                        alt="XS-020M-Black-P11"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/modern-style-lilly-plastic-chair'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Lilly Style Chair
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£47.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£119.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £47.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720572420355} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-masterchair-philippe-starck'
                  title='Masterchair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 627 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/master-chair-white-bse_1_360x504.png?v=1655722723'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/master-chair-white-bse_1_360x504.png?v=1655722723'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="627" height="761"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/master-chair-white-bse_1_360x504.png?v=1655722723"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30753569407235}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/master-chair-white-bse_360x504.png?v=1655722723'
                        data-sizes='auto'
                        width={627}
                        height={761}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/master-chair-white-bse_360x504.png?v=1655722723'
                        alt='XS-050-White'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="627" height="761"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/master-chair-white-bse_360x504.png?v=1655722723"
                        alt="XS-050-White"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-masterchair-philippe-starck'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>Masterchair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£55.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£139.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £55.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720571764995} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-eero-saarinen-executive-armchair-velvet'
                  title='Executive Armchair - Velvet'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 547 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/executive_armchair_velvet_dark_aqua_01_1_360x504.png?v=1655722260'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/executive_armchair_velvet_dark_aqua_01_1_360x504.png?v=1655722260'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="547" height="783"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/executive_armchair_velvet_dark_aqua_01_1_360x504.png?v=1655722260"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30753480605955}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/executive_armchair_velvet_dark_aqua_01_360x504.png?v=1655722260'
                        data-sizes='auto'
                        width={547}
                        height={783}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/executive_armchair_velvet_dark_aqua_01_360x504.png?v=1655722260'
                        alt='9208BAM-B-Velvet-Dark-Aqua'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="547" height="783"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/executive_armchair_velvet_dark_aqua_01_360x504.png?v=1655722260"
                        alt="9208BAM-B-Velvet-Dark-Aqua"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-eero-saarinen-executive-armchair-velvet'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Executive Armchair - Velvet
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£369.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£739.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £369.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720569405699} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-mobelaris-beetle-dining-chair-full-upholstered-velvet'
                  title='Beetle Style Dining Chair - Full Upholstered Velvet'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 576 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_chair_green_velvet_black_legs_base_01_1_360x504.png?v=1655721751'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_chair_green_velvet_black_legs_base_01_1_360x504.png?v=1655721751'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="576" height="803"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_chair_green_velvet_black_legs_base_01_1_360x504.png?v=1655721751"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30753411137795}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_chair_green_velvet_black_legs_base_01_360x504.png?v=1655721751'
                        data-sizes='auto'
                        width={576}
                        height={803}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_chair_green_velvet_black_legs_base_01_360x504.png?v=1655721751'
                        alt='XRB-108-C-Green-Velvet-Black'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="576" height="803"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_chair_green_velvet_black_legs_base_01_360x504.png?v=1655721751"
                        alt="XRB-108-C-Green-Velvet-Black"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-mobelaris-beetle-dining-chair-full-upholstered-velvet'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Beetle Style Dining Chair - Full Upholstered Velvet
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£99.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£249.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £99.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720567243011} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-mobelaris-beetle-dining-chair-antique-brown'
                  title='Beetle Style Dining Chair - Antique Brown'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 551 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_dining_chair_brown_pu_black_01_1_360x504.png?v=1655721657'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_dining_chair_brown_pu_black_01_1_360x504.png?v=1655721657'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="551" height="781"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_dining_chair_brown_pu_black_01_1_360x504.png?v=1655721657"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30753401831683}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_dining_chair_brown_pu_black_01_2_360x504.png?v=1655721657'
                        data-sizes='auto'
                        width={551}
                        height={781}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_dining_chair_brown_pu_black_01_2_360x504.png?v=1655721657'
                        alt='XRB-108-B2-Black'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="551" height="781"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/beetle_dining_chair_brown_pu_black_01_2_360x504.png?v=1655721657"
                        alt="XRB-108-B2-Black"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-mobelaris-beetle-dining-chair-antique-brown'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Beetle Style Dining Chair - Antique Brown
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£95.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£239.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £95.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720566980867} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/black-style-wishbone-y-chair-hans-wegner-black-cord-3'
                  title='Wishbone (Y) Chair - CH24 - Black - Black Cord'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 662 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/classic-danish-black-wishbone-style-y-chair-with-black-seat-p9668-73902_zoom_copy_2_1_360x504.png?v=1655718887'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/classic-danish-black-wishbone-style-y-chair-with-black-seat-p9668-73902_zoom_copy_2_1_360x504.png?v=1655718887'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="662" height="814"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/classic-danish-black-wishbone-style-y-chair-with-black-seat-p9668-73902_zoom_copy_2_1_360x504.png?v=1655718887"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752959463683}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/classic-danish-black-wishbone-style-y-chair-with-black-seat-p9668-73902_zoom_copy_2_360x504.png?v=1655718887'
                        data-sizes='auto'
                        width={662}
                        height={814}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/classic-danish-black-wishbone-style-y-chair-with-black-seat-p9668-73902_zoom_copy_2_360x504.png?v=1655718887'
                        alt='XS-W03-Black-Black-2'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="662" height="814"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/classic-danish-black-wishbone-style-y-chair-with-black-seat-p9668-73902_zoom_copy_2_360x504.png?v=1655718887"
                        alt="XS-W03-Black-Black-2"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/black-style-wishbone-y-chair-hans-wegner-black-cord-3'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Wishbone (Y) Chair - CH24 - Black - Black Cord
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£149.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£299.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £149.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720560427267} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-hans-wegner-wishbone-chair-black-leather'
                  title='Wishbone (Y) Chair - CH24 - Black - Black Leather'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 585 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_chair_black_black_leather_01_360x504.png?v=1655718845'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_chair_black_black_leather_01_360x504.png?v=1655718845'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="585" height="784"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_chair_black_black_leather_01_360x504.png?v=1655718845"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752951075075}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_chair_black_black_leather_01_1_360x504.png?v=1655718845'
                        data-sizes='auto'
                        width={585}
                        height={784}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_chair_black_black_leather_01_1_360x504.png?v=1655718845'
                        alt='XS-W03F-Black-Black-Leather'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="585" height="784"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/wishbone_chair_black_black_leather_01_1_360x504.png?v=1655718845"
                        alt="XS-W03F-Black-Black-Leather"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-hans-wegner-wishbone-chair-black-leather'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Wishbone (Y) Chair - CH24 - Black - Black Leather
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£155.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£389.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £155.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720560132355} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/tulip-carver-chair-eero-saarinen'
                  title='Tulip Carver Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 603 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_carver_chair_upholstered_deep_red_white_01_1_360x504.png?v=1655717764'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_carver_chair_upholstered_deep_red_white_01_1_360x504.png?v=1655717764'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="603" height="810"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_carver_chair_upholstered_deep_red_white_01_1_360x504.png?v=1655717764"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752746471683}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_carver_chair_upholstered_pink_white_01_360x504.png?v=1655717764'
                        data-sizes='auto'
                        width={605}
                        height={826}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_carver_chair_upholstered_pink_white_01_360x504.png?v=1655717764'
                        alt='DF0110B-B209-FG502'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="605" height="826"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_carver_chair_upholstered_pink_white_01_360x504.png?v=1655717764"
                        alt="DF0110B-B209-FG502"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/tulip-carver-chair-eero-saarinen'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Tulip Carver Chair
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£279.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£699.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £279.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720558264579} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-pk9-chair-poul-kjaerholm'
                  title='PK9 Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 722 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/img_8246_1_360x504.jpg?v=1655717122'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/img_8246_1_360x504.jpg?v=1655717122'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="722" height="1039"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/img_8246_1_360x504.jpg?v=1655717122"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752636829955}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012afe0d56_360x504.png?v=1655717122'
                        data-sizes='auto'
                        width={535}
                        height={779}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012afe0d56_360x504.png?v=1655717122'
                        alt='938BA-KS2095'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="535" height="779"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012afe0d56_360x504.png?v=1655717122"
                        alt="938BA-KS2095"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-pk9-chair-poul-kjaerholm'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>PK9 Chair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£589.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£1,179.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £589.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720556396803} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/tulip-chair-upholstered-eero-saarinen'
                  title='Tulip Chair Upholstered'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 480 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/7_5_360x504.png?v=1655716820'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/7_5_360x504.png?v=1655716820'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="480" height="737"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/7_5_360x504.png?v=1655716820"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752590889219}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_chair_upholstered_red_01_360x504.png?v=1655716820'
                        data-sizes='auto'
                        width={511}
                        height={804}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_chair_upholstered_red_01_360x504.png?v=1655716820'
                        alt='DF0109B-209'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="511" height="804"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_chair_upholstered_red_01_360x504.png?v=1655716820"
                        alt="DF0109B-209"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/tulip-chair-upholstered-eero-saarinen'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>
                    Tulip Chair Upholstered
                  </h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£284.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£569.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £284.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720555741443} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-tulip-armchair-eero-saarinen'
                  title='Tulip Armchair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 602 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_armchair_charcoal_grey_01_1_360x504.png?v=1655716753'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_armchair_charcoal_grey_01_1_360x504.png?v=1655716753'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="602" height="813"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_armchair_charcoal_grey_01_1_360x504.png?v=1655716753"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752580993283}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_armchair_red_01_360x504.png?v=1655716753'
                        data-sizes='auto'
                        width={602}
                        height={813}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_armchair_red_01_360x504.png?v=1655716753'
                        alt='DF0110-B209'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="602" height="813"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/tulip_armchair_red_01_360x504.png?v=1655716753"
                        alt="DF0110-B209"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-tulip-armchair-eero-saarinen'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>Tulip Armchair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£299.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£599.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £299.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720555577603} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-wire-chair-harry-bertoia'
                  title='Wire Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 605 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00fecbf4ba_1_1_360x504.png?v=1655716096'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00fecbf4ba_1_1_360x504.png?v=1655716096'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="605" height="789"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00fecbf4ba_1_1_360x504.png?v=1655716096"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752477937923}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00fecbf4ba_1_1_1_360x504.png?v=1655716096'
                        data-sizes='auto'
                        width={605}
                        height={789}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00fecbf4ba_1_1_1_360x504.png?v=1655716096'
                        alt='WJY15109S-B-ML001'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="605" height="789"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa00fecbf4ba_1_1_1_360x504.png?v=1655716096"
                        alt="WJY15109S-B-ML001"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-wire-chair-harry-bertoia'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>Wire Chair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£163.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£409.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £163.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720554529027} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          60%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-pratfall-chair-philippe-starck'
                  title='Pratfall Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 621 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012aef3ebb_1_1_360x504.png?v=1655715920'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012aef3ebb_1_1_360x504.png?v=1655715920'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="621" height="793"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012aef3ebb_1_1_360x504.png?v=1655715920"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752449659139}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012aef2574_1_360x504.png?v=1655715920'
                        data-sizes='auto'
                        width={622}
                        height={803}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012aef2574_1_360x504.png?v=1655715920'
                        alt='8806BA-KS2095'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="622" height="803"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012aef2574_1_360x504.png?v=1655715920"
                        alt="8806BA-KS2095"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-pratfall-chair-philippe-starck'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>Pratfall Chair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£339.60</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£849.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £339.60
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720554070275} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-pk11-chair-poul-kjaerholm'
                  title='PK11 Chair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 687 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012af7404d_360x504.png?v=1655715900'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012af7404d_360x504.png?v=1655715900'
                          alt
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="687" height="787"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012af7404d_360x504.png?v=1655715900"
                          alt=""&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752446054659}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012af7404d_1_360x504.png?v=1655715901'
                        data-sizes='auto'
                        width={687}
                        height={787}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012af7404d_1_360x504.png?v=1655715901'
                        alt='955BA-KS2095'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="687" height="787"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa012af7404d_1_360x504.png?v=1655715901"
                        alt="955BA-KS2095"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-pk11-chair-poul-kjaerholm'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>PK11 Chair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£429.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£859.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £429.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720554004739} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
          <li
            className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='w-full min-h-full'>
              <div className='relative'>
                <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
                  <img
                    loading='lazy'
                    className='absolute inset-0 w-full h-full '
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                    src='//cdn.shopify.com/s/files/1/0648/7883/8019/t/2/assets/badge_discount_140x.png?v=174543060723340019611657009653'
                  />
                  <svg
                    className='absolute inset-0 w-full h-full rounded-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    viewBox='0 0 200 200'
                  >
                    <circle cx={100} cy={100} r={100} fill='transparent' id='background' />
                    <g>
                      <path
                        id='svg-text'
                        d='M 0 90 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        className='font-heading'
                        font-fa
                        fill='currentColor'
                        fontSize='66px'
                        x={100}
                        y={100}
                        dy='15px'
                        textAnchor='middle'
                      >
                        <textPath
                          xlinkHref='#svg-text'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          50%
                        </textPath>
                      </text>
                      <path
                        id='svg-text-bottom'
                        d='M 0 145 H 200'
                        fill='transparent'
                        stroke='transparent'
                      />
                      <text
                        fill='currentColor'
                        fontSize='40px'
                        x={100}
                        y={130}
                        textAnchor='middle'
                        dominantBaseline='text-bottom'
                      >
                        <textPath
                          xlinkHref='#svg-text-bottom'
                          method='stretch'
                          lengthAdjust='spacingAndGlyphs'
                        >
                          OFF
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <a
                  className='block'
                  href='/products/style-platner-dining-warren-platner'
                  title='Platner Armchair'
                >
                  <div className=' group p-[4%] border'>
                    <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
                      <div
                        className='!w-full relative mx-auto'
                        style={{ paddingBottom: '100%', maxWidth: 717 }}
                      >
                        <img
                          loading='lazy'
                          className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade  '
                          id
                          src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01464b819f_2_1_1_360x504.png?v=1655715650'
                          data-sizes='auto'
                          width
                          height
                          data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01464b819f_2_1_1_360x504.png?v=1655715650'
                          alt='9137BA-KS2095'
                        />
                        <noscript>
                          &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                          object-contain " width="717" height="796"
                          src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01464b819f_2_1_1_360x504.png?v=1655715650"
                          alt="9137BA-KS2095"&gt;
                        </noscript>
                      </div>
                    </div>
                    <div className='invisible transition-opacity duration-700 opacity-0 group-hover:visible group-hover:opacity-100'>
                      <img
                        loading='lazy'
                        className='lazyload p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade   '
                        id={30752397132035}
                        src='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01464c597f_1_1_1_360x504.png?v=1655715650'
                        data-sizes='auto'
                        width={845}
                        height={792}
                        data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01464c597f_1_1_1_360x504.png?v=1655715650'
                        alt='9137BA-KS2095'
                      />
                      <noscript>
                        &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                        object-contain" width="845" height="792"
                        src="//cdn.shopify.com/s/files/1/0648/7883/8019/products/5aa01464c597f_1_1_1_360x504.png?v=1655715650"
                        alt="9137BA-KS2095"&gt;
                      </noscript>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex flex-col items-center mt-3 text-center '>
                <a
                  href='/products/style-platner-dining-warren-platner'
                  className='js-product-details-link'
                >
                  <p className='product__subtitle hidden-desktop' />
                  <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>Platner Armchair</h3>
                </a>
                <dl className='price price--listing price--on-sale '>
                  <div className='hidden price__regular'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Regular</span>
                    </dt>
                    <dd>
                      <span className='price-item price-item--regular text-sale'>£814.50</span>
                    </dd>
                  </div>
                  <div className='flex gap-2 price__sale'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Sale</span>
                    </dt>
                    <div className='price__compare'>
                      <dt>
                        <span className='visually-hidden visually-hidden--inline'>Regular</span>
                      </dt>
                      <dd>
                        <s className='text-gray-400 price-item price-item--regular'>£1,629.00</s>
                      </dd>
                    </div>
                    <dd>
                      <span className='text-base price-item price-item--sale text-sale'>
                        £814.50
                      </span>
                    </dd>
                  </div>
                  <div className='hidden price__unit'>
                    <dt>
                      <span className='visually-hidden visually-hidden--inline'>Unit Price</span>
                    </dt>
                    <dd className='price-unit-price'>
                      <span />
                      <span aria-hidden='true'>/</span>
                      <span className='visually-hidden'>per&nbsp;</span>
                      <span />
                    </dd>
                  </div>
                </dl>
                <div className='small-desc' />
                <div className='flex'>
                  <p className='product__subtitle' />
                  <span className='shopify-product-reviews-badge' data-id={7720552300803} />
                </div>
                {/* **BEGIN** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
                {/* "snippets/hextom_usb_coll.liquid" was not rendered, the associated app was uninstalled */}
                {/* **END** Hextom USB Integration // Collection Include - DO NOT MODIFY */}
              </div>
            </div>
          </li>
        </ul>
        <input className='hidden ' hidden id='post-none' name='instagram' type='radio' />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n                                scrolling-arrow-left,scrolling-arrow-right{\n                                  display:block\n                                }\n                                ',
          }}
        />
        <scrolling-arrow-left hidden='true'>
          <button className='absolute -left-4 text-gray-500 !m-0  items-center justify-center w-8 h-8 text-2xl transform rotate-180 translate-y-1/2 rounded-full pointer-events-auto bottom-1/2 bg-base-100 bg-opacity-60 hover:bg-opacity-100 hover:shadow'>
            <svg
              className='m-auto'
              width='1em'
              height='1em'
              fill='none'
              strokeWidth='0.03em'
              stroke='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 8.14 14.74'
            >
              <g>
                <polyline points='0.74 14.07 6.79 7.41 0.74 0.67' />
              </g>
            </svg>
          </button>
        </scrolling-arrow-left>
        <scrolling-arrow-right>
          <button className='absolute  -right-4 text-gray-500 !m-0 flex items-center justify-center w-8 h-8 text-2xl translate-y-1/2 rounded-full  pointer-events-auto bottom-1/2 bg-base-100 bg-opacity-60 hover:bg-opacity-100 hover:shadow'>
            <svg
              className='m-auto'
              width='1em'
              height='1em'
              fill='none'
              strokeWidth='0.03em'
              stroke='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 8.14 14.74'
            >
              <g>
                <polyline points='0.74 14.07 6.79 7.41 0.74 0.67' />
              </g>
            </svg>
          </button>
        </scrolling-arrow-right>
      </scrolling-carousel>
    </div>
  )
}
const Block3 = () => (
  <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  mt-10 mb-14 flex flex-col items-center'>
    <a className='max-w-3xl mx-auto text-center'>
      <h2 className='text-[26px] m-0'>SEARCH BY GENRE</h2>
      <div className='py-3 mt-2 border-t border-black border-solid'>
        <p>
          Rustic Moderm, Bauhaus, Mid Century or colourful 70's style, Mobelaris have a broad range
          of designs to fullfill all&nbsp;aspirations.
        </p>
      </div>
    </a>
    <ul className='grid w-full grid-cols-1 gap-3 list-none sm:grid-cols-2 md:grid-cols-3 md:gap-6'>
      <li>
        <a
          href='/search?type=product&q=Bauhaus Furniture'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 754 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579235250435}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-bahaus_754x.png?v=1655453994'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-bahaus_754x.png?v=1655453994'
                alt
                sizes='384px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-bahaus_754x.png?v=1655453994'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="754" height="426"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-bahaus_754x.png?v=1655453994"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            Bauhaus Furniture
          </h3>
          <div className='text-sm'>
            <p>
              If you want functional, simplistic designs to decorate your space, our selection of
              Bauhaus Furniture is perfect for you.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          href='/search?type=product&q=Industrial Furniture'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 754 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579428057347}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-industrial_754x.png?v=1655712302'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-industrial_754x.png?v=1655712302'
                alt
                sizes='384px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-industrial_754x.png?v=1655712302'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="754" height="426"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-industrial_754x.png?v=1655712302"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            Industrial Furniture
          </h3>
          <div className='text-sm'>
            <p>
              Mobelaris has an array of modern and vintage industrial furniture that will
              beautifully transform your living or working space.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          href='/search?type=product&q=Office Furniture'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 754 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579428188419}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-office-furniture_754x.png?v=1655712302'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-office-furniture_754x.png?v=1655712302'
                alt
                sizes='384px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-office-furniture_754x.png?v=1655712302'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="754" height="426"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-office-furniture_754x.png?v=1655712302"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            Office Furniture
          </h3>
          <div className='text-sm'>
            <p>
              Elegant, quality and affordable pieces of high-quality replicas of designer items that
              your home or office deserves.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          href='/pages/ch23-chair'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 754 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579428221187}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-ch23_754x.png?v=1655712302'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-ch23_754x.png?v=1655712302'
                alt
                sizes='384px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-ch23_754x.png?v=1655712302'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="754" height="426"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-ch23_754x.png?v=1655712302"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            CH23 Chairs
          </h3>
          <div className='text-sm'>
            <p>
              The CH23 Chair, a wooden dining chair with paper cord seat, it has been the best
              seller since it was released.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          href='/products/noguchi-coffee-table'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 754 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579428155651}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-noguchi_754x.png?v=1655712302'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-noguchi_754x.png?v=1655712302'
                alt
                sizes='384px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-noguchi_754x.png?v=1655712302'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="754" height="426"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-noguchi_754x.png?v=1655712302"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            Noguchi Coffee Tables
          </h3>
          <div className='text-sm'>
            <p>
              A triumph of minimalist design that combines natural and man-made materials for a
              stunning effect.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          href='/products/style-artichoke-lamp-poul-henningsen'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 299 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579425894659}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-pendant-lights_299x.png?v=1655710906'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-pendant-lights_299x.png?v=1655710906'
                alt
                sizes='299px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-pendant-lights_299x.png?v=1655710906'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="299" height="180"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/designer-pendant-lights_299x.png?v=1655710906"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            Artichoke Lamps
          </h3>
          <div className='text-sm'>
            <p>
              Our replica of the Artichoke Lamp portrays the classic feel of the early 60’s because
              of its luxurious design.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          href='/pages/ch24-chair'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 754 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579428253955}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-wishbone_754x.png?v=1655712302'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-wishbone_754x.png?v=1655712302'
                alt
                sizes='384px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-wishbone_754x.png?v=1655712302'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="754" height="426"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-wishbone_754x.png?v=1655712302"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            Wishbone (Y) Chair - CH24
          </h3>
          <div className='text-sm'>
            <p>
              Captures the quintessential Danish mid-century modern design. Truly a unique piece to
              elevate any space.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          href='/pages/camaleonda'
          className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
        >
          <div className='w-full bg-gray-100 '>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '60%', maxWidth: 754 }}
            >
              <img
                loading='lazy'
                className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                id={579428090115}
                data-src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-camaleonda_754x.png?v=1655712302'
                data-sizes='auto'
                width
                height
                data-original='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-camaleonda_754x.png?v=1655712302'
                alt
                sizes='384px'
                src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-camaleonda_754x.png?v=1655712302'
              />
              <noscript>
                &lt;img loading="lazy" class="border-none absolute inset-0 !w-full !h-full
                object-cover " width="754" height="426"
                src="//cdn.shopify.com/s/files/1/0648/7883/8019/files/premium-collection-camaleonda_754x.png?v=1655712302"
                alt=""&gt;
              </noscript>
            </div>
          </div>
          <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
            Camaleonda Style Sofa
          </h3>
          <div className='text-sm'>
            <p>
              containerRef.current masterpiece is built for comfort. Nothing suggest relaxation and
              mellowed vibe more than containerRef.current unique chair.
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
)
const NewLetter = () => (
  <div id='shopify-section-newsletter' className='bg-[#eef5f1]'>
    <div className='px-4 pt-8 pb-0 '>
      <section id='newsletters' className='py-8'>
        <div className='max-w-[1264px]  w-full px-4 sm:px-8 mx-auto  flex flex-col items-center lg:flex-row gap-6 justify-between'>
          <div className='max-w-sm text-center '>
            <div className='mb-4'>
              <h2>Join our mailing list</h2>
            </div>
            <p>
              Get new products and promotions in your inbox. We’re not clingy, you can unsubscribe
              at any time.
            </p>
          </div>
          <div className='flex justify-center flex-1 klaviyo_wrap lg:justify-end'>
            <div className='flex-1 w-full max-w-sm section-newsletter'>
              <form
                method='post'
                action='/contact#contact_form'
                id='contact_form'
                acceptCharset='UTF-8'
                className='contact-form'
              >
                <input type='hidden' name='form_type' defaultValue='customer' />
                <input type='hidden' name='utf8' defaultValue='✓' />
                <div className='flex w-full lg:justify-end input-group password__input-group'>
                  <input type='hidden' name='contact[tags]' defaultValue='newsletter' />
                  <input
                    type='email'
                    name='contact[email]'
                    id='Email'
                    className='w-full px-3'
                    placeholder='Email address'
                    autoCorrect='off'
                    autoCapitalize='off'
                  />
                  <button
                    type='submit'
                    className='min-w-[100px] btn newsletter__submit'
                    name='commit'
                    id='Subscribe'
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)
const Footer = () => (
  <footer
    className='py-16 pb-32 footer-section lg:pb-16'
    data-section-id='footer'
    data-section-type='footer-section'
  >
    <div
      className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  

flex flex-col gap-12'
    >
      <a href className='w-full'>
        <img
          className='w-[200px]'
          src='//cdn.shopify.com/s/files/1/0648/7883/8019/files/LOGO-MOBELARIS_Final_1_copy.png?v=1655967119&width=240'
          alt
        />
      </a>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <div className='flex flex-col gap-6 lg:max-w-md'>
          <div>
            Hand Made Style Designer Furniture from around the world come together at Mobelaris,
            bringing you a vast range of designer furniture, lighting and accessories at a fraction
            of the high street price.
          </div>
          <div className='flex justify-start '>
            <ul id='social-icons'>
              <li>
                <a href='https://www.facebook.com/Mobelaris.uk' target='_blank' rel='noreferrer'>
                  <i className='fab fa-facebook-f la-x' aria-hidden='true' />
                </a>
              </li>
              <li>
                <a href='//instagram.com/mobelarisfurniture' target='_blank' rel='noreferrer'>
                  <i className='fab fa-instagram la-x' aria-hidden='true' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/mobelaris' target='_blank' rel='noreferrer'>
                  <i className='la la-twitter la-x' aria-hidden='true' />
                </a>
              </li>
              <li>
                <a href='https://www.pinterest.co.uk/mobelaris/' target='_blank' rel='noreferrer'>
                  <i className='la la-pinterest la-x' aria-hidden='true' />
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <div>
              <span className='mr-3 opacity-70'>Address: </span>
              <a
                target='_blank'
                href='https://www.google.com/search?q=85 Great Portland street, First Floor, London, W1W 7LT'
                rel='noreferrer'
              >
                85 Great Portland street, First Floor, London, W1W 7LT
              </a>
            </div>
            <div>
              <span className='mr-3 opacity-70'>Contact Us: </span>
              <a href='tel:02081449316' target='_blank' title='tel:02081449316' rel='noreferrer'>
                02081449316
              </a>
            </div>
            <div>
              <span className='mr-3 opacity-70'>Email: </span>
              <a href='mailto:customersupport@mobelaris.com'>customersupport@mobelaris.com</a>
            </div>
          </div>
        </div>
        <div
          className='flex flex-col flex-wrap justify-start flex-1 gap-3 xl:flex-nowrap md:flex-row lg:gap-6'
          id='footer'
        >
          <div
            className='w-full  
          md:w-1/3 lg:w-1/4 lg:max-w-[200px]
         footer-menu'
          >
            <label className='togglecontent col-span-full ' htmlFor='menu-item-1'>
              <h4 className='text-left uppercase '>CATEGORIES</h4>
            </label>
            <input id='menu-item-1' type='checkbox' />
            <div className='footer-block-content'>
              <ul className='list-none '>
                <li>
                  <a href='/collections/chairs' title>
                    Chairs
                  </a>
                </li>
                <li>
                  <a href='/collections/sofas' title>
                    Sofas
                  </a>
                </li>
                <li>
                  <a href='/collections/lighting' title>
                    Lighting
                  </a>
                </li>
                <li>
                  <a href='/collections/tables' title>
                    Tables
                  </a>
                </li>
                <li>
                  <a href='/collections/accessories' title>
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n                input#menu-item-1 {\n                    display: none;\n                    position: relative;\n                }\n\n                @media screen and (max-width: 740px) {\n                    .footer-block-content {\n                        display: none;\n                    }\n\n                    #menu-item-1:checked~.footer-block-content,\n                    #footer .footer-index-4 .footer-block-content {\n                        display: block !important;\n                        visibility: visible !important;\n                        opacity: 1 !important;\n                    }\n            ',
            }}
          />
          <div
            className='w-full  
          md:w-2/3 lg:w-1/2 lg:max-w-[440px]   
           footer-menu'
          >
            <label className='togglecontent col-span-full ' htmlFor='menu-item-2'>
              <h4 className='text-left uppercase '>INFORMATION</h4>
            </label>
            <input id='menu-item-2' type='checkbox' />
            <div className='footer-block-content'>
              <ul className='grid grid-cols-2 list-none '>
                <li>
                  <a href='/pages/about-us' title>
                    About us
                  </a>
                </li>
                <li>
                  <a href='/pages/covid-19-faq' title>
                    Covid-19 FAQ
                  </a>
                </li>
                <li>
                  <a href='/pages/contact' title>
                    Contact us
                  </a>
                </li>
                <li>
                  <a href='/pages/terms-conditions' title>
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href='/pages/privacy-policy' title>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='/pages/return-refunds' title>
                    Return &amp; Refunds
                  </a>
                </li>
                <li>
                  <a href='/pages/trade' title>
                    Trade
                  </a>
                </li>
                <li>
                  <a href='/blogs/faq/the-big-brexit-questions' title>
                    Brexit
                  </a>
                </li>
                <li>
                  <a href='/pages/faqs' title>
                    Faqs
                  </a>
                </li>
                <li>
                  <a href='/pages/transparency-policy' title>
                    Transparency Policy
                  </a>
                </li>
                <li>
                  <a href='/pages/ethical-trading-policy' title>
                    Ethical Trading
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n                input#menu-item-2 {\n                    display: none;\n                    position: relative;\n                }\n\n                @media screen and (max-width: 740px) {\n                    .footer-block-content {\n                        display: none;\n                    }\n\n                    #menu-item-2:checked~.footer-block-content,\n                    #footer .footer-index-4 .footer-block-content {\n                        display: block !important;\n                        visibility: visible !important;\n                        opacity: 1 !important;\n                    }\n            ',
            }}
          />
          <div
            className='w-full  
          md:w-1/3 lg:w-1/4 lg:max-w-[200px]
         footer-menu'
          >
            <label className='togglecontent col-span-full ' htmlFor='menu-item-3'>
              <h4 className='text-left uppercase '>ACCOUNT</h4>
            </label>
            <input id='menu-item-3' type='checkbox' />
            <div className='footer-block-content'>
              <ul className='list-none '>
                <li>
                  <a href='/account' title>
                    My account
                  </a>
                </li>
                <li>
                  <a href='/pages/order-tracking' title>
                    Order tracking
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n                input#menu-item-3 {\n                    display: none;\n                    position: relative;\n                }\n\n                @media screen and (max-width: 740px) {\n                    .footer-block-content {\n                        display: none;\n                    }\n\n                    #menu-item-3:checked~.footer-block-content,\n                    #footer .footer-index-4 .footer-block-content {\n                        display: block !important;\n                        visibility: visible !important;\n                        opacity: 1 !important;\n                    }\n            ',
            }}
          />
        </div>
      </div>
      <div
        className=' w-full flex !items-center justify-between flex-col lg:flex-row gap-6'
        id='bottom-footer'
      >
        <div className='text-center footer-left'>
          <div className='flex-1'>
            <div className='flex justify-center gap-3 lg:justify-start' />
            <div className='flex flex-col lg:flex-row lg:gap-6 leading-[30px] mt-[10px]'>
              <div className='text-center small-links'>
                <a className='ph2' href='/pages/privacy-policy'>
                  Privacy Policy
                </a>
                |
                <a className='ph2' href='/pages/terms-conditions'>
                  Terms &amp; Conditions
                </a>
              </div>
              <div className='text-center'>
                <a href='/'>© 2022 Mobelaris</a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1' />
        <div id='payment'>
          <div className='flex flex-wrap gap-2 text-center payment-methods lg:text-right'>
            <svg
              className='payment-icon'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              viewBox='0 0 38 24'
              width={38}
              height={24}
              aria-labelledby='pi-american_express'
            >
              <title id='pi-american_express'>American Express</title>
              <g fill='none'>
                <path
                  fill='#000'
                  d='M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z'
                  opacity='.07'
                />
                <path
                  fill='#006FCF'
                  d='M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1'
                />
                <path
                  fill='#FFF'
                  d='M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z'
                />
              </g>
            </svg>
            <svg
              className='payment-icon'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              width={38}
              height={24}
              aria-labelledby='pi-diners_club'
            >
              <title id='pi-diners_club'>Diners Club</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              />
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              />
              <path
                d='M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z'
                fill='#3086C8'
              />
            </svg>
            <svg
              className='payment-icon'
              viewBox='0 0 38 24'
              width={38}
              height={24}
              role='img'
              aria-labelledby='pi-discover'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title id='pi-discover'>Discover</title>
              <path
                fill='#000'
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              />
              <path
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z'
                fill='#fff'
              />
              <path
                d='M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z'
                fill='#231F20'
              />
              <path
                d='M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z'
                fill='url(#pi-paint0_linear)'
              />
              <path
                opacity='.65'
                d='M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z'
                fill='url(#pi-paint1_linear)'
              />
              <path
                d='M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z'
                fill='#231F20'
              />
              <path
                d='M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z'
                fill='#231F20'
              />
              <path
                d='M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z'
                fill='#F48120'
              />
              <defs>
                <linearGradient
                  id='pi-paint0_linear'
                  x1='21.657'
                  y1='12.275'
                  x2='19.632'
                  y2='9.104'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F89F20' />
                  <stop offset='.25' stopColor='#F79A20' />
                  <stop offset='.533' stopColor='#F68D20' />
                  <stop offset='.62' stopColor='#F58720' />
                  <stop offset='.723' stopColor='#F48120' />
                  <stop offset={1} stopColor='#F37521' />
                </linearGradient>
                <linearGradient
                  id='pi-paint1_linear'
                  x1='21.338'
                  y1='12.232'
                  x2='18.378'
                  y2='6.446'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F58720' />
                  <stop offset='.359' stopColor='#E16F27' />
                  <stop offset='.703' stopColor='#D4602C' />
                  <stop offset='.982' stopColor='#D05B2E' />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className='payment-icon'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              width={38}
              height={24}
              role='img'
              aria-labelledby='pi-maestro'
            >
              <title id='pi-maestro'>Maestro</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              />
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              />
              <circle fill='#EB001B' cx={15} cy={12} r={7} />
              <circle fill='#00A2E5' cx={23} cy={12} r={7} />
              <path
                fill='#7375CF'
                d='M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z'
              />
            </svg>
            <svg
              className='payment-icon'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              width={38}
              height={24}
              aria-labelledby='pi-master'
            >
              <title id='pi-master'>Mastercard</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              />
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              />
              <circle fill='#EB001B' cx={15} cy={12} r={7} />
              <circle fill='#F79E1B' cx={23} cy={12} r={7} />
              <path
                fill='#FF5F00'
                d='M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z'
              />
            </svg>
            <svg
              className='payment-icon'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              width={38}
              height={24}
              aria-labelledby='pi-visa'
            >
              <title id='pi-visa'>Visa</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              />
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              />
              <path
                d='M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z'
                fill='#142688'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
const Banner = () => (
  <div className='bg-[#f9f9f9]'>
    <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto '>
      <div className='pt-[50%]' />
    </div>
  </div>
)
