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
        <div className="flex flex-row gap-10 items-center">
          <Avatar.Root className="w-20 rounded-full overflow-hidden">
            <Avatar.Image src="/media/avatar (2).png" />
            <Avatar.Fallback />
          </Avatar.Root>
          <div id="authorship" className="flex flex-col gap-2">
            <span
              id="author"
              className="text-2xl font-bold before:font-normal before:content-['Meet_your_host,_']"
            >
              Uwuis Zainal
            </span>
            <span id="join-since" className="text-gray-500 text-sm">
              Hosted on Mavensdotlive since 2019
            </span>
          </div>
        </div>
        <p id="author-summary" className="text-white/70">
          Pg Muhd Uwuis Al Qarni is a certified Professional Scrum Master,
          Product Owner and a Business Coach with his vast experience mainly in
          Software Development Projects. He is keen to support the community in
          coaching startups with their product designs and business model.
        </p>
      </Section.Content>
    </Section.Container>
  )
}
