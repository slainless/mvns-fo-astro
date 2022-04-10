import Section from '@Blocks/Section'
import * as Tabs from '@radix-ui/react-tabs'
import Expertise from './Register/Expertise'
import Personal from './Register/Personal'
import Social from './Register/Social'
import Work from './Register/Work'
import { twMerge } from 'tailwind-merge'

const TheTabs = [
  ['Personal Identity', <Personal />],
  ['Social Media', <Social />],
  ['Work Experience', <Work />],
  ['Expertise', <Expertise />],
] as const

export default function Register() {
  return (
    <Section.Container>
      <Section.Title>Instructor Register Form</Section.Title>
      <Section.Content className="lg:mt-12">
        <Tabs.Root
          orientation="vertical"
          defaultValue={TheTabs[0][0]}
          className="flex flex-col md:flex-row items-stretch gap-y-5"
        >
          <Tabs.List
            className={twMerge(
              'flex-col gap-1 flex-shrink-0 md:-mr-1 ',
              'p-1 bg-neutral-900 grid grid-cols-2 rounded-lg',
              'md:flex md:bg-transparent md:px-0 md:py-10'
            )}
          >
            {...TheTabs.map((tab) => (
              <Tabs.Trigger
                className={twMerge(
                  'text-left rounded-lg font-heading transition-all bg-neutral-800',
                  'selected:shadow-md selected:bg-neutral-700 outline-none focus:ring-2 selected:z-[2]',
                  'text-sm px-5 py-3',
                  'lg:py-4 lg:pl-10 lg:pr-16 lg:text-base md:selected:bg-neutral-900 md:rounded-r-none'
                )}
                value={tab[0]}
              >
                {tab[0]}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <form className="contents">
            {...TheTabs.map((tab) => (
              <Tabs.Content
                value={tab[0]}
                className="flex-grow bg-neutral-900 rounded-lg p-5 sm:p-7 lg:p-16 md:border-4 border-black z-[1] -mx-5 xs:mx-0"
              >
                {tab[1]}
              </Tabs.Content>
            ))}
          </form>
        </Tabs.Root>
      </Section.Content>
    </Section.Container>
  )
}
