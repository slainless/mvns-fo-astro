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
    href: '/blog/detail',
  },
  {
    bgImg: '/media/blog-thumb.jpg',
    title: 'Everything You Need to Know About Blog B...',
    date: 'Jan 21-29, 22',
    href: '/blog/detail',
  },
  {
    bgImg: '/media/blog-thumb.jpg',
    title: 'Everything You Need to Know About Blog C...',
    date: 'Jan 21-29, 22',
    href: '/blog/detail',
  },
  {
    bgImg: '/media/blog-thumb.jpg',
    title: 'Everything You Need to Know About Blog D...',
    date: 'Jan 21-29, 22',
    href: '/blog/detail',
  },
]

const swiperOptions: SwiperOptions = {}

export default function Blog() {
  return (
    <CardView
      id="blog"
      title="Our blog"
      subtitle="See all"
      subtitleHref="/blog/all"
      swiperOptions={{
        slidesPerView: 2,
        slidesPerGroup: 1,
        loop: true,
        centeredSlides: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          475: {
            slidesPerView: 1.25,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          1280: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      }}
      classes={Items}
      styleOverrides={{
        swiper: {
          style: cntl`h-[20rem] xs:h-[20rem] sm:h-[24rem] md:h-[28rem]`,
        },
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
