import * as Slider from '@radix-ui/react-slider'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

const ThumbStyle = cntl`
  bg-white rounded-full 
  block w-5 h-5 shadow-md
`

type SliderRootProps = {
  thumbNum?: number
  styleOverrides?: {
    thumb?: string
  }
} & Parameters<typeof Slider.Root>[0]
export function Common(props: SliderRootProps) {
  const { thumbNum, styleOverrides, style, ...rest } = props
  return (
    <Slider.Root
      className="flex items-center select-none touch-none relative"
      {...rest}
    >
      <Slider.Track className="bg-black/20 rounded-full flex-grow h-1 relative">
        <Slider.SliderRange className="bg-red-500 rounded-full h-full absolute" />
      </Slider.Track>
      {Array(thumbNum ?? 1)
        .fill(0)
        .map((_, i) => (
          <Slider.SliderThumb
            key={i}
            className={twMerge(ThumbStyle, styleOverrides?.thumb)}
          ></Slider.SliderThumb>
        ))}
    </Slider.Root>
  )
}
