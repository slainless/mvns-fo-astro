import { Common as Card } from '@Blocks/Card'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import { slimCard as Items } from '@Dev/dummy'
import { twMerge } from 'tailwind-merge'
import CardPreset, { CardViewProps } from '@Styles/card'
import { merge } from 'lodash-es'

export default function Suggestion() {
  return (
    <CardView
      {...merge({}, CardPreset.Normal)}
      id="suggestion"
      classes={Items}
      title="Class viewed by others"
    />
  )
}
