import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import { merge } from 'lodash-es'
import { twMerge } from 'tailwind-merge'

export default function Trending() {
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
      id="trending"
      classes={Items}
      title="What's Trending Now"
      subtitle="See all classes"
      subtitleHref="/class/all"
    />
  )
}
