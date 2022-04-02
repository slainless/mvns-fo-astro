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
}
export default function CardView(props: Props) {
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
            'h-[24rem] xs:h-[28rem]',
            styleOverrides?.swiper?.style
          )}
          options={swiperOptions}
          styleOverrides={styleOverrides?.swiper}
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
      </Section.Content>
    </Section.Container>
  )
}
