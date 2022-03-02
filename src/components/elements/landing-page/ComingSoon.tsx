import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import ClassesView from '@Elements/ClassesView'
import cntl from 'cntl'

const Items: Parameters<typeof Card>[0][] = [
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    // subtitle: 'Chai Li',
    type: 'Beginner (1 Hour)',
    badges: ['Live', 'Finance & Accounting'],
    favorite: true,
    price: '49.65',
    quota: '8/10',
    date: 'Jan 21-29, 22',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    // subtitle: 'Kevin Sanjaya',
    type: 'Beginner (1 Hour)',
    badges: ['Offline', 'IT & Software'],
    favorite: true,
    price: '49.65',
    quota: '8/10',
    date: 'Jan 21-29, 22',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    // subtitle: 'Richard Dawkins',
    type: 'Beginner (1 Hour)',
    badges: ['Recording', 'Business'],
    price: '49.65',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
    title: 'Developing Entrepreneurial Mindset',
    // subtitle: 'Richard Dawkins',
    type: 'Beginner (1 Hour)',
    badges: ['Recording', 'Health & Fitness'],
    favorite: true,
    price: '49.65',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
  },
  {
    bgImg: '/media/trending-card-2.jpg',
  },
]

export default function ComingSoon() {
  return (
    <ClassesView
      id="coming-soon"
      swiperOptions={{
        rewind: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
      }}
      classes={Items}
      title="Coming soon"
      subtitle="See all classes"
      styleOverrides={{
        swiper: cntl`h-96`,
        card: {
          card: {
            header: cntl`px-10`,
            content: cntl`px-10`,
          },
          favorite: cntl`text-4xl`,
          title: cntl`text-3xl`,
          price: cntl`text-3xl`,
        },
      }}
    />
  )
}
