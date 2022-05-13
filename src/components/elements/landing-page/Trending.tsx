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
import { useAuthUserStore } from '@Api/user'
import { getData } from '@Functions/request'
import { DateTime } from 'luxon'

export default function Trending() {
  const user = useAuthUserStore((state) => state.user)
  const {
    data: res,
    loading,
    error,
  } = useRequest(CourseAPI.trending, {
    refreshDeps: [user],
  })
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
    const courses = getData(res, CourseResponse.Get)
    if (courses == null) return

    let newDisplay: CardData[] = []
    for (const item of courses) {
      if (item instanceof Course) {
        newDisplay.push({
          itemId: item.id,
          title: item.title,
          subtitle: item.subtitle,
          href: `/class/detail?id=${item.id}`,
          badges: [item.type, item.category],
          bgImg: item.image,
          favorite: item.is_whislist,
          price: item.prices[0]?.price.toString(),
          date: isEmpty(item.course_datetime)
            ? undefined
            : DateTime.fromISO(item?.course_datetime ?? '').toLocaleString(
                DateTime.DATE_FULL
              ),
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
      // classes={display.length === 0 ? Items : display}
      classes={display}
      title="What's Trending Now"
      subtitle="See all classes"
      subtitleHref="/class/all"
    />
  )
}
