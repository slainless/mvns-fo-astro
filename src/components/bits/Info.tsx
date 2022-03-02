import { twMerge } from 'tailwind-merge'

type QuotaProps = {
  filled: number
  max: number
  suffix?: any
}

type SpanAttr = HTMLAttributes<HTMLSpanElement>
export const Quota: FunctionComponent<SpanAttr & QuotaProps> = (props) => {
  const { filled, max, class: cls, children, suffix, ...rest } = props
  return (
    <span
      {...rest}
      class={twMerge('quota flex gap-2 text-sm items-center', cls)}
    >
      <span class="text-base">
        <span class="material-icons-outlined" aria-label="icon">
          how_to_reg
        </span>
      </span>
      <span>
        <span class="filled">{filled}</span>/
        <span class="limit font-bold">{max}</span>
      </span>
      {suffix ?? children}
    </span>
  )
}

export const Calendar: FunctionComponent<SpanAttr> = (props) => {
  const { class: cls, children, ...rest } = props
  return (
    <span
      {...rest}
      class={twMerge('date flex gap-2 text-sm items-center', cls)}
    >
      <span class="text-base">
        <span class="material-icons-outlined" aria-label="icon">
          event
        </span>
      </span>
      <span>{children}</span>
    </span>
  )
}
