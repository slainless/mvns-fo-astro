import Section from '@Blocks/Section'
import List from './List'

export default function Sitemap() {
  return (
    <Section.Container>
      <Section.Title className="text-3xl md:text-4xl lg:text-5xl">
        Sitemap
      </Section.Title>
      <Section.Content className="flex flex-col gap-12 lg:mt-12">
        <List
          title="Pages"
          items={[
            ['Home', '/'],
            ['Contact Us', '/contact-us'],
            ['Help Center', '/help'],
            ['Privacy & Policy', '/privacy'],
            ['Careers', '/career'],
            ['Terms', '/terms'],
            ['For Business', '/business'],
            ['All Classes', '/class/all'],
            ['Become Instructor', '/instructor'],
            ['Blog', '/blog/all'],
          ]}
        />
        <List
          title="Class Categories"
          items={[
            ['Design', '/class/all'],
            ['Personal Development', '/class/all'],
            ['IT & Software', '/class/all'],
            ['Business & Policy', '/class/all'],
            ['Marketing', '/class/all'],
            ['Photography & Video', '/class/all'],
            ['Teaching & Academics', '/class/all'],
            ['Health & Fitness', '/help'],
            ['Finance & Accounting', '/privacy'],
          ]}
        />
        <List title="Blog" items={[['Blog', '/blog/all']]} />
      </Section.Content>
    </Section.Container>
  )
}
