import Section from '@Blocks/Section'
import { CardData, Common as Card } from '@Blocks/Card'
import cntl from 'cntl'
import CardView from '../CardView'
import { largeCard as Items } from '@Dev/dummy'
import { useUserStore } from '@Api/user'
import CardPreset, { CardViewProps } from '@Styles/card'
import { twMerge } from 'tailwind-merge'
import { merge } from 'lodash-es'
import CourseAPI from '@Api/course'
import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { CourseResponse, CourseType } from '@Class/course'

export default function VideoOnDemand() {
  const user = useUserStore((state) => state.user)
  if (user != null) return <></>

  const {
    data: res,
    loading,
    error,
  } = useRequest(CourseAPI.ofType, {
    defaultParams: [CourseType.VIDEO],
  })
  const [display, setDisplay] = useState<CardData[]>([])

  useEffect(() => {
    if (res == null) return
    const { data } = res

    if (!(data instanceof CourseResponse.Get)) return
    if (data.data.length === 0) return

    let newDisplay: CardData[] = []
    for (const item of data.data) {
      if (item instanceof CourseResponse.Get) {
        newDisplay.push({
          title: item.title,
          subtitle: item.subtitle,
          href: item.link,
          badges: [item.type, item.category],
          bgImg: item.image,
          // favorite: item.,
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

  return (
    <CardView
      {...merge({}, preset, override)}
      id="vod"
      title="Video on demand"
      subtitle="See all classes"
      subtitleHref="/class/all"
      classes={display.length === 0 ? Items : display}
    />
  )
}
