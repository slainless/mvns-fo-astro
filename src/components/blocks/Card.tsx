import cntl from 'cntl'
import { createSingleton } from 'src/functions/jsx-factory'
import { findChildren } from 'src/functions/jsx-helper'
import { twMerge } from 'tailwind-merge'
import { isArray } from 'lodash-es'
import { Badge } from '@Bits/Badge'
import { Favorite } from '@Bits/Button'
import { Calendar, Quota, SkillLevel } from '@Bits/Info'

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
    const { className: cls, children, bgImg, ...rest } = props
    const { content, header } = findChildren(children, {
      content: (child) => child.type === Content,
      // image: (child) => child.type === Image,
      header: (child) => child.type === Header,
    })

    return (
      <div
        style={{
          backgroundImage: bgImg ? `url(${bgImg})` : '',
        }}
        className={twMerge(cls, Style.Container)}
        {...rest}
      >
        {header}
        {content}
        {/* {image} */}
      </div>
    )
  }

  export const Header = createSingleton('div', {
    className: twMerge('card-header', Style.Header),
  })

  export const Content = createSingleton('div', {
    className: twMerge('card-content', Style.Content),
  })
}

type CommonProps = DivAttr & {
  badges?: string[]
  bgImg?: string
  title?: string
  subtitle?: string
  favorite?: boolean
  price?: string
  quota?: `${number}/${number}`
  date?: string
  level?: string
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
    quota?: string
    level?: string
  }
}
export const Common: FunctionComponent<CommonProps> = (props) => {
  const {
    badges,
    bgImg,
    title,
    subtitle,
    favorite,
    price,
    quota,
    date,
    level,
    styleOverrides,
    ...rest
  } = props

  const [filled, max] = quota?.split('/') ?? []
  return (
    <Card.Container
      bgImg={bgImg}
      className={twMerge(
        'h-full snap-start bg-center',
        styleOverrides?.card?.container
      )}
    >
      <Card.Header
        className={twMerge(
          'flex gap-5 p-4 justify-between',
          styleOverrides?.card?.header
        )}
      >
        <div className="flex flex-col gap-2">
          {badges
            ? badges.map((badge, key) => <Badge key={key}>{badge}</Badge>)
            : null}
        </div>
        <div className="items-end">
          {favorite != null ? (
            <Favorite filled={favorite} className={styleOverrides?.favorite} />
          ) : null}
        </div>
      </Card.Header>
      <Card.Content
        className={twMerge(
          'p-4 text-center items-center flex flex-col',
          styleOverrides?.card?.content
        )}
      >
        <h4
          className={twMerge(
            'card-title font-heading-alt text-2xl font-semibold',
            styleOverrides?.title
          )}
          hidden={title == null}
        >
          {title}
        </h4>
        <hr
          className="w-5 mx-auto border-2 my-3 border-white"
          hidden={subtitle == null && price == null}
        />
        <span
          className={twMerge(
            'card-price font-heading-alt text-lg font-semibold',
            styleOverrides?.price
          )}
          hidden={price == null}
        >{`$${price}`}</span>
        <h5 className="card-subtitle w-max" hidden={subtitle == null}>
          {subtitle}
        </h5>
        <span className="card-minor-info flex gap-3">
          {quota ? (
            <Quota
              filled={+filled}
              max={+max}
              className={twMerge('card-quota', styleOverrides?.quota)}
            />
          ) : null}
          {date ? (
            <Calendar className={twMerge('card-date', styleOverrides?.date)}>
              {date}
            </Calendar>
          ) : null}
          {level ? (
            <SkillLevel
              className={twMerge('card-level', styleOverrides?.level)}
            >
              {level}
            </SkillLevel>
          ) : null}
        </span>
      </Card.Content>
    </Card.Container>
  )
}
