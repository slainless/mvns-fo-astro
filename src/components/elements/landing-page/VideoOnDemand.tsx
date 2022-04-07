import Section from '@Blocks/Section'
import { Common as Card } from '@Blocks/Card'
import { Common as Swiper } from '@Blocks/Carousel'
import { SwiperSlide } from 'swiper/react'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import cntl from 'cntl'
import CardView from '../CardView'
import { largeCard as Items } from '@Dev/dummy'
import { useUserStore } from '@Api/user'
import CardPreset, { CardViewProps } from '@Styles/card'
import { twMerge } from 'tailwind-merge'
import { merge } from 'lodash-es'

export default function VideoOnDemand() {
  const user = useUserStore((state) => state.user)
  if (user != null) return <></>

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
      classes={Items}
    />
  )
}
