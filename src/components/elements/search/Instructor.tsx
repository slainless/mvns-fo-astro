import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import { merge } from 'lodash-es'

const Items: Parameters<typeof Card>[0][] = [
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Kevin Sanjaya',
    subtitle: 'Business',
    level: 'Beginner',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Rick Law',
    subtitle: 'Health & Fitness',
    level: 'Beginner',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Evelynn Lindsay',
    subtitle: 'IT & Software',
    level: 'Beginner',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Richard Law',
    subtitle: 'Personal Development',
    level: 'Beginner',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
  },
]

export default function Instructor() {
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
      id="instructors"
      classes={Items}
      title="Instructors"
      subtitle="6 Results"
    />
  )
}
