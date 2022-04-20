import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import { isArray, isEmpty, merge } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { useRequest } from 'ahooks'
import CourseAPI from '@Api/course'
import { useEffect, useState } from 'react'
import { CardData } from '@Blocks/Card'
import { Course, CourseResponse } from '@Class/course'
import { nanoid } from 'nanoid'

export default function Trending() {
  const { data: res, loading, error } = useRequest(CourseAPI.trending)
  const [display, setDisplay] = useState<CardData[]>([])
  const override: CardViewProps = {
    styleOverrides: {
      section: {
        container: twMerge(
          CardPreset.Normal.styleOverrides?.section?.container,
          cntl`order-1`
        ),
      },
    },
  }

  useEffect(() => {
    if (res == null) return
    const { data } = res

    if (!(data instanceof CourseResponse.Get)) return
    if (data.data.length === 0) return

    let newDisplay: CardData[] = []
    for (const item of data.data) {
      if (item instanceof Course) {
        newDisplay.push({
          title: item.title,
          subtitle: item.subtitle,
          href: item.link,
          badges: [item.type, item.category],
          bgImg:
            isEmpty(item.image) || item.image.startsWith('http://localhost')
              ? `https://picsum.photos/800?rand=${nanoid(10)}`
              : item.image,
          // favorite: item.,
          // price: item.,
          date: item.course_datetime,
          level: item.difficulty,
        })
      }
    }
    setDisplay(newDisplay)
  }, [res])

  return (
    <CardView
      {...merge({}, CardPreset.Normal, override)}
      id="trending"
      classes={display.length === 0 ? Items : display}
      title="What's Trending Now"
      subtitle="See all classes"
      subtitleHref="/class/all"
    />
  )
}
