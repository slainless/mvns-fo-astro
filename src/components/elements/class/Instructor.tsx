import { useCourseStore } from '@Api/course'
import Section from '@Blocks/Section'
import * as Avatar from '@radix-ui/react-avatar'
import cntl from 'cntl'
import { DateTime } from 'luxon'
import { twMerge } from 'tailwind-merge'
import isBrowser from '@Functions/isBrowser'
import shallow from 'zustand/shallow'

export default function Instructor() {
  const [course, loading] = useCourseStore(
    (state) => [state.course, state.loading],
    shallow
  )

  return (
    <Section.Container id="the-instructor">
      <Section.Title id="the-instructor-title" className="lg:text-3xl">
        Instructor
      </Section.Title>
      <Section.Content className="flex flex-col gap-10 max-w-xl">
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-center">
          <Avatar.Root
            className={twMerge(
              'w-32 sm:w-20 h-32 sm:h-20 rounded-full overflow-hidden',
              !isBrowser || loading
                ? 'skeleton-zinc-dark !rounded-full h-20'
                : ''
            )}
          >
            <Avatar.Image
              className={twMerge('w-full h-full object-cover')}
              src="/media/avatar (2).png"
            />
            <Avatar.Fallback />
          </Avatar.Root>
          <div id="authorship" className="flex flex-col gap-1 sm:gap-2">
            <span
              id="author"
              className={twMerge(
                "text-2xl font-bold before:font-normal sm:before:content-['Meet_your_host,_']",
                !isBrowser || loading ? 'skeleton-zinc-dark h-8 w-72' : ''
              )}
            >
              {course?.instructor_user.firstname}{' '}
              {course?.instructor_user.lastname}
            </span>
            <span
              id="join-since"
              className={twMerge(
                'text-neutral-400 text-sm',
                !isBrowser || loading ? 'skeleton-zinc-dark h-5 w-64' : ''
              )}
            >
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
