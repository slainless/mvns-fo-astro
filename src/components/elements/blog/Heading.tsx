import BlogAPI, { useBlogStore } from '@Api/blog'
import { Icon } from '@Bits/Button'
import { Blog, BlogResponse } from '@Class/blog'
import Share from '@Elements/Share'
import isBrowser from '@Functions/isBrowser'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Separator } from '@radix-ui/react-separator'
import { useRequest } from 'ahooks'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import shallow from 'zustand/shallow'

type Props = {
  title: string
  tags: string[]
  author: string
  date: string
  img: string
  imgCaption: string
}

export default function Heading() {
  const [article, loading] = useBlogStore(
    (state) => [state.article, state.loading],
    shallow
  )

  // const article = {
  //   title: 'Everything You Need to Know About Business & Marketing',
  //   tags: ['News', 'Business'],
  //   author: 'Paul Bankhead',
  //   date: 'January 20, 2022',
  //   img: '/media/blog-thumb.png',
  //   subtitle: 'Caption of picture',
  // }

  return (
    <>
      <header id="blog-heading" className="flex flex-col gap-2">
        <h1
          id="blog-title"
          className={twMerge(
            'order-2',
            !isBrowser || loading
              ? 'h-10 w-[32rem] skeleton-zinc-light'
              : 'text-2xl xs:text-3xl sm:text-4xl font-heading max-w-[30ch] font-bold'
          )}
        >
          {article?.title}
        </h1>
        <div className="order-3">
          <div
            id="blog-author"
            className={twMerge(
              !isBrowser || loading
                ? 'h-6 w-32 skeleton-zinc-light'
                : 'text-red-600 font-bold'
            )}
          >
            {/* {article?.user_id} */}
            {'Paul Bankhead'}
          </div>
          <div
            id="blog-date"
            className={twMerge(
              'mt-1',
              !isBrowser || loading
                ? 'h-6 w-32 skeleton-zinc-light'
                : 'text-black/50 text-sm'
            )}
          >
            {/* {article?.updated_at} */}
            {'January 20, 2022'}
          </div>
        </div>
        <ul id="blog-categories" className="flex flex-row gap-1 order-1">
          {['News', 'Business'].map((tag, index) => (
            <li
              key={tag + index}
              className="text-white bg-red-600 px-2 py-0.5 uppercase w-max rounded-sm text-xs md:text-base"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>
      <section id="blog-background" className="flex flex-col gap-3">
        <AspectRatio ratio={16 / 9} className="relative">
          <div
            id="blog-image"
            className={twMerge(
              'w-full h-full bg-cover',
              !isBrowser || loading ? 'skeleton-zinc-light' : ''
            )}
            style={{
              backgroundImage:
                !isBrowser || loading ? '' : `url('https://picsum.photos/800')`,
            }}
          ></div>
          <Share
            title="Share this blog"
            data={
              article
                ? {
                    ...article,
                    href: `https://mavens.upanastudio.com/blog/detail?id=${article.id}`,
                  }
                : null
            }
          >
            <Icon
              icon="share"
              className={twMerge(
                'absolute bottom-0 left-0 flex flex-row gap-2 py-2 px-4 bg-black/50 text-white text-base transition-colors hover:bg-red-600/50',
                !isBrowser || loading ? 'hidden' : ''
              )}
            >
              Share
            </Icon>
          </Share>
        </AspectRatio>
        <div
          id="blog-image-caption"
          className={twMerge(
            !isBrowser || loading
              ? 'w-64 h-5 skeleton-zinc-light'
              : 'text-gray-500 text-sm'
          )}
        >
          {article?.subtitle}
        </div>
        <Separator className="w-full h-[2px] bg-gray-300" />
      </section>
    </>
  )
}
