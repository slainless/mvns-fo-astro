import useTrackElements from '@Functions/useTrackElements'
import cntl from 'cntl'
import { cloneDeep } from 'lodash-es'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type DivProps = HTMLAttributes<HTMLDivElement>
type NavigationProps = DivProps & {
  watchTargets: Target[]
}
type Target = [label: string, id: string, jumpHref: string]

const BarStyle = cntl`
  w-full bg-black sticky top-header-sm md:top-header 
  border-b-2 border-black
  items-stretch h-14 flex flex-row justify-center
  z-10
`

const ButtonStyle = cntl`
  xs:px-10 border-b-2 border-zinc-800 flex items-center justify-center
`

export default function Navigation(props: NavigationProps) {
  const { watchTargets, className, ...rest } = props
  const activeHeadings = useTrackElements(
    watchTargets.map((t) => t[1]).join(', '),
    {
      margin: () => {
        const marginTop = getComputedStyle(
          document.documentElement
        ).scrollPaddingTop

        return `-${marginTop ?? '0px'} 0px 0px 0px`
      },
      threshold: [0, 0.5],
      deps: [],
    }
  )

  return (
    <div
      id="detail-navigation"
      className={twMerge(BarStyle, className)}
      {...rest}
    >
      <div className="grid-flow-col grid w-full px-5 xs:px-0 xs:w-max">
        {watchTargets?.map(([label, id]) => {
          console.log(activeHeadings[0]?.id, id)
          // const active = observerResult.filter((t) => t.isVisible).pop()

          return (
            <a
              id={id}
              key={id}
              href={id}
              className={twMerge(
                ButtonStyle,
                id === '#' + activeHeadings[0]?.id ? 'border-white' : ''
              )}
            >
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
