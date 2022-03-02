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

export default function Blog() {
  return (
    <ClassesView
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
      }}
    />
  )
}
