import Section from '@Blocks/Section'
import * as Avatar from '@radix-ui/react-avatar'
import cntl from 'cntl'

export default function Instructor() {
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
              Uwuis Zainal
            </span>
            <span id="join-since" className="text-neutral-400 text-sm">
              Hosted on Mavensdotlive since 2019
            </span>
          </div>
        </div>
        <div className="prose prose-invert">
          <p id="author-summary">
            Pg Muhd Uwuis Al Qarni is a certified Professional Scrum Master,
            Product Owner and a Business Coach with his vast experience mainly
            in Software Development Projects. He is keen to support the
            community in coaching startups with their product designs and
            business model.
          </p>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
