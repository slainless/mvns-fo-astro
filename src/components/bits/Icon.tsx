type CommonProps = HTMLAttr<'div'> & {
  iconType?: 'normal' | 'outlined'
  icon: string
}
export function Common(props: CommonProps) {
  const { className, iconType, icon, children, ...rest } = props
  return (
    <div className={className} {...rest}>
      <span
        className={
          iconType == null || iconType == 'outlined'
            ? 'material-icons-outlined'
            : 'material-icons'
        }
        children={icon}
      />
      {children}
    </div>
  )
}
