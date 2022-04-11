import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import CardView from '@Elements/CardView'
import { merge } from 'lodash-es'

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
  const override: CardViewProps = {
    styleOverrides: {
      section: {
        title: {
          container: cntl`w-full justify-between`,
        },
      },
    },
  }

  return (
    <CardView
      {...merge({}, CardPreset.Normal, override)}
      id="blog"
      classes={Items}
      title="Blogs"
      subtitle="6 Results"
    />
  )
}
