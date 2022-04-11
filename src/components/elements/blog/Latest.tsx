import Item from './Item'
import { blogItems } from '@Dev/dummy'
import Section from '@Blocks/Section'
import cntl from 'cntl'
import { merge } from 'lodash-es'

export default function Latest() {
  return (
    <Section.Container
      id="all-blog"
      className="flex flex-col gap-10 sm:gap-7 mt-7"
    >
      <Section.Title className="border-b-2 sm:border-b-0 pb-5 w-full text-3xl lg:text-4xl">
        Latest Blogs
      </Section.Title>
      <Section.Content className="flex flex-col sm:grid grid-cols-2 gap-10 mt-0">
        <Item
          {...blogItems[0]}
          styleOverrides={{
            container: cntl`pb-10 sm:pb-0 border-b-2 sm:border-b-0`,
            desc: cntl`line-clamp-3 md:line-clamp-none`,
          }}
        ></Item>
        <div className="contents lg:grid grid-cols-2 gap-10">
          {blogItems.slice(1).map((item) => (
            <Item
              {...item}
              styleOverrides={{
                container: cntl`pb-10 sm:pb-0 border-b-2 last:border-b-0 sm:border-b-0`,
                ...item.styleOverrides,
              }}
            />
          ))}
        </div>
      </Section.Content>
    </Section.Container>
  )
}
