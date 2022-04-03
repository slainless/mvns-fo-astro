import Section from '@Blocks/Section'
import { useEffect } from 'react'
import GetStarted from './get-started.md'
import { twMerge } from 'tailwind-merge'
import DocumentView from '@Elements/DocumentView'
import cntl from 'cntl'

type Props = Parameters<typeof Section['Content']>[0]
export default function View(props: Props) {
  const { className, children, ...rest } = props
  return (
    <DocumentView
      title="Frequently Asked Questions"
      styleOverrides={{
        container: cntl`items-center gap-10 sm:gap-16 pt-10 flex flex-col`,
        title: cntl`text-center`,
      }}
    >
      {children}
    </DocumentView>
  )
}
