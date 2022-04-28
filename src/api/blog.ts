import { Blog, BlogResponse } from '@Class/blog'
import { requestJSON } from '@Functions/request'
import urlJoin from 'url-join'
import create from 'zustand'
import Endpoints from './endpoint'
import { isArray } from 'lodash-es'
import React from 'react'
import { useEffect } from 'react'

type Options = {
  page?: number
  limit?: number
}

module BlogAPI {
  export function all(options?: Pick<Options, 'page'>) {
    const { page } = options ?? {}
    return requestJSON(urlJoin(Endpoints.BLOG_ALL, `?page=${page}`), {
      method: 'get',
      responseType: {
        200: BlogResponse.Get,
      },
    })
  }

  export function latest(options?: Pick<Options, 'limit'>) {
    const { limit } = options ?? {}
    return requestJSON(
      urlJoin(Endpoints.BLOG_LATEST, `?limit=${limit ?? 10}`),
      {
        method: 'get',
        responseType: {
          200: BlogResponse.Get,
        },
      }
    )
  }

  export function detail(id: number | string) {
    return requestJSON(urlJoin(Endpoints.BLOG_DETAIL, id.toString()), {
      method: 'get',
      responseType: {
        200: BlogResponse.GetOne,
      },
    })
  }
}

export type BlogStore = {
  article: Blog | null
  loading: boolean
  getArticle: (id: string | number) => void
}
export const useBlogStore = create<BlogStore>((set, get) => ({
  article: null,
  loading: false,
  getArticle: async (id: string | number) => {
    if (get().loading == true) return

    set({ loading: true })
    const { data } = (await BlogAPI.detail(id)) ?? {}
    set({ loading: false })
    if (!(data instanceof BlogResponse.GetOne))
      throw new Error('Response Mismatch')
    if (!(data.data instanceof Blog)) throw new Error('Response Mismatch')
    return set({
      article: data.data,
    })
  },
}))

export default BlogAPI
