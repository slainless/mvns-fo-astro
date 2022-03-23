import Button from './Button'
import Popover, { OptionalProps } from './Popover'
import { Common as Checkbox } from '@Bits/Checkbox'
import { Root as Label } from '@radix-ui/react-label'
import cntl from 'cntl'
import { Icon } from '@Bits/Button'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const STAR_NUMBER = 5
export default function Popular(props: OptionalProps) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <Popover
      {...props}
      title="Rating"
      trigger={<Button>Rating</Button>}
      className="flex flex-row gap-1 items-center justify-center"
      onReset={() => setRating(0)}
    >
      {Array(STAR_NUMBER)
        .fill(0)
        .map((v, i) => (
          <Icon
            // icon={i + 1 <= rating ? 'star' : 'star_outline'}
            icon={'star'}
            key={i}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(0)}
            className={twMerge(
              `text-4xl text-black/40`,
              i + 1 <= hover ? 'text-red-900/40' : '',
              i + 1 <= rating ? 'text-red-500' : ''
            )}
          ></Icon>
        ))}
    </Popover>
  )
}
