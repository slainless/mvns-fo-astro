import Section from '@Blocks/Section'
import cntl from 'cntl'

type ContentProps = HTMLAttr<'div'> & {
  title: string
  desc?: string
}
function Content(props: ContentProps) {
  const { title, children, desc, ...rest } = props
  return (
    <div className="reason flex flex-col items-center gap-5" {...rest}>
      <div className="reason-title text-xl font-bold">{title}</div>
      <div className="reason-desc text-gray-400 text-center">
        {children ?? desc}
      </div>
    </div>
  )
}

export default function Reasons() {
  return (
    <Section.Container
      id="more-reason"
      className="flex flex-col w-full gap-12 items-center"
    >
      <Section.Title>More reasons to join Mavensdotlive</Section.Title>
      <Section.Content className="grid grid-cols-3 gap-20 items-stretch justify-center max-w-4xl">
        <Content title="Reach More">
          Within a short amount of time, we have established strategic
          relationships with recognized partners
        </Content>
        <Content title="Teach More">
          Through Mavensdotlive’s network, we connect the dots for instructors
          to collaborate with others and co-create demand-driven classes.
        </Content>
        <Content title="Earn More">
          Mavensdotlive accommodates all types of instructors - you are even
          able to create passive income.
        </Content>
      </Section.Content>
    </Section.Container>
  )
}
