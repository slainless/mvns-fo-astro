import Section from '@Blocks/Section'
import { useEffect } from 'react'
import GetStarted from './get-started.md'
import { twMerge } from 'tailwind-merge'
import DocumentView from '@Elements/DocumentView'

type Props = Parameters<typeof Section['Content']>[0]
export default function View(props: Props) {
  const { className, children, ...rest } = props
  return (
    <Section.Container className="flex flex-col lg:mx-0 max-w-none lg:px-0 items-center">
      <Section.Title>Frequently Asked Questions</Section.Title>
      <Section.Content
        className={twMerge('w-full flex flex-col gap-10 mt-16', className)}
        {...rest}
      >
        <DocumentView className="pl-0 flex flex-col gap-10">
          {children}
        </DocumentView>
      </Section.Content>
    </Section.Container>
  )
}
