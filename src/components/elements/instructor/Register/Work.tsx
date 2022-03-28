import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import { Field, Input, TextArea, Tagger } from './Form'

export default function Expertise() {
  return (
    <section className="grid grid-cols-2 gap-x-10 gap-y-5">
      <fieldset className="contents" name="work-experience">
        <Tagger
          label="Relevant Experiences/Achievements"
          styleOverrides={{
            container: cntl`col-span-2`,
          }}
        />
        <Tagger
          label="Training Experience"
          styleOverrides={{
            container: cntl`col-span-2`,
          }}
        />
        <Tagger
          label="Relevant Industries Experience"
          styleOverrides={{
            container: cntl`col-span-2`,
          }}
        />
        <TextArea
          label="Reasons to become an Instructor"
          styleOverrides={{
            container: cntl`col-span-2`,
          }}
        />
      </fieldset>
      <fieldset className="contents" name="document"></fieldset>
    </section>
  )
}
