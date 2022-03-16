import cntl from 'cntl'
import { cloneDeep } from 'lodash-es'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type DivProps = HTMLAttributes<HTMLDivElement>
type NavigationProps = DivProps & {
  watchTargets: Target[]
}
type Target = [label: string, id: string]

const BarStyle = cntl`
  w-full bg-black sticky top-16 
  border-b-2 border-black
  items-center flex justify-center
  z-10
`

const ButtonStyle = cntl`
  px-10 py-3 border-b-2 border-zinc-800
`

type ObserverResult = {
  target: Target
  isVisible: boolean
}[]
export default function Navigation(props: NavigationProps) {
  const { watchTargets, className, ...rest } = props
  const [observerResult, setObserverResult] = useState<ObserverResult>(
    watchTargets.map((t, i) => ({ target: t, isVisible: i === 0 }))
  )
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setObserverResult((old) => {
        const newResult = [...old]

        for (const entry of entries) {
          const target = entry.target
          const id = target.id

          const isVisible = entry.intersectionRatio > 0
          const current = newResult.find((t) => t.target[1] === `#${id}`)!
          console.log(current)
          current.isVisible = isVisible
        }

        return newResult
      })
    })

    const els = document.querySelectorAll(
      watchTargets.map((t) => t[1]).join(', ')
    )
    for (const el of Array.from(els)) {
      observer.observe(el)
    }
  }, [])
  return (
    <div
      id="detail-navigation"
      className={twMerge(BarStyle, className)}
      {...rest}
    >
      <div className="grid-flow-col grid">
        {watchTargets?.map((target) => {
          const active = observerResult.find((t) => t.isVisible)
          console.log(active)

          return (
            <a
              id={target[1]}
              key={target[1]}
              href={target[1]}
              className={twMerge(
                ButtonStyle,
                target === active?.target ? 'border-white' : ''
              )}
            >
              {target[0]}
            </a>
          )
        })}
      </div>
    </div>
  )
}
