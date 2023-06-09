import { WishResponse } from '@Class/wishlist'
import { requestJSON } from '@Functions/request'
import urlJoin from 'url-join'
import Endpoints from './endpoint'

module WishlistAPI {
  export function add(courseId?: number) {
    return requestJSON(urlJoin(Endpoints.WISH_ADD), {
      useAuth: true,
      method: 'post',
      json: {
        course_id: courseId,
      },
      responseType: {
        201: WishResponse.Add,
      },
    })
  }

  export function remove(courseId?: number) {
    return requestJSON(
      urlJoin(Endpoints.WISH_REMOVE, courseId?.toString() ?? ''),
      {
        useAuth: true,
        method: 'delete',
        responseType: {
          200: WishResponse.Remove,
        },
      }
    )
  }
}

export default WishlistAPI
