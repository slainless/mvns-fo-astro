import Section from '@Blocks/Section'
import { Common as Card } from '@Blocks/Card'
import { Common as Swiper } from '@Blocks/Carousel'
import { SwiperSlide } from 'swiper/react'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import cntl from 'cntl'
import CardView from '../CardView'

const Items: Parameters<typeof Card>[0][] = [
  {
    bgImg: '/media/vod-card.jpg',
    title: 'Developing Entrepreneurial Mindset',
    // subtitle: 'Chai Li',
    badges: ['Offline', 'Finance & Accounting'],
    favorite: true,
    price: '49.65',
    quota: '8/10',
    date: 'Jan 21-29, 22',
  },
  {
    bgImg: '/media/vod-card.jpg',
    title: 'Developing Entrepreneurial Mindset',
    // subtitle: 'Kevin Sanjaya',
    favorite: false,
    badges: ['Recording', 'Finance & Accounting'],
    price: '49.65',
  },
  {
    bgImg: '/media/vod-card.jpg',
    title: 'Developing Entrepreneurial Mindset',
    subtitle: 'Richard Dawkins',
    favorite: false,
    badges: ['Live', 'Health & Fitness'],
  },
  { bgImg: '/media/vod-card.jpg' },
]

const swiperOptions: SwiperOptions = {
  slidesPerView: 2,
  slidesPerGroup: 1,
  rewind: true,
}

export default function VideoOnDemand() {
  return (
    <CardView
      id="vod"
      title="Video on demand"
      subtitle="See all classes"
      styleOverrides={{
        card: {
          card: {
            header: cntl`p-8`,
          },
          favorite: cntl`text-4xl`,
          title: cntl`text-4xl drop-shadow-md`,
          price: cntl`text-3xl drop-shadow-md`,
        },
      }}
      classes={Items}
      swiperOptions={swiperOptions}
    />
  )
}
