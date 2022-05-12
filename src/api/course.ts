import { Course, CourseQuery, CourseResponse, CourseType } from '@Class/course'
import { requestJSON } from '@Functions/request'
import { isEmpty } from 'lodash-es'
import urlJoin from 'url-join'
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
        method: 'get',
        responseType: {
          200: CourseResponse.Get,
        },
      }
    )
  }
}

export default CourseAPI
