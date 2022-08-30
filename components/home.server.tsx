import Link from 'next/link'
import { cloneElement, useEffect, useRef } from 'react'
import { Trans, useTrans } from '../lib/i18n/I18nProvider'
import homeResult from './home.data'
import { Image } from './ui/Image'
import { Layout } from './ui/Layout'
import { Price } from './ui/Price'

const mapBlocks = ({ block_order, blocks }) => block_order?.map((id) => blocks[id])
const createItemHolder = (node, size = 8) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, react/no-array-index-key
  new Array(size).fill(node).map((e, i) => cloneElement(e, { key: i }))

const Block1 = ({ block_order, blocks, settings: { content, heading } }) => {
  const t = useTrans()
  return (
    <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  mt-10 mb-14 flex flex-col items-center'>
      <a className='max-w-3xl mx-auto text-center'>
        <h2 className='text-[26px] m-0'>
          <Trans id={heading} />
        </h2>
        <div
          className='py-3 mt-2 border-t border-black border-solid'
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      </a>
      <ul className='grid w-full grid-cols-1 gap-3 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6'>
        {mapBlocks({ block_order, blocks })?.map(({ settings: { heading, image, url } }, i) => (
          <li key={i}>
            <Link href={url}>
              <a className='relative flex items-center justify-center group'>
                <div
                  className='inset-0 w-full h-full bg-gray-100 '
                  style={{ paddingBottom: '60%' }}
                >
                  <Image
                    loading='lazy'
                    className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                    sizes='282px'
                    src={image}
                  />
                </div>
                <h3 className='py-1 uppercase text-center absolute px-3 rounded-lg m-0 max-w-[80%] bg-white group-hover:border border-black border-solid font-body md:text-xl'>
                  <Trans id={heading} />
                </h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
const ProductListItem = ({ name, price_range, small_image }) => (
  <div className='w-full min-h-full'>
    <div className='relative'>
      <div className='absolute before:block before:w-full before:pt-[100%] text-[#707070]  tent max-w-[70px] w-[25%] z-10 top-2 right-2 aspect-square'>
        <Image
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
            <path id='svg-text' d='M 0 90 H 200' fill='transparent' stroke='transparent' />
            <text
              className='font-heading'
              fill='currentColor'
              fontSize='66px'
              x={100}
              y={100}
              dy='15px'
              textAnchor='middle'
            >
              <textPath xlinkHref='#svg-text' method='stretch' lengthAdjust='spacingAndGlyphs'>
                50%
              </textPath>
            </text>
            <path id='svg-text-bottom' d='M 0 145 H 200' fill='transparent' stroke='transparent' />
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
      <a className='block' href='/products/style-arne-jacobsen-drop-chair' title='Drop Chair'>
        <div className=' group p-[4%] border'>
          <div className='relative transition-opacity duration-700 opacity-100 group-hover:opacity-0'>
            <div
              className='!w-full relative mx-auto'
              style={{ paddingBottom: '100%', maxWidth: 494 }}
            >
              <Image
                loading='lazy'
                className='p-[4%] border-none absolute inset-0 !w-full !h-full object-contain lazyload-fade lazyautosizes lazyloaded'
                src={small_image.url}
              />
            </div>
          </div>
        </div>
      </a>
    </div>
    <div className='flex flex-col items-center mt-3 text-center '>
      <a href='/products/style-arne-jacobsen-drop-chair' className='js-product-details-link'>
        <p className='product__subtitle hidden-desktop' />
        <h3 className='flex font-heading text-sm lg:text-[15px] m-0'>{name}</h3>
      </a>
      <dl className='price price--listing price--on-sale '>
        <div className='hidden price__regular'>
          <dt>
            <span className='visually-hidden visually-hidden--inline'>Regular</span>
          </dt>
          <dd>
            <span className='price-item price-item--regular text-sale'>
              <Price {...price_range.minimum_price.final_price} />
            </span>
          </dd>
        </div>
        <div className='flex gap-2 price__sale'>
          <dt>
            <span className='visually-hidden visually-hidden--inline'>Sale</span>
          </dt>
          {price_range.minimum_price.regular_price.value >
            price_range.minimum_price.final_price.value && (
            <div className='price__compare'>
              <dt>
                <span className='visually-hidden visually-hidden--inline'>Regular</span>
              </dt>
              <dd>
                <s className='text-gray-400 price-item price-item--regular'>
                  <Price {...price_range.minimum_price.regular_price} />
                </s>
              </dd>
            </div>
          )}
          <dd>
            <span className='text-base price-item price-item--sale text-sale'>
              <Price {...price_range.minimum_price.final_price} />
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
    </div>
  </div>
)
const Block2 = ({ block_order, blocks, settings: { content, heading }, home }) => {
  const t = useTrans()
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {})
    const start = () => {
      if (!containerRef.current) return
      const sroller = containerRef.current.querySelector('ul')
      if (!sroller) throw new Error('missing scrolelr')
      const arrowLeft = containerRef.current.querySelector('.scrolling-arrow-left')
      const arrowRight = containerRef.current.querySelector('.scrolling-arrow-right')
      if (arrowRight) {
        arrowRight.addEventListener('click', () => {
          sroller.scrollLeft += sroller.clientWidth
        })
      }
      if (arrowLeft) {
        arrowLeft.addEventListener('click', () => {
          sroller.scrollLeft -= sroller.clientWidth
        })
      }
      const valid = () => {
        if (sroller.scrollLeft === 0) {
          arrowLeft?.setAttribute('hidden', 'true')
        } else {
          arrowLeft?.removeAttribute('hidden')
        }
        if (sroller.scrollLeft + sroller.clientWidth === sroller.scrollWidth) {
          arrowRight?.setAttribute('hidden', 'true')
        } else {
          arrowRight?.removeAttribute('hidden')
        }
      }
      sroller.addEventListener(
        'scroll',
        () => {
          if (!timer) {
            clearTimeout(timer)
          } else {
            timer = setTimeout(valid, 150)
          }
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
    if (containerRef.current) {
      new IntersectionObserver(handleIntersection.bind(containerRef.current), {
        rootMargin: '0px 0px 500px 0px',
      }).observe(containerRef.current)
    }
  }, [])

  return (
    <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  mt-10 mb-14 flex flex-col items-center overflow-hidden'>
      <a className='max-w-3xl mx-auto text-center'>
        <h2 className='text-[26px] m-0'>
          <Trans id={heading} />
        </h2>
        <div
          className='py-3 mt-2 border-t border-black border-solid'
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      </a>
      <div ref={containerRef} className='relative block w-full '>
        <ul className='m-0 carousel carousel-center lg:gap-6 gap-[1vw] w-full'>
          {home?.categories.items[0].products.items.map((product, i) => (
            <li
              key={i}
              className='carousel-item w-[100%] md:w-[30vw] lg:w-[calc((100%-72px)/4)] xl:w-[282px] '
            >
              <ProductListItem {...product} />
            </li>
          ))}
        </ul>
        <input className='hidden ' hidden id='post-none' name='instagram' type='radio' />

        <div className='scrolling-arrow-left' hidden>
          <button
            type='button'
            className='absolute -left-4 text-gray-500 !m-0  items-center justify-center w-8 h-8 text-2xl transform rotate-180 translate-y-1/2 rounded-full pointer-events-auto bottom-1/2 bg-base-100 bg-opacity-60 hover:bg-opacity-100 hover:shadow'
          >
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
        </div>
        <div className='scrolling-arrow-right' hidden>
          <button
            type='button'
            className='absolute  -right-4 text-gray-500 !m-0 flex items-center justify-center w-8 h-8 text-2xl translate-y-1/2 rounded-full  pointer-events-auto bottom-1/2 bg-base-100 bg-opacity-60 hover:bg-opacity-100 hover:shadow'
          >
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
        </div>
      </div>
    </div>
  )
}
const Block3 = ({ block_order, blocks, settings: { content, heading } }) => {
  const t = useTrans()
  return(
    <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto  mt-10 mb-14 flex flex-col items-center'>
      <a className='max-w-3xl mx-auto text-center'>
        <h2 className='text-[26px] m-0'>
          <Trans id={heading} />
        </h2>
        <div
          className='py-3 mt-2 border-t border-black border-solid'
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      </a>

      <ul className='grid w-full grid-cols-1 gap-3 list-none sm:grid-cols-2 md:grid-cols-3 md:gap-6'>
        {mapBlocks({ block_order, blocks })?.map(
          ({ settings: { heading, content, image, url } }, i) => (
            <li key={i}>
              <Link href={url}>
                <a
                  href={url}
                  className='group text-center aspect-[278/174] relative flex flex-col items-center justify-center'
                >
                  <div className='w-full bg-gray-100 '>
                    <div
                      className='!w-full relative mx-auto'
                      style={{ paddingBottom: '60%', maxWidth: 754 }}
                    >
                      <Image
                        loading='lazy'
                        className='p-0 border-none absolute inset-0 !w-full !h-full object-cover lazyload-fade lazyautosizes lazyloaded'
                        sizes='384px'
                        src={image}
                      />
                    </div>
                  </div>
                  <h3 className=' mt-4 mb-2 hover:underline text-center relative rounded-lg m-0 max-w-[80%] bg-white md:text-xl'>
                    <Trans id={heading} />
                  </h3>
                  <div className='text-sm' dangerouslySetInnerHTML={{ __html: t(content) }}>
                  
                  </div>
                </a>
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>,
  )
}
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

const Banner = () => (
  <div className='bg-[#f9f9f9]'>
    <div className='max-w-[1264px] w-full px-4 sm:px-8 mx-auto '>
      <div className='pt-[50%]' />
    </div>
  </div>
)
function Features({ block_order, blocks }) {
  const t = useTrans()
  return (
    <div
      id='shopify-section-template--16177733763331__mobelaris-features'
      className='shopify-section'
    >
      <ul className='max-w-[1264px] w-full  px-4 sm:px-8 mx-auto   border-y list-none grid grid-cols-2 md:grid-cols-4 justify-center gap-3  md:gap-6 py-3 md:py-6 prose-p:m-0 first:prose-p:font-heading first:prose-p:text-xs prose-p:text-sm md:prose-p:text-base md:first:prose-p:text-sm  prose-strong:text-[#dc9916]'>
        {block_order
          .map((blockid) => blocks[blockid])
          .map((block, i) => (
            <li key={i} className='flex items-center flex-1 max-w-xs'>
              <Image
                className='object-contain h-[24px] md:h-[30px] '
                src={block.settings.image}
                width={50}
                height={36}
                alt='icon'
              />
              <div
                className='mt-2 prose prose-p:first:uppercase'
                dangerouslySetInnerHTML={{ __html: t(block.settings.content) }}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}
const renderBlock = (block, i, home) => {
  switch (block.type) {
    case 'mobelaris-banner':
      return <Banner key={i} {...block} />
    case 'mobelaris-features':
      return <Features key={i} {...block} />
    case 'mobelaris-list':
      if (block.settings.layout === 'grid') {
        console.log(['block.settings.content',block.settings.content])
        if (block.settings.content) {
          return <Block3 key={i} {...block} home={home} />
        }
        return <Block1 key={i} {...block} home={home} />
      }
      return <Block2 key={i} {...block} home={home} />
  }
  return <Block1 key={i} {...block} />
}
export function Home({ pageProps: { home } }) {
  console.log({ homeResult })
  return (
    <Layout>
      {homeResult.blocks.map((block, i) => renderBlock(block, i, home))}
      <NewLetter />
    </Layout>
  )
}