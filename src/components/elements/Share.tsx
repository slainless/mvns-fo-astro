import { Common as Button } from '@Bits/Button'
import { Common as Input } from '@Bits/Input'
import Dialog from '@Blocks/Dialog'
import cntl from 'cntl'
import { isValidElement, ReactElement } from 'react'
import {
  Facebook,
  LinkedIn,
  Reddit,
  Telegram,
  Twitter,
  WhatsApp,
} from '@Bits/Brand'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttr<'div'> & {
  title: string
  url: string
}
export default function Share(
  props: Props & { trigger: ReactElement; children?: never }
): JSX.Element
export default function Share(
  props: Props & { children: ReactElement; trigger?: never }
): JSX.Element
export default function Share(
  props: Props & { trigger?: ReactElement; children?: ReactElement }
) {
  const { url, title, trigger, children, ...rest } = props
  const $trigger = isValidElement(children)
    ? children
    : isValidElement(trigger)
    ? trigger
    : null

  if ($trigger == null)
    throw new Error('Trigger or children should be provided.')

  return (
    <Dialog
      trigger={$trigger}
      title={title}
      {...rest}
      className="flex flex-col gap-10 px-3 max-w-sm"
      styleOverrides={{
        title: cntl`text-xl after:content-[':']`,
      }}
    >
      <div className="social-media flex justify-between gap-3 mt-5">
        <SocialButton className="fill-[#1877F2]">
          <Facebook />
        </SocialButton>
        <SocialButton className="fill-[#1DA1F2]">
          <Twitter />
        </SocialButton>
        <SocialButton className="fill-[#26A5E4]">
          <Telegram />
        </SocialButton>
        <SocialButton className="fill-[#FF4500]">
          <Reddit />
        </SocialButton>
        <SocialButton className="fill-[#0A66C2]">
          <LinkedIn />
        </SocialButton>
        <SocialButton className="fill-[#25D366]">
          <WhatsApp />
        </SocialButton>
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          className="url-box border-2 focus:border-red-600 rounded-lg focus:outline-none p-2 resize-none"
          value={url}
        ></textarea>
        <Button
          mods={['fill-black', 'to-fill-red', 'no-translate']}
          className="w-max self-center"
        >
          Copy URL
        </Button>
      </div>
    </Dialog>
  )
}

type ButtonProps = HTMLAttr<'a'>
function SocialButton(props: ButtonProps) {
  const { className, ...rest } = props
  return (
    <a
      className={twMerge(
        'w-10 h-10 cursor-pointer hover:fill-red-600 transition-colors',
        className
      )}
      {...rest}
    ></a>
  )
}
