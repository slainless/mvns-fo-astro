import Ads from '@Blocks/Ads'
import Section from '@Blocks/Section'
import { blogItems } from '@Dev/dummy'
import { Separator } from '@radix-ui/react-separator'
import cntl from 'cntl'
import { merge } from 'lodash-es'
import Item from './Item'

export default function All() {
  return (
    <Section.Container>
      <Section.Content className="flex flex-row gap-10">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col items-center">
            <Section.Title className="bg-white z-[1] px-5">
              All Blogs
            </Section.Title>
            <Separator className="w-full h-[1px] bg-black absolute top-1/2 -translate-y-1/2" />
          </div>
          <div id="all-blogs" className="flex flex-col gap-10">
            {blogItems.map((item) => {
              return (
                <Item
                  {...merge<Partial<typeof item>, typeof item>(
                    {
                      styleOverrides: {
                        container: cntl`flex flex-row gap-10`,
                        content: cntl`w-2/3`,
                        background: {
                          container: cntl`w-1/3 flex-grow`,
                        },
                        title: cntl`order-2`,
                        tags: { container: cntl`order-1` },
                        desc: cntl`order-3`,
                      },
                      ratio: 16 / 12,
                    },
                    item
                  )}
                />
              )
            })}
          </div>
        </div>
        <Ads
          width={300}
          height={600}
          src="/media/sidebar-ad-placeholder.png"
          id="sidebar-ads"
          className="sticky items-start h-max w-max flex-shrink-0 top-0"
        />
      </Section.Content>
    </Section.Container>
  )
}
