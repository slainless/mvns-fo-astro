import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import { Field, Input, TextArea } from './Form'
import { Facebook, Twitter, Instagram, LinkedIn } from '@Bits/Brand'

const Icon = ({ children }: any) => (
  <div className="w-6 h-6 fill-zinc-500">{children}</div>
)

export default function Social() {
  return (
    <section className="grid grid-cols-2 gap-x-10 gap-y-5">
      <fieldset className="contents" name="social-media">
        <Input label="Facebook Link" leadingIcon={<Facebook />} />
        {/* <Input label="Twitter Link" /> */}
        <Input label="Instagram Link" leadingIcon={<Instagram />} />
        <Input label="LinkedIn Link" leadingIcon={<LinkedIn />} />
      </fieldset>
    </section>
  )
}
