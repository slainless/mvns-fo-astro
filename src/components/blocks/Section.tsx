import type { FunctionComponent } from 'preact'
import cntl from 'cntl'
import { createSingleton } from '@Functions/jsx-factory'
import { twMerge } from 'tailwind-merge'

module Section {
  export const Container = createSingleton('section', {
    class: cntl`
      container mx-auto
      px-0 lg:px-12 overflow-hidden
    `,
  })

  type HeadingAttr = HTMLAttributes<HTMLHeadingElement>
  export const Title: FunctionComponent<
    HeadingAttr & {
      subtitle?: string
      subtitleHref?: string
    }
  > = (props) => {
    const { class: cls, subtitle, subtitleHref, ...rest } = props
    return (
      <div
        class={cntl`
          inline-flex items-center justify-start
          flex-wrap
          gap-x-5
          gap-y-2
          px-7 lg:px-0
        `}
      >
        <h2
          {...rest}
          class={twMerge(
            cntl`
              section-title font-semibold
              text-2xl lg:text-3xl
            `,
            cls
          )}
        />
        <a
          href={subtitleHref}
          class="section-subtitle opacity-80 text-lg"
          hidden={subtitle == null}
        >
          {subtitle}
        </a>
      </div>
    )
  }

  export const Content = createSingleton('div', {
    class: cntl`
      section-content mx-7 lg:mx-0
      mt-7
    `,
  })
}

export default Section
