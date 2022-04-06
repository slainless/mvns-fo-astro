import { twMerge } from 'tailwind-merge'

type CommonProps = HTMLAttr<'div'> & {
  iconType?: 'normal' | 'outlined'
  icon: string
  iconClass?: string
}
export function Common(props: CommonProps) {
  const { className, iconType, icon, iconClass, children, ...rest } = props
  return (
    <div
      className={twMerge('inline-flex items-center gap-1', className)}
      {...rest}
    >
      <span
        className={twMerge(
          iconType == null || iconType == 'outlined'
            ? 'material-icons-outlined'
            : 'material-icons',
          iconClass
        )}
        children={icon}
      />
      {children}
    </div>
  )
}
