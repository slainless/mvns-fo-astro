import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttr<'div'> & {
  title: any
  subtitle: any
  subsubtitle: any
  img: string
  styleOverrides?: {
    container?: string
    img?: string
    title?: string
    subtitle?: string
    subsubtitle?: string
  }
}
export default function Notice(props: Props) {
  const { img, title, subtitle, subsubtitle, styleOverrides } = props
  return (
    <div
      id="notice"
      className={twMerge(
        'flex flex-row gap-20 items-center max-w-3xl',
        styleOverrides?.container
      )}
    >
      <div id="notice-illustration" className="flex-shrink-0">
        <img
          src={img}
          className={twMerge('w-auto h-72', styleOverrides?.img)}
        ></img>
      </div>
      <div id="notice-content">
        <h1
          className={twMerge(
            'font-heading text-6xl font-bold leading-none',
            styleOverrides?.title
          )}
        >
          {title}
        </h1>
        <h2
          className={twMerge(
            'text-4xl font-bold text-red-600 leading-none mt-3',
            styleOverrides?.subtitle
          )}
        >
          {subtitle}
        </h2>
        <h3
          className={twMerge(
            'text-lg text-black/80 mt-1',
            styleOverrides?.subsubtitle
          )}
        >
          {subsubtitle}
        </h3>
      </div>
    </div>
  )
}
