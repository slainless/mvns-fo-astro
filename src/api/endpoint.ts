import join from 'url-join'

type Endpoint<T extends string> = `{{API_ROOT}}/${T}`
function make<T extends string>(path: T): Endpoint<T> {
  return join(import.meta.env.PUBLIC_API_ROOT, path) as Endpoint<T>
}

const Endpoints = {
  LOGIN: make('login'),

  STUDENT_REGISTER: make('register/student'),

  SEARCH: make('search'),

  CATEGORY_ALL: make('categories'),

  COURSE_ALL: make('courses'),
  COURSE_TRENDING: make('courses/trending'),
  COURSE_OF_TYPE: make('courses/type'),
  COURSE_DETAIL: make('courses/show'),

  BLOG_ALL: make('blogs'),
  BLOG_LATEST: make('blogs/latest'),
  BLOG_DETAIL: make('blogs/show'),

  WISH_ADD: make('my/wishlist'),
  WISH_REMOVE: make('my/wishlist/destory'),

  CART_ADD: make('my/cart'),
  CART_ALL: make('my/cart'),
  CART_REMOVE: make('my/cart/destroy'),

  INTEREST_SET: make('my/course-interest'),
  INTEREST_GET: make('my/course-interest'),
}

export default Endpoints
