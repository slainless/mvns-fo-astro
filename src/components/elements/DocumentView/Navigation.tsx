import { twMerge } from 'tailwind-merge'

type Props = Omit<HTMLAttr<'ul'>, 'children'> & {
  headings: HTMLHeadingElement[]
  activeHeadings: HTMLHeadingElement[]
}
export default function Navigation(props: Props) {
  const { className, headings, activeHeadings, ...rest } = props
  return (
    <aside
      id="navigation-sidebar"
      className={twMerge(
        'hidden md:block h-max items-start top-[calc(theme(spacing.header)_+_theme(spacing.10))] sticky'
      )}
    >
      <ul
        className={twMerge(
          'flex flex-col gap-3',
          'uppercase tracking-widest overflow-auto text-xs lg:text-sm',
          className
        )}
        {...rest}
      >
        {headings.map((heading, i) => (
          <li
            key={heading.id}
            className={twMerge(
              'relative transition-all after:transition-all',
              'after:w-0 after:h-full after:bg-red-600 after:absolute after:-left-3 after:top-0',
              activeHeadings[0]?.id === heading.id ? 'text-red-600' : ''
            )}
          >
            <a href={'#' + heading.id}>{heading.textContent}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
