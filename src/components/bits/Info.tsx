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
