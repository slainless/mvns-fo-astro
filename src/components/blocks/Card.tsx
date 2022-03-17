import cntl from 'cntl'
import { createSingleton } from 'src/functions/jsx-factory'
import { findChildren } from 'src/functions/jsx-helper'
import { twMerge } from 'tailwind-merge'
import { isArray } from 'lodash-es'
import { Badge } from '@Bits/Badge'
import { Favorite } from '@Bits/Button'
import { Calendar, Quota, SkillLevel } from '@Bits/Info'

type DivAttr = HTMLAttributes<HTMLDivElement>
type CommonProps = DivAttr & {
  href?: string
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
      overlay?: string
      background?: string
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
    href,
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
    <div
      className={twMerge(
        'card',
        'h-full snap-start bg-center group relative group',
        'flex flex-col rounded-md overflow-hidden justify-between bg-cover',
        styleOverrides?.card?.container
      )}
    >
      <div className="contents">
        <div
          className={twMerge(
            `
            card-thumbnail absolute inset-0 w-full h-full 
            bg-cover bg-center scale-105 
            group-hover:scale-100 transition-transform
            z-[1]

            after:block after:bg-gradient-to-t after:from-black/80
            after:to-transparent after:scale-105

            after:content-[''] after:w-full after:h-full
          `,
            styleOverrides?.card?.background
          )}
          style={{
            backgroundImage: `url('${bgImg}')`,
          }}
        ></div>
        <a
          className={twMerge(
            `
            card-overlay block absolute inset-0 w-full h-full z-[2] 
            bg-gradient-to-b from-red-600/50 to-black/80
            transition-opacity opacity-0 group-hover:opacity-100
          `,
            styleOverrides?.card?.overlay
          )}
          href={href}
        ></a>
      </div>
      <div
        className={twMerge(
          'card-header',
          'flex gap-5 p-4 justify-between z-[3] pointer-events-none',
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
            <Favorite
              filled={favorite}
              className={twMerge(
                'pointer-events-auto',
                styleOverrides?.favorite
              )}
            />
          ) : null}
        </div>
      </div>
      <div className={twMerge('card-content pointer-events-none', 'z-[3]')}>
        <div
          className={twMerge(
            'p-4 text-center items-center flex flex-col pointer-events-none',
            styleOverrides?.card?.content
          )}
        >
          <h4
            className={twMerge(
              'card-title font-heading text-2xl font-semibold',
              styleOverrides?.title
            )}
            hidden={title == null}
          >
            <a href={href} className="pointer-events-auto">
              {title}
            </a>
          </h4>
          <hr
            className="w-5 mx-auto border-2 my-3 border-white"
            hidden={subtitle == null && price == null}
          />
          <span
            className={twMerge(
              'card-price font-heading text-lg font-semibold',
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
        </div>
      </div>
    </div>
  )
}
