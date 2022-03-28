import Section from '@Blocks/Section'
import * as Tabs from '@radix-ui/react-tabs'
import Expertise from './Register/Expertise'
import Personal from './Register/Personal'
import Social from './Register/Social'
import Work from './Register/Work'

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
          className="flex flex-row items-stretch"
        >
          <Tabs.List className="flex flex-col gap-1 flex-shrink-0 py-10 -mr-1">
            {...TheTabs.map((tab) => (
              <Tabs.Trigger
                className="
                  text-left py-4 pl-10 pr-16 rounded-l-lg font-heading transition-all bg-zinc-800
                  selected:shadow-md  selected:bg-zinc-900 outline-none focus:ring-2
                  selected:z-[2]
                "
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
                className="flex-grow bg-zinc-900 rounded-lg p-16 border-4 border-black z-[1]"
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
