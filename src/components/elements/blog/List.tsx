import { blogItems } from '@Dev/dummy'
import cntl from 'cntl'
import { merge, isEmpty } from 'lodash-es'
import Item, { ItemData } from './Item'
import BlogAPI from '@Api/blog'
import { BlogResponse } from '@Class/blog'
import { getData } from '@Functions/request'
import { useRequest } from 'ahooks'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

export default function List() {
  const {
    data: res,
    loading,
    error,
  } = useRequest(BlogAPI.all, {
    defaultParams: [],
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
    <div
      id="all-blogs"
      className="flex flex-col sm:grid lg:flex grid-cols-2 gap-10"
    >
      {display.map((item) => {
        return (
          <Item
            {...merge<Partial<Parameters<typeof Item>[0]>, typeof item>(
              {
                styleOverrides: {
                  container: cntl`flex lg:flex-row gap-5 lg:gap-10 pb-10 sm:pb-0 border-b-2 last:border-b-0 sm:border-b-0`,
                  content: cntl`lg:w-2/3 pr-0 lg:pr-10`,
                  background: {
                    container: cntl`h-1/4 lg:w-1/3 flex-grow`,
                  },
                  title: cntl`order-2`,
                  tags: { container: cntl`order-1` },
                  desc: cntl`order-3 max-w-[350ch]`,
                  info: {
                    container: cntl`order-4`,
                  },
                },
                ratio: 16 / 12,
              },
              item
            )}
          />
        )
      })}
    </div>
  )
}
