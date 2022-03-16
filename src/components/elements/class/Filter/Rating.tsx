import Button from './Button'
import Dialog, { OptionalProps } from './Dialog'
import { Common as Checkbox } from '@Bits/Checkbox'
import { Root as Label } from '@radix-ui/react-label'
import cntl from 'cntl'
import { Icon } from '@Bits/Button'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const STAR_NUMBER = 5
export default function Popular(props: OptionalProps) {
  const [rating, setRating] = useState(2)

  return (
    <Dialog
      {...props}
      title="Rating"
      trigger={<Button>Rating</Button>}
      className="flex flex-row gap-1 items-center"
    >
      {Array(STAR_NUMBER)
        .fill(0)
        .map((v, i) => (
          <Icon
            icon={i > rating ? 'star_outline' : 'star'}
            key={i}
            className={twMerge(
              `text-4xl`,
              i > rating ? 'text-black/40' : 'text-yellow-400'
            )}
          ></Icon>
        ))}
    </Dialog>
  )
}
