import join from 'url-join'

type Endpoint<T extends string> = `{{API_ROOT}}/${T}`
function make<T extends string>(path: T): Endpoint<T> {
  return join(import.meta.env.PUBLIC_API_ROOT, path) as Endpoint<T>
}

const Endpoints = {
  LOGIN: make('login'),

  STUDENT_REGISTER: make('register/student'),

  COURSE_ALL: make('courses'),
  COURSE_TRENDING: make('courses/trending'),
  COURSE_OF_TYPE: make('courses/type'),
  COURSE_DETAIL: make('courses/show'),

  BLOG_LATEST: make('blog/latest'),
}

export default Endpoints
