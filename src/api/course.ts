import { Course, CourseQuery, CourseResponse, CourseType } from '@Class/course'
import { requestJSON } from '@Functions/request'
import { isEmpty } from 'lodash-es'
import urlJoin from 'url-join'
import create from 'zustand'
import Endpoints from './endpoint'

type Options = {
  page?: number
  limit?: number
  query?: CourseQuery
}

module CourseAPI {
  export function all(options?: Pick<Options, 'page'>) {
    const { page } = options ?? {}
    return requestJSON(urlJoin(Endpoints.COURSE_ALL, `?page=${page}`), {
      useAuth: true,
      method: 'get',
      responseType: {
        200: CourseResponse.Get,
      },
    })
  }

  export function trending(options?: Pick<Options, 'limit'>) {
    const { limit } = options ?? {}
    return requestJSON(
      urlJoin(
        Endpoints.COURSE_TRENDING,
        isEmpty(limit) ? '' : `?limit=${limit ?? 10}`
      ),
      {
        useAuth: true,
        method: 'get',
        responseType: {
          200: CourseResponse.Get,
        },
      }
    )
  }

  export function ofType(
    type: CourseType,
    options?: Pick<Options, 'limit' | 'query'>
  ) {
    const { limit, query } = options ?? {}

    if (Object.values(CourseType).includes(type) == false) {
      throw new Error(`Course should be of type 'video/online/physical'`)
    }

    return requestJSON(
      urlJoin(
        Endpoints.COURSE_OF_TYPE,
        type,
        `?q=${query ?? 'newest'}`,
        isEmpty(limit) ? '' : `&limit=${limit ?? 10}`
      ),
      {
        useAuth: true,
        method: 'get',
        responseType: {
          200: CourseResponse.Get,
        },
      }
    )
  }

  export function detail(id: number | string) {
    return requestJSON(urlJoin(Endpoints.COURSE_DETAIL, id.toString()), {
      method: 'get',
      responseType: {
        200: CourseResponse.GetOne,
      },
    })
  }
}

export type CourseStore = {
  course: Course | null
  loading: boolean
  getCourse: (id: string | number) => void
}
export const useCourseStore = create<CourseStore>((set, get) => ({
  course: null,
  loading: false,
  getCourse: async (id: string | number) => {
    if (get().loading == true) return

    set({ loading: true })
    const { data } = (await CourseAPI.detail(id)) ?? {}
    set({ loading: false })
    if (!(data instanceof CourseResponse.GetOne))
      throw new Error('Response Mismatch')
    if (!(data.data instanceof Course)) throw new Error('Response Mismatch')
    return set({
      course: data.data,
    })
  },
}))

export default CourseAPI
