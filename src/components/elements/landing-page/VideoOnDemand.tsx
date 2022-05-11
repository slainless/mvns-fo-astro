import Section from '@Blocks/Section'
import { CardData, Common as Card } from '@Blocks/Card'
import cntl from 'cntl'
import CardView from '../CardView'
import { largeCard as Items } from '@Dev/dummy'
import { useUserStore } from '@Api/user'
import CardPreset, { CardViewProps } from '@Styles/card'
import { twMerge } from 'tailwind-merge'
import { isEmpty, merge } from 'lodash-es'
import CourseAPI from '@Api/course'
import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { Course, CourseResponse, CourseType } from '@Class/course'
import { nanoid } from 'nanoid'

export default function VideoOnDemand() {
  const user = useUserStore((state) => state.user)

  const {
    data: res,
    loading,
    error,
    run,
  } = useRequest(CourseAPI.ofType, {
    // defaultParams: [],
    manual: true,
  })
  const [display, setDisplay] = useState<CardData[]>([])

  useEffect(() => {
    if (display != null) return
    if (user != null) return
    run(CourseType.VIDEO)
  }, [display, user])

  useEffect(() => {
    if (res == null) return
    const { data } = res

    if (!(data instanceof CourseResponse.Get)) return
    if (data.data.length === 0) return

    let newDisplay: CardData[] = []
    for (const item of data.data) {
      if (item instanceof Course) {
        newDisplay.push({
          itemId: item.id,
          title: item.title,
          subtitle: item.subtitle,
          href: `/class/detail?id=${item.id}`,
          badges: [item.type, item.category],
          bgImg:
            isEmpty(item.image) || item.image.startsWith('http://localhost')
              ? `https://picsum.photos/800?rand=${nanoid(10)}`
              : item.image,
          favorite: item.is_whislist,
          // price: item.,
          date: item.course_datetime,
          level: item.difficulty,
        })
      }
    }
    setDisplay(newDisplay)
  }, [res])

  const preset = CardPreset.Large
  const override: CardViewProps = {
    styleOverrides: {
      section: {
        container: twMerge(
          preset.styleOverrides?.section?.container,
          cntl`order-1`
        ),
      },
    },
  }

  if (user != null) return <></>

  return (
    <CardView
      {...merge({}, preset, override)}
      id="vod"
      title="Video on demand"
      subtitle="See all classes"
      subtitleHref="/class/all"
      classes={display}
    />
  )
}
