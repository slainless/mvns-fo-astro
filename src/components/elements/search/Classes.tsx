import { Common as Card, CardData } from '@Blocks/Card'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import CardPreset, { CardViewProps } from '@Styles/card'
import { isEmpty, merge } from 'lodash-es'
import { useSearchStore } from '@Api/search'
import { DateTime } from 'luxon'
import isBrowser from '@Functions/isBrowser'
import shallow from 'zustand/shallow'

export default function Classes() {
  const [result, loading] = useSearchStore(
    (state) => [state.result, state.loading],
    shallow
  )
  const courses = result?.courses
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
      id="classes"
      isLoading={!isBrowser || loading}
      fallbackContent={
        <div className="text-zinc-500">No result found for classes</div>
      }
      classes={
        courses?.map(
          (i): CardData => ({
            itemId: i.id,
            href: '',
            title: i.title,
            bgImg: i.image,
            price: i.prices?.[0]?.price.toString(),
            date: isEmpty(i.course_datetime)
              ? undefined
              : DateTime.fromISO(i?.course_datetime ?? '').toLocaleString(
                  DateTime.DATE_FULL
                ),
          })
        ) ?? []
      }
      title="Classes"
      subtitle={
        !isBrowser || loading
          ? ''
          : `${courses?.length ?? 0} result${
              (courses?.length ?? 0) > 1 ? 's' : ''
            }`
      }
    />
  )
}
