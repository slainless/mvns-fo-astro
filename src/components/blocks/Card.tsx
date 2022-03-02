import cntl from 'cntl'
import { createSingleton } from 'src/functions/jsx-factory'
import { findChildren } from 'src/functions/jsx-helper'
import { twMerge } from 'tailwind-merge'
import { isArray } from 'lodash-es'
import { Badge } from '@Bits/Badge'
import { Favorite } from '@Bits/Button'
import { Calendar, Quota } from '@Bits/Info'

type DivAttr = HTMLAttributes<HTMLDivElement>
export module Card {
  namespace Style {
    export const Container = cntl`
      flex
      flex-col
      rounded-md
      overflow-hidden
      justify-between
      bg-cover
    `

    export const Content = cntl`
    `

    export const Header = cntl`
    `
  }

  export const Container: FunctionComponent<DivAttr & { bgImg?: string }> = (
    props
  ) => {
    const { class: cls, children, bgImg, ...rest } = props
    const { content, header } = findChildren(children, {
      content: (child) => child.type === Content,
      // image: (child) => child.type === Image,
      header: (child) => child.type === Header,
    })

    return (
      <div
        style={bgImg ? `background-image: url('${bgImg}')` : ''}
        class={twMerge(cls, Style.Container)}
        {...rest}
      >
        {header}
        {content}
        {/* {image} */}
      </div>
    )
  }

  export const Header = createSingleton('div', {
    class: twMerge('card-header', Style.Header),
  })

  export const Content = createSingleton('div', {
    class: twMerge('card-content', Style.Content),
  })
}

type CommonProps = DivAttr & {
  badges?: string[]
  bgImg?: string
  title?: string
  subtitle?: string
  type?: string
  favorite?: boolean
  price?: string
  quota?: `${number}/${number}`
  date?: string
  styleOverrides?: {
    card?: {
      header?: string
      content?: string
      container?: string
    }
    favorite?: string
    title?: string
    price?: string
    date?: string
  }
}
export const Common: FunctionComponent<CommonProps> = (props) => {
  const {
    badges,
    bgImg,
    title,
    subtitle,
    type,
    favorite,
    price,
    quota,
    date,
    styleOverrides,
    ...rest
  } = props

  const [filled, max] = quota?.split('/') ?? []
  return (
    <Card.Container
      bgImg={bgImg}
      class={twMerge(
        'h-full snap-start bg-center',
        styleOverrides?.card?.container
      )}
    >
      <Card.Header
        class={twMerge(
          'flex gap-5 p-4 justify-between',
          styleOverrides?.card?.header
        )}
      >
        <div class="flex flex-col gap-2">
          {badges ? badges.map((badge) => <Badge>{badge}</Badge>) : null}
        </div>
        <div class="items-end">
          <Favorite filled={favorite} class={styleOverrides?.favorite} />
        </div>
      </Card.Header>
      <Card.Content
        class={twMerge(
          'p-4 text-center items-center flex flex-col',
          styleOverrides?.card?.content
        )}
      >
        <h4
          class={twMerge(
            'card-title font-heading-alt text-2xl font-semibold',
            styleOverrides?.title
          )}
          hidden={title == null}
        >
          {title}
        </h4>
        <hr
          class="w-5 mx-auto border-2 my-3 border-white"
          hidden={subtitle == null && price == null}
        />
        <span
          class={twMerge(
            'card-price font-heading-alt text-lg font-semibold',
            styleOverrides?.price
          )}
          hidden={price == null}
        >{`$${price}`}</span>
        <h5 class="card-subtitle w-max" hidden={subtitle == null}>
          {subtitle}
        </h5>
        <span class="card-minor-info flex gap-3" hidden={type == null}>
          <Quota
            hidden={quota == null}
            filled={+filled}
            max={+max}
            class={twMerge('card-quota', quota == null ? 'hidden' : '')}
          />
          <Calendar
            hidden={date == null}
            class={twMerge(
              'card-date',
              date == null ? 'hidden' : '',
              styleOverrides?.date
            )}
          >
            {date}
          </Calendar>
        </span>
      </Card.Content>
    </Card.Container>
  )
}
