import Section from '@Blocks/Section'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import cntl from 'cntl'
import CardView from '@Elements/CardView'

const Items: Parameters<typeof Card>[0][] = [
  {
    bgImg: '/media/blog-thumb.jpg',
    title: 'Everything You Need to Know About Blog A...',
    date: 'Jan 21-29, 22',
  },
  {
    bgImg: '/media/blog-thumb.jpg',
    title: 'Everything You Need to Know About Blog B...',
    date: 'Jan 21-29, 22',
  },
  {
    bgImg: '/media/blog-thumb.jpg',
    title: 'Everything You Need to Know About Blog C...',
    date: 'Jan 21-29, 22',
  },
  {
    bgImg: '/media/blog-thumb.jpg',
    title: 'Everything You Need to Know About Blog D...',
    date: 'Jan 21-29, 22',
  },
]

const swiperOptions: SwiperOptions = {
  slidesPerView: 2,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
}

export default function Blog() {
  return (
    <CardView
      id="blog"
      title="Latest blog"
      swiperOptions={swiperOptions}
      classes={Items}
      styleOverrides={{
        card: {
          card: {
            content: cntl`p-10 items-start`,
          },
          title: cntl`text-left text-2xl drop-shadow-md`,
          date: cntl`text-md`,
        },
      }}
    />
  )
}
