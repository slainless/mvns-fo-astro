import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card, CardData } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import { merge } from 'lodash-es'
import { useSearchStore } from '@Api/search'
import shallow from 'zustand/shallow'

export default function Instructor() {
  const [result, loading] = useSearchStore(
    (state) => [state.result, state.loading],
    shallow
  )
  const instructors = result?.instructor
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
      isLoading={!isBrowser || loading}
      fallbackContent={
        <div className="text-zinc-500">No result found for instructors</div>
      }
      classes={
        instructors?.map(
          (i): CardData => ({
            itemId: i.id,
            bgImg: i.image,
            href: '',
            title: `${i.firstname} ${i.lastname}`,
          })
        ) ?? []
      }
      title="Instructors"
      subtitle={
        !isBrowser || loading
          ? ''
          : `${instructors?.length ?? 0} result${
              (instructors?.length ?? 0) > 1 ? 's' : ''
            }`
      }
    />
  )
}
