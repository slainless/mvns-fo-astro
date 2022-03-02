import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import { twMerge } from 'tailwind-merge'

type Props = {
  id: string
  title?: string
  subtitle?: string
  subtitleHref?: string

  swiperOptions?: SwiperOptions
  classes: Parameters<typeof Card>[0][]

  styleOverrides?: {
    card?: Parameters<typeof Card>[0]['styleOverrides']
    swiper?: string
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
}
export default function ClassesView(props: Props) {
  const {
    id,
    title,
    subtitle,
    subtitleHref,
    swiperOptions,
    classes,
    styleOverrides,
  } = props
  return (
    <div
      className={twMerge(
        'container mx-auto px-0 lg:px-12 overflow-hidden',
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
          className={twMerge('h-[28rem]', styleOverrides?.swiper)}
          options={swiperOptions}
        >
          {isBrowser ? (
            classes.map((item, key) => (
              <SwiperSlide key={key}>
                <Card styleOverrides={styleOverrides?.card} {...item} />
              </SwiperSlide>
            ))
          ) : (
            <></>
          )}
        </Swiper>
      </Section.Content>
    </div>
  )
}
