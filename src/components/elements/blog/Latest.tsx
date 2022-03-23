import Item from './Item'
import { blogItems } from '@Dev/dummy'
import Section from '@Blocks/Section'
import cntl from 'cntl'
import { merge } from 'lodash-es'

export default function Latest() {
  return (
    <Section.Container id="all-blog">
      <Section.Title
        styleOverrides={{
          title: cntl`lg:text-4xl`,
        }}
      >
        Latest Blogs
      </Section.Title>
      <Section.Content className="grid grid-cols-2 gap-10">
        <Item
          {...blogItems[0]}
          ratio={16 / 12}
          styleOverrides={{
            desc: cntl`line-clamp-none`,
          }}
        ></Item>
        <div className="grid grid-cols-2 gap-10">
          {blogItems.slice(1).map((item) => (
            <Item {...item} />
          ))}
        </div>
      </Section.Content>
    </Section.Container>
  )
}
