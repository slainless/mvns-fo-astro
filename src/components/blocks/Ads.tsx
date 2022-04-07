import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { twMerge } from 'tailwind-merge'

export default function Ads(
  props: HTMLAttributes<HTMLDivElement> & {
    width: number
    height: number
    src: string
  }
) {
  const { width, height, src, className: cls, ...rest } = props
  return (
    <aside className={twMerge('w-full flex items-center justify-center', cls)}>
      <div
        className="w-full flex items-center justify-center"
        style={{
          maxWidth: width,
          maxHeight: height,
        }}
      >
        <AspectRatio ratio={width / height}>
          <img className="w-full h-full" src={src}></img>
        </AspectRatio>
      </div>
    </aside>
  )
}
