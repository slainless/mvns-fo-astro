import Section from '@Blocks/Section'
import { SwiperSlide, SwiperProps } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import { twMerge } from 'tailwind-merge'
import { isEmpty, merge } from 'lodash-es'

type Props = {
  id: string
  title?: string
  subtitle?: string
  subtitleHref?: string

  swiperProps?: SwiperProps
  classes: Parameters<typeof Card>[0][]

  styleOverrides?: {
    card?: Parameters<typeof Card>[0]['styleOverrides']
    swiper?: Parameters<typeof Swiper>[0]['styleOverrides'] & {
      style?: string
    }
    section?: {
      container?: string
      title?: {
        container?: string
        title?: string
        subtitle?: string
      }
      content?: string
    }
  }

  isLoading?: boolean
  fallbackContent?: any
}
export default function CardView(props: Props) {
  const {
    id,
    title,
    subtitle,
    subtitleHref,
    swiperProps,
    classes,
    isLoading,
    fallbackContent,
    styleOverrides,
  } = props
  const fallback =
    !isEmpty(fallbackContent) && classes.length === 0 && !isLoading
  return (
    <Section.Container
      className={twMerge(
        'w-full mx-auto overflow-hidden',
        styleOverrides?.section?.container
      )}
      id={`${id}-class`}
    >
      <Section.Title
        subtitle={subtitle}
        subtitleHref={subtitleHref}
        styleOverrides={styleOverrides?.section?.title}
      >
        {title}
      </Section.Title>
      <Section.Content className={styleOverrides?.section?.content}>
        <Swiper
          id={`${id}-swiper`}
          className={twMerge(
            fallback ? 'hidden' : '',
            'h-[24rem] xs:h-[28rem]',
            'after:block after:sm:hidden',
            'after:w-8 after:pointer-events-none after:absolute after:right-0 after:h-full after:top-0 after:z-[1]',
            'after:bg-gradient-to-r after:from-transparent after:to-black',
            isLoading ? 'skeleton-zinc-dark' : '',
            styleOverrides?.swiper?.style
          )}
          {...swiperProps}
          styleOverrides={merge(styleOverrides?.swiper, {
            buttons: {
              style: fallback ? '!hidden sm:!hidden' : '',
            },
          })}
        >
          {isBrowser ? (
            classes.map((item, key) => (
              <SwiperSlide key={id + key}>
                <Card styleOverrides={styleOverrides?.card} {...item} />
              </SwiperSlide>
            ))
          ) : (
            <></>
          )}
        </Swiper>
        <div>{fallback ? fallbackContent : null}</div>
      </Section.Content>
    </Section.Container>
  )
}
