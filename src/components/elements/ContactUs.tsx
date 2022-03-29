import { Link } from '@Bits/Button'
import Section from '@Blocks/Section'
import { classedElement } from '@Functions/jsx-factory'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

const H3 = classedElement('h3', cntl`text-lg font-heading font-bold text-white`)

export default function ContactUs() {
  return (
    <Section.Container>
      <Section.Title className="lg:text-4xl">Contact Us</Section.Title>
      <h2 className="text-xl">We're here to help!</h2>
      <Section.Content className="flex flex-col gap-12 mt-10">
        <div className="flex flex-col gap-2 text-white/70">
          <H3>Phone Support Hours</H3>
          <p>Monday - Friday, 6AM - 7PM</p>
          <p>Saturday & Sunday, 9AM - 6PM</p>
          <Link className="w-max tracking-normal">+673 831 9918</Link>
        </div>
        <div className="flex flex-col gap-2 text-white/70">
          <H3>Email Support Hours</H3>
          <p>24 hours/7 days</p>
        </div>
        <div className="flex flex-col gap-2 text-white/70">
          <H3>For Press Inquiries</H3>
          <p>
            Please email <Link className="after:w-0">hello@mavens.live</Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-white/70">
          <H3>To participate in our partnership program:</H3>
          <p>
            For any other partnership related inquiries please email{' '}
            <Link className="after:w-0">hello@mavens.live</Link>
          </p>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
