import { Link, Common as Button } from '@Bits/Button'
import Section from '@Blocks/Section'
import { Common as Checkbox } from '@Bits/Checkbox'
import { Label } from '@radix-ui/react-label'
import cntl from 'cntl'
import { TextArea, Input } from './Register/Form'

export default function Register() {
  return (
    <Section.Container>
      <Section.Title>Register for Business</Section.Title>
      <Section.Content className="lg:mt-12">
        <form className="flex flex-col xs:grid grid-cols-2 gap-x-2 sm:gap-x-5 lg:gap-x-10 gap-y-5 max-w-4xl">
          <Input
            label="Company Name"
            name="company-name"
            leadingIcon="business"
          />
          <Input
            label="Company Email"
            name="company-email"
            leadingIcon="email"
          />
          <TextArea
            styleOverrides={{
              container: cntl`col-span-2`,
            }}
            label="Company Address"
            name="company-address"
          />
          <Input
            label="Company Phone"
            name="company-phone"
            leadingIcon="contact_phone"
          />
          <Input
            label="Company Website"
            name="company-webstie"
            leadingIcon="public"
          />
          <div className="col-span-2 flex flex-col gap-5">
            <div className="agreement flex flex-row gap-5">
              <Checkbox
                name="agree"
                id="agree"
                className="border-white/30 hover:border-red-600 transition-colors ring-offset-2 ring-offset-black"
                styleOverrides={{
                  indicator: cntl`bg-red-600 border-red-600 ring-offset-2 ring-offset-black`,
                }}
              />
              <Label htmlFor="agree">
                I agree to the{' '}
                <Link className="tracking-normal after:w-0">
                  Terms and Conditions
                </Link>
              </Label>
            </div>
            <Button
              type="submit"
              className="w-32 ring-offset-2 ring-offset-black"
              mods={['fill-red', 'to-outline-red', 'hover-darker-fill']}
            >
              Submit
            </Button>
          </div>
        </form>
      </Section.Content>
    </Section.Container>
  )
}
