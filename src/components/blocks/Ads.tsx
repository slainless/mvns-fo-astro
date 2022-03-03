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
    <aside
      {...rest}
      className={twMerge('ads w-full flex items-center justify-center', cls)}
    >
      <img
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        src={src}
      ></img>
    </aside>
  )
}
