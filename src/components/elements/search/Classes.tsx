import { Common as Card } from '@Blocks/Card'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import { slimCard as Items } from '@Dev/dummy'
import { twMerge } from 'tailwind-merge'
import CardPreset, { CardViewProps } from '@Styles/card'
import { merge } from 'lodash-es'

export default function Classes() {
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
      classes={Items}
      title="Classes"
      subtitle="7 Results"
    />
  )
}
