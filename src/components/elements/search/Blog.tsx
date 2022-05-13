import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card, CardData } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import CardView from '@Elements/CardView'
import { isEmpty, merge } from 'lodash-es'
import { useSearchStore } from '@Api/search'
import { DateTime } from 'luxon'
import { nanoid } from 'nanoid'
import shallow from 'zustand/shallow'

export default function Blog() {
  const [result, loading] = useSearchStore(
    (state) => [state.result, state.loading],
    shallow
  )
  const blogs = result?.blogs
  console.log(!isBrowser || loading)
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
      id="blog"
      isLoading={!isBrowser || loading}
      fallbackContent={
        <div className="text-zinc-500">No result found for blogs</div>
      }
      classes={
        blogs?.map(
          (i): CardData => ({
            itemId: i.id,
            href: '',
            title: i.title,
            bgImg: `https://picsum.photos/800?rand=${nanoid(10)}`,
            date: isEmpty(i.updated_at)
              ? undefined
              : DateTime.fromISO(i.updated_at!).toLocaleString(
                  DateTime.DATE_FULL
                ),
          })
        ) ?? []
      }
      title="Blogs"
      subtitle={
        !isBrowser || loading
          ? ''
          : `${blogs?.length ?? 0} result${(blogs?.length ?? 0) > 1 ? 's' : ''}`
      }
    />
  )
}
