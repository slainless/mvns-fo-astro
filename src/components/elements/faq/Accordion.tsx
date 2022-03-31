import * as Accordion_ from '@radix-ui/react-accordion'
import './Accordion.styl'
import { twMerge } from 'tailwind-merge'
import { kebabCase } from 'lodash-es'

module Accordion {
  type ContainerProps = Parameters<typeof Accordion_['Root']>[0] & {
    title: string
  }
  export function Container(props: ContainerProps) {
    const { title, children, className, ...rest } = props
    return (
      <div className="accordion flex flex-col gap-5 max-w-4xl w-full">
        <h2 id={kebabCase(title)}>{title}</h2>
        <Accordion_.Root
          className={twMerge('flex flex-col items-stretch gap-3', className)}
          {...rest}
        >
          {children}
        </Accordion_.Root>
      </div>
    )
  }

  type ItemProps = Omit<Parameters<typeof Accordion_['Item']>[0], 'value'> & {
    title: string
    value?: string
  }
  export function Item(props: ItemProps) {
    const { title, value, className, children, ...rest } = props
    return (
      <Accordion_.Item
        value={value ?? title}
        className={twMerge(
          'opened:ring-2 opened:ring-offset-2 opened:ring-offset-black opened:ring-red-600/50 transition-all rounded-lg overflow-hidden',
          className
        )}
        {...rest}
      >
        <Accordion_.Header className="flex untracked">
          <Accordion_.Trigger
            className={twMerge(
              'flex flex-row w-full justify-between gap-10 text-left items-center py-3 px-10 bg-zinc-900',
              'hover:bg-red-600 transition-all'
            )}
          >
            {title}
            <span className="material-icons-outlined">expand_more</span>
          </Accordion_.Trigger>
        </Accordion_.Header>
        <Accordion_.Content
          className={twMerge(
            'w-full bg-zinc-800',
            'closed:animate-[slideup_0.3s_ease-in-out_forwards] opened:animate-[slidedown_0.3s_ease-in-out_forwards]',
            'max-w-full prose prose-invert'
          )}
          {...rest}
        >
          <div className="px-10 py-5">{children}</div>
        </Accordion_.Content>
      </Accordion_.Item>
    )
  }
}

export default Accordion

// type Props = Parameters<typeof Accordion_['Root']>[0] & {
//   title: string
// }
// export function Accordion(props: Props) {
//   const { title, ...rest } = props
//   return (
//     <div className="accordion">
//       <h3>{title}</h3>
//       <Accordion_.Root {...rest}></Accordion_.Root>
//     </div>
//   )
// }
