import cntl from 'cntl'
import { createSingleton } from '@Functions/jsx-factory'
import { twMerge } from 'tailwind-merge'
import { Link } from '@Bits/Button'

module Section {
  export const Container = createSingleton('section', {
    className: cntl`
      mx-auto w-full
      px-5 xs:px-7 lg:px-12
    `,
  })

  type TitleProps = HTMLAttr<'h2'> & {
    subtitle?: string
    subtitleHref?: string
    styleOverrides?: {
      container?: string
      title?: string
      subtitle?: string
    }
  }
  export function Title(props: TitleProps) {
    const {
      className: cls,
      subtitle,
      subtitleHref,
      styleOverrides,
      ...rest
    } = props
    return (
      <div
        className={twMerge(
          cntl`
            section-heading
            inline-flex items-center justify-start
            flex-wrap
            gap-x-5
            gap-y-2
          `,
          styleOverrides?.container
        )}
      >
        <h2
          {...rest}
          className={twMerge(
            cntl`
              section-title font-semibold
              text-2xl lg:text-3xl
            `,
            cls,
            styleOverrides?.title
          )}
        />
        <Link
          href={subtitleHref}
          className={twMerge(
            'section-subtitle text-sm tracking-normal text-white/80 after:w-0',
            styleOverrides?.subtitle
          )}
          hidden={subtitle == null}
        >
          {subtitle}
        </Link>
      </div>
    )
  }

  export const Content = createSingleton('div', {
    className: cntl`
      section-content mt-7
    `,
  })
}

export default Section
