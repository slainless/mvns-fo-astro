import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import cntl from 'cntl'

const Items: Parameters<typeof Card>[0][] = [
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    subtitle: 'Chai Li',
    badges: ['Finance & Accounting'],
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    subtitle: 'Kevin Sanjaya',
    badges: ['IT & Software'],
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    subtitle: 'Richard Dawkins',
    badges: ['Business'],
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    subtitle: 'Richard Dawkins',
    badges: ['Health & Fitness'],
  },
  {
    bgImg: '/media/trending-card-2.jpg',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
  },
]

export default function Blog() {
  return (
    <CardView
      id="blog"
      swiperOptions={{
        rewind: true,
      }}
      classes={Items}
      title="Blogs"
      subtitle="9 Results"
      styleOverrides={{
        section: {
          title: {
            container: cntl`w-full justify-between`,
            // subtitle: cntl`flex-grow`,
          },
        },
        card: {
          title: cntl`font-heading font-normal`,
        },
      }}
    />
  )
}
