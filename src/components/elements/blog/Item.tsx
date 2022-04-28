import { twMerge } from 'tailwind-merge'
import { Root as AspectRatio } from '@radix-ui/react-aspect-ratio'
import { DateTime } from 'luxon'

export type ItemData = {
  title: string
  tags?: string[]
  desc?: string
  date?: Date
  bgImg?: string
  href?: string
}
type ItemProps = HTMLAttr<'a'> &
  ItemData & {
    ratio?: number
    styleOverrides?: {
      container?: string
      background?: {
        container?: string
        background?: string
      }
      content?: string
      title?: string
      tags?: {
        container?: string
        tags?: string
      }
      desc?: string
      info?: {
        container?: string
        date?: string
      }
    }
  }
export default function Item(props: ItemProps) {
  const {
    styleOverrides,
    title,
    bgImg,
    tags,
    desc,
    ratio,
    date,
    className,
    ...rest
  } = props
  return (
    <a
      className={twMerge(
        'blog-item',
        'flex flex-col gap-5',
        className,
        styleOverrides?.container
      )}
      {...rest}
    >
      <div className={styleOverrides?.background?.container}>
        <AspectRatio ratio={ratio ?? 16 / 9}>
          <div
            className={twMerge(
              'item-background',
              'w-full h-full bg-cover',
              styleOverrides?.background?.background
            )}
            style={{
              backgroundImage: `url('${bgImg}')`,
            }}
          ></div>
        </AspectRatio>
      </div>
      <div
        className={twMerge(
          'item-content',
          'flex flex-col gap-3 pr-10',
          styleOverrides?.content
        )}
      >
        <h3
          className={twMerge(
            'item-title',
            'text-2xl font-heading font-bold',
            styleOverrides?.title
          )}
        >
          {title}
        </h3>
        <ol
          className={twMerge(
            'item-tags',
            'flex flex-row gap-1',
            styleOverrides?.tags?.container
          )}
        >
          {tags?.map((tag, index) => {
            return (
              <li
                key={tag + index}
                className="text-white bg-red-600 px-2 py-0.5 uppercase w-max text-xs rounded-sm"
              >
                {tag}
              </li>
            )
          })}
        </ol>
        <p
          className={twMerge('item-desc', 'line-clamp-3', styleOverrides?.desc)}
        >
          {desc}
        </p>
        <div className={twMerge('item-info', styleOverrides?.info?.container)}>
          <div
            className={twMerge(
              'item-date',
              'text-sm text-gray-500 font-medium',
              styleOverrides?.info?.date
            )}
          >
            {`${DateTime.fromMillis(date ? date.valueOf() : 0).toLocaleString(
              DateTime.DATE_FULL
            )}`}
          </div>
        </div>
      </div>
    </a>
  )
}
