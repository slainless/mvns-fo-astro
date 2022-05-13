import { useCourseStore } from '@Api/course'
import Section from '@Blocks/Section'
import * as Avatar from '@radix-ui/react-avatar'
import cntl from 'cntl'
import { DateTime } from 'luxon'

export default function Instructor() {
  const course = useCourseStore((state) => state.course)
  return (
    <Section.Container id="the-instructor">
      <Section.Title id="the-instructor-title" className="lg:text-3xl">
        Instructor
      </Section.Title>
      <Section.Content className="flex flex-col gap-10 max-w-xl">
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-center">
          <Avatar.Root className="w-32 sm:w-20 rounded-full overflow-hidden">
            <Avatar.Image
              className="w-full h-full object-cover"
              src="/media/avatar (2).png"
            />
            <Avatar.Fallback />
          </Avatar.Root>
          <div id="authorship" className="flex flex-col gap-1 sm:gap-2">
            <span
              id="author"
              className="text-2xl font-bold before:font-normal sm:before:content-['Meet_your_host,_'] text-center"
            >
              {course?.instructor_user.firstname}{' '}
              {course?.instructor_user.lastname}
            </span>
            <span id="join-since" className="text-neutral-400 text-sm">
              Hosted on Mavensdotlive since{' '}
              {DateTime.fromISO(course?.instructor_user.created_at ?? '').year}
            </span>
          </div>
        </div>
        <div className="prose prose-invert">
          <p id="author-summary">
            {/* @ts-expect-error */}
            {course?.instructor_user['description']}
          </p>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
