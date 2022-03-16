import { twMerge } from 'tailwind-merge'

type QuotaProps = {
  filled: number
  max: number
  suffix?: any
}

type SpanAttr = HTMLAttributes<HTMLSpanElement>
export const Quota: FunctionComponent<SpanAttr & QuotaProps> = (props) => {
  const { filled, max, className: cls, children, suffix, ...rest } = props
  return (
    <span
      {...rest}
      className={twMerge('quota flex gap-2 text-sm items-center', cls)}
    >
      <span className="text-base">
        <span className="material-icons-outlined" aria-label="icon">
          how_to_reg
        </span>
      </span>
      <span>
        <span className="filled">{filled.toString()}</span>/
        <span className="limit font-bold">{max.toString()}</span>
      </span>
      {suffix ?? children}
    </span>
  )
}

export const Calendar: FunctionComponent<SpanAttr> = (props) => {
  const { className: cls, children, ...rest } = props
  return (
    <span
      {...rest}
      className={twMerge('date flex gap-2 text-sm items-center', cls)}
    >
      <span className="text-base">
        <span className="material-icons-outlined" aria-label="icon">
          event
        </span>
      </span>
      <span>{children}</span>
    </span>
  )
}

export const SkillLevel: FunctionComponent<SpanAttr> = (props) => {
  const { className: cls, children, ...rest } = props
  return (
    <span
      {...rest}
      className={twMerge('skill-level flex gap-2 text-sm items-center', cls)}
    >
      <span className="text-base">
        <span className="material-icons-outlined" aria-label="icon">
          insights
        </span>
      </span>
      <span>{children}</span>
    </span>
  )
}

type CommonProps = SpanAttr & {
  icon: string
  text?: string
  outlined?: boolean
  styleOverrides?: {
    container?: string
    icon?: string
    text?: string
  }
}
export function Common(props: CommonProps) {
  const { icon, text, outlined, styleOverrides, className, children, ...rest } =
    props
  return (
    <span
      className={twMerge(
        'common-info text-lg flex flex-row items-center gap-2',
        className,
        styleOverrides?.container
      )}
      {...rest}
    >
      <span
        className={twMerge(
          outlined == null || outlined
            ? 'material-icons-outlined'
            : 'material-icons',
          styleOverrides?.icon
        )}
      >
        {icon}
      </span>
      <span
        className={twMerge('common-info-text text-md', styleOverrides?.text)}
      >
        {text ?? children}
      </span>
    </span>
  )
}
