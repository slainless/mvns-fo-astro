import Section from '@Blocks/Section'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

type LogoProps = HTMLAttr<'a'> & {
  src: string
}
function Logo(props: LogoProps) {
  const { className, src, ...rest } = props
  return (
    <a className="" {...rest}>
      <img
        src={src}
        className={twMerge(
          'h-28 xs:h-32 w-auto brightness-0 invert transition-all hover:filter-none opacity-60 hover:opacity-100',
          className
        )}
      />
    </a>
  )
}

export default function TrustedBy() {
  return (
    <Section.Container
      id="trusted-by"
      className="flex flex-col w-full gap-8 items-center"
    >
      <Section.Title
        styleOverrides={{
          container: cntl`self-center`,
        }}
      >
        Trusted By
      </Section.Title>
      <Section.Content className="flex flex-col sm:grid grid-cols-3 lg:px-16 gap-y-10 gap-x-12 lg:gap-x-20 items-center justify-center max-w-4xl">
        <Logo src="/media/partners/ceai.svg" />
        <Logo src="/media/partners/blanchard.svg" />
        <Logo src="/media/partners/psb-academy.svg" />
      </Section.Content>
    </Section.Container>
  )
}
