import cntl from 'cntl'
import CardView from '@Elements/CardView'
import { largeCard as Items } from '@Dev/dummy'
import { useAuthUserStore } from '@Api/user'
import CardPreset, { CardViewProps } from '@Styles/card'
import { twMerge } from 'tailwind-merge'
import { merge } from 'lodash-es'

export default function ContinueLearning() {
  const user = useAuthUserStore((state) => state.user)
  if (user == null) return <></>

  const preset = CardPreset.Normal
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
      classes={[]}
      fallbackContent={
        <div className="flex w-full h-[20rem] rounded-md border-2 border-zinc-900 border-dashed justify-center items-center">
          <div className="p-4 bg-zinc-900 rounded-md flex items-center flex-col">
            <span className="font-bold">You have no class yet!</span>
            To start learning, add a class
          </div>
        </div>
      }
    />
  )
}
