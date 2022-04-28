import Item, { ItemData } from './Item'
import { blogItems } from '@Dev/dummy'
import Section from '@Blocks/Section'
import cntl from 'cntl'
import { isEmpty, merge } from 'lodash-es'
import { useRequest } from 'ahooks'
import BlogAPI from '@Api/blog'
import { useEffect, useState } from 'react'
import { getData } from '@Functions/request'
import { BlogResponse } from '@Class/blog'
import { nanoid } from 'nanoid'

export default function Latest() {
  const {
    data: res,
    loading,
    error,
  } = useRequest(BlogAPI.latest, {
    defaultParams: [{ limit: 5 }],
  })
  const [display, setDisplay] = useState<ItemData[]>(blogItems)

  useEffect(() => {
    if (res == null) return
    const articles = getData(res, BlogResponse.Get)
    if (articles == null) return

    setDisplay(
      articles.map((article) => ({
        title: article.title,
        tags: ['News'],
        desc: article.content,
        date: new Date(article.updated_at ?? 0),
        href: `/blog/detail?id=${article.id}`,
        bgImg:
          isEmpty(article.thumbnail_url) ||
          /^http...localhost|^https...mavens.upanastudio.com/.test(
            article.thumbnail_url
          )
            ? `https://picsum.photos/800?rand=${nanoid(10)}`
            : article.thumbnail_url,
      }))
    )
  }, [res])
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
          {...display[0]}
          styleOverrides={{
            container: cntl`pb-10 sm:pb-0 border-b-2 sm:border-b-0`,
            desc: cntl`line-clamp-3 md:line-clamp-6`,
          }}
        ></Item>
        <div className="contents lg:grid grid-cols-2 gap-10">
          {display.slice(1, 5).map((item) => (
            <Item
              {...item}
              styleOverrides={{
                container: cntl`pb-10 sm:pb-0 border-b-2 last:border-b-0 sm:border-b-0`,
                // ...item.styleOverrides,
              }}
            />
          ))}
        </div>
      </Section.Content>
    </Section.Container>
  )
}
