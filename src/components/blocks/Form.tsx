import { createMods } from '@Functions/style-helper'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import { isString, partition } from 'lodash-es'
import { Icon } from '@Bits/Button'
import {
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import Tagify from '@yaireo/tagify'
import { Label } from '@radix-ui/react-label'

type FieldProps = {
  label?: string
  info?: ReactNode
  styleOverrides?: {
    container?: string
    label?: string
  }
}
export function Field(
  props: HTMLAttr<'div'> &
    FieldProps & {
      htmlFor?: string
    }
): JSX.Element {
  const { label, info, styleOverrides, children, htmlFor, ...rest } = props
  return (
    <div
      className={twMerge(
        'field-set',
        'flex flex-col',
        styleOverrides?.container
      )}
      {...rest}
    >
      {label == null || label == '' ? null : (
        <Label
          className={twMerge(
            'input-label mb-2 uppercase text-xs tracking-widest text-white/80'
          )}
          htmlFor={htmlFor}
        >
          {label}
        </Label>
      )}
      {children}
      <div
        className={twMerge(
          'input-notice text-xs text-white/80',
          info != '' && info != null ? 'mt-1' : ''
        )}
      >
        {info}
      </div>
    </div>
  )
}

const CommonIconStyle = cntl`
  pointer-events-none select-none
  absolute text-zinc-500
`
type CommonIcon = string | Parameters<typeof Icon>[0] | ReactElement
const CommonIcon = (props: {
  input?: CommonIcon
  defaultStyle: string
}): JSX.Element | null => {
  const { input, defaultStyle } = props
  if (input == null) return null

  if (isString(input))
    return (
      <Icon
        as="div"
        className={twMerge(CommonIconStyle, defaultStyle)}
        icon={input}
      />
    )

  if (isValidElement(input))
    return (
      <div
        className={twMerge(
          CommonIconStyle,
          'w-6 h-6 fill-zinc-500',
          defaultStyle
        )}
      >
        {input}
      </div>
    )

  return (
    <Icon
      {...input}
      className={twMerge(CommonIconStyle, defaultStyle, input?.className)}
    />
  )
}

const CommonInputStyle = cntl`
  transition-colors outline-none
  px-5 py-2.5 w-full
  font-heading
  text-sm
  rounded-md
`
const CommonInputMods = createMods({
  'darker-icon': cntl`text-black/60`,

  'darker-bg': cntl`bg-black/20 focus:bg-black/40 text-white`,
  'lighter-bg': cntl`bg-white/20 focus:bg-white/40 text-black font-medium`,
  'lightest-bg': cntl`bg-white/90 focus:bg-white text-black font-medium`,

  'darker-border': cntl`border-2 border-black/10`,
  'whiter-border': cntl`border-2 border-white/10`,

  'red-border': cntl`border-2 border-red-600`,
  'hover-whiter-border': cntl`hover:border-white/10`,
  'hover-darker-border': cntl`hover:border-black/10`,
  'hover-red-border': cntl`hover:border-red-600`,

  'focus-whiter-border': cntl`focus:border-white/10 focus-within:border-white/10`,
  'focus-darker-border': cntl`focus:border-black/10 focus-within:border-black/10`,
  'focus-red-border': cntl`focus:border-red-600 focus-within:border-red-600`,

  'focus-ring': cntl`focus:ring-2 focus-within:ring-2`,
})

type InputProps = HTMLAttr<'input'> &
  FieldProps & {
    mods?: ModKeys<typeof CommonInputMods>
    leadingIcon?: CommonIcon
    trailingIcon?: CommonIcon
    styleOverrides?: {
      input?: string
      icon?: {
        leading?: string
        trailing?: string
      }
    }
  }
export function Input(props: InputProps): JSX.Element {
  const {
    label,
    info,
    mods,
    styleOverrides,
    leadingIcon,
    trailingIcon,
    className,
    name,
    ...rest
  } = props

  const [iconMods, restMods] = partition(mods, (mod) => mod.endsWith('icon'))

  return (
    <Field
      label={label}
      info={info}
      htmlFor={name}
      styleOverrides={styleOverrides}
    >
      <div className="input-set relative flex h-full items-center">
        <input
          className={twMerge(
            CommonInputStyle,
            ...CommonInputMods.parse(restMods as typeof mods),
            leadingIcon != null ? 'pl-10' : '',
            trailingIcon != null ? 'pr-10' : '',
            className,
            styleOverrides?.input
          )}
          {...rest}
        ></input>
        <CommonIcon
          input={leadingIcon}
          defaultStyle={twMerge(
            ...CommonInputMods.parse(iconMods as typeof mods),
            'left-2',
            styleOverrides?.icon?.leading
          )}
        />
        <CommonIcon
          input={trailingIcon}
          defaultStyle={twMerge(
            ...CommonInputMods.parse(iconMods as typeof mods),
            'right-2',
            styleOverrides?.icon?.trailing
          )}
        />
      </div>
    </Field>
  )
}

type TextAreaProps = HTMLAttr<'textarea'> &
  FieldProps & {
    mods?: ModKeys<typeof CommonInputMods>
    styleOverrides?: {
      textarea?: string
    }
  }
export function TextArea(props: TextAreaProps): JSX.Element {
  const { label, info, mods, styleOverrides, className, name, ...rest } = props

  return (
    <Field
      label={label}
      info={info}
      htmlFor={name}
      styleOverrides={{
        container: styleOverrides?.container,
        label: styleOverrides?.label,
      }}
    >
      <textarea
        className={twMerge(
          CommonInputStyle,
          ...CommonInputMods.parse(mods),
          className,
          styleOverrides?.textarea
        )}
        {...rest}
      ></textarea>
    </Field>
  )
}

const TaggerStyle = cntl`
  font-body
`
type TaggerProps = HTMLAttr<'textarea'> &
  FieldProps & {
    mods?: ModKeys<typeof CommonInputMods>
  }
export function Tagger(props: TaggerProps): JSX.Element {
  const { label, info, className, styleOverrides, mods, name, ...rest } = props
  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (ref.current == null) return

    const tagify = new Tagify(ref.current)
  }, [ref])
  return (
    <Field
      label={label}
      htmlFor={name}
      info={
        <div className="transition-opacity opacity-0 group-focus-within:opacity-100 group-hover:opacity-100">
          Multiple answer allowed: press{' '}
          <kbd className="text-[0.6rem]">Enter</kbd> key to add another answer.
        </div>
      }
      styleOverrides={{
        container: twMerge('group', styleOverrides?.container),
        label: styleOverrides?.label,
      }}
    >
      <textarea
        ref={ref}
        className={twMerge(
          CommonInputStyle,
          TaggerStyle,
          ...CommonInputMods.parse(mods),
          className
        )}
        {...rest}
      ></textarea>
    </Field>
  )
}
