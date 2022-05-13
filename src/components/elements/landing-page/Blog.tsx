import Section from '@Blocks/Section'
import { Common as Swiper } from '@Blocks/Carousel'
import { CardData, Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import cntl from 'cntl'
import CardView from '@Elements/CardView'
import { blogCards } from '@Dev/dummy'
import CardPreset, { CardViewProps } from '@Styles/card'
import { twMerge } from 'tailwind-merge'
import { isEmpty, merge, omit } from 'lodash-es'
import { useRequest } from 'ahooks'
import BlogAPI from '@Api/blog'
import { useEffect, useState } from 'react'
import { BlogResponse, Blog as BlogClass } from '@Class/blog'
import { nanoid } from 'nanoid'
import { DateTime } from 'luxon'

export default function Blog() {
  const { data: res, loading, error } = useRequest(BlogAPI.latest)
  const [display, setDisplay] = useState<CardData[]>([])

  useEffect(() => {
    if (res == null) return
    const { data } = res

    if (!(data instanceof BlogResponse.Get)) return
    if (data.data.length === 0) return

    let newDisplay: CardData[] = []
    for (const item of data.data) {
      if (item instanceof BlogClass) {
        newDisplay.push({
          title: item.title,
          // subtitle: item.subtitle,
          href: `/blog/detail?id=${item.id}`,
          // badges: [item.type, item.category],
          bgImg:
            isEmpty(item.thumbnail_url) ||
            item.thumbnail_url.startsWith('http://localhost') ||
            item.thumbnail_url.startsWith('https://mavens.upanastudio.com')
              ? `https://picsum.photos/800?rand=${nanoid(10)}`
              : item.thumbnail_url,
          // favorite: item.,
          // price: item.,
          date: DateTime.fromISO(item.created_at ?? '').toLocaleString(
            DateTime.DATE_FULL
          ),
          // level: item.difficulty,
        })
      }
    }
    setDisplay(newDisplay)
  }, [res])

  const { styleOverrides, ...preset } = CardPreset.Large
  const override: CardViewProps = {
    swiperProps: {
      rewind: false,
      loop: true,
      initialSlide: 1,
      breakpoints: {
        0: {},
        375: {
          slidesPerView: 1.25,
        },
        475: {},
        640: {
          slidesPerView: 1.25,
        },
        768: {
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 1.5,
        },
        1280: {
          slidesPerGroup: 1,
          centeredSlides: true,
        },
      },
    },
  }

  return (
    <CardView
      {...merge({}, preset, override)}
      id="blog"
      title="Our blog"
      subtitle="See all"
      subtitleHref="/blog/all"
      classes={display}
      styleOverrides={{
        swiper: {
          style: cntl`h-[20rem] xs:h-[20rem] sm:h-[24rem] md:h-[28rem] rounded-none sm:rounded-lg`,
          buttons: {
            style: cntl`hidden sm:flex`,
          },
        },
        card: {
          card: {
            content: cntl`p-10 items-start`,
          },
          title: cntl`text-left text-2xl drop-shadow-md`,
          date: cntl`text-md`,
        },
        section: {
          container: cntl`order-last`,
          content: cntl`-mr-5 xs:-mr-7 sm:mr-0`,
        },
      }}
    />
  )
}
