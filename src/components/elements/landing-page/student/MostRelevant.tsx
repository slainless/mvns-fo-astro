import CardView from '@Elements/CardView'
// import { slimCard as Items } from '@Dev/dummy'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import { isEmpty, merge } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { useAuthUserStore } from '@Api/user'
import CourseAPI from '@Api/course'
import { CardData } from '@Blocks/Card'
import { CourseResponse, Course } from '@Class/course'
import { useRequest } from 'ahooks'
import { DateTime } from 'luxon'
import { useState, useEffect } from 'react'

export default function MostRelevant() {
  const user = useAuthUserStore((state) => state.user)
  if (user == null) return <></>

  const {
    data: res,
    loading,
    error,
    run,
  } = useRequest(CourseAPI.trending, {
    // defaultParams: [],
    manual: true,
  })
  const [display, setDisplay] = useState<CardData[] | null>(null)

  useEffect(() => {
    run()
  }, [user])

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

  return (
    <CardView
      {...merge({}, CardPreset.Normal, override)}
      id="most-relevant"
      classes={display ?? []}
      title="Most Relevant"
      subtitle="See all classes"
      subtitleHref="/class/all"
    />
  )
}
