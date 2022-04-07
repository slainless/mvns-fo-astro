import cntl from 'cntl'
import CardView from '@Elements/CardView'
import { largeCard as Items } from '@Dev/dummy'
import { useUserStore } from '@Api/user'
import CardPreset, { CardViewProps } from '@Styles/card'
import { twMerge } from 'tailwind-merge'
import { merge } from 'lodash-es'

export default function ContinueLearning() {
  const user = useUserStore((state) => state.user)
  if (user == null) return <></>

  const preset = CardPreset.Large
  const override: CardViewProps = {
    styleOverrides: {
      section: {
        container: twMerge(
          preset.styleOverrides?.section?.container,
          cntl`-order-2`
        ),
      },
    },
  }

  return (
    <CardView
      {...merge({}, preset, override)}
      id="continue-learning"
      title="Continue Learning"
      classes={Items}
    />
  )
}
