import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'
import cntl from 'cntl'
import CardPreset, { CardViewProps } from '@Styles/card'
import { merge } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { useAuthUserStore } from '@Api/user'

export default function StartLearning() {
  const user = useAuthUserStore((state) => state.user)
  if (user == null) return <></>

  const override: CardViewProps = {
    styleOverrides: {
      section: {
        container: twMerge(
          CardPreset.Normal.styleOverrides?.section?.container,
          cntl`-order-2`
        ),
      },
    },
  }

  return (
    <CardView
      {...merge({}, CardPreset.Normal, override)}
      id="start-learning"
      classes={Items}
      title="Start Learning"
      subtitle="See my classes"
      subtitleHref="/class/all"
    />
  )
}
