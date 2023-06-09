import Ads from '@Blocks/Ads'
import Section from '@Blocks/Section'
import { Separator } from '@radix-ui/react-separator'
import List from './List'

export default function All() {
  return (
    <Section.Container>
      <Section.Content className="flex flex-row justify-between gap-10">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col items-center">
            <Section.Title className="bg-white z-[1] px-5">
              All Blogs
            </Section.Title>
            <Separator className="w-full h-[1px] bg-black absolute top-1/2 -translate-y-1/2" />
          </div>
          <List />
        </div>
        <Ads
          width={300}
          height={600}
          src="/media/sidebar-ad-placeholder.png"
          id="sidebar-ads"
          className="hidden lg:block sticky items-start h-max flex-shrink-1 top-0 w-full"
        />
      </Section.Content>
    </Section.Container>
  )
}
