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
        'flex flex-col sm:flex-row gap-y-5 gap-x-16 md:gap-x-20 items-center max-w-3xl',
        styleOverrides?.container
      )}
    >
      <div id="notice-illustration" className="flex-shrink-0">
        <img
          src={img}
          className={twMerge(
            'w-auto h-56 sm:h-64 md:h-72',
            styleOverrides?.img
          )}
        ></img>
      </div>
      <div id="notice-content">
        <h1
          className={twMerge(
            'text-center font-heading text-8xl md:text-9xl font-bold leading-none',
            styleOverrides?.title
          )}
        >
          {title}
        </h1>
        <h2
          className={twMerge(
            'text-2xl md:text-4xl font-bold text-red-600 leading-none mt-2 sm:mt-3',
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
