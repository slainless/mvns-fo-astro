import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import { merge } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { useAuthUserStore } from '@Api/user'

export default function MostRelevant() {
  const user = useAuthUserStore((state) => state.user)
  if (user == null) return <></>

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
      classes={Items}
      title="Most Relevant"
      subtitle="See all classes"
      subtitleHref="/class/all"
    />
  )
}
