import { Common as Button, Link } from '@Bits/Button'
import { Common as Checkbox } from '@Bits/Checkbox'
import { Label } from '@radix-ui/react-label'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import { Field, Input, TextArea } from './Form'

export default function Expertise() {
  return (
    <section className="flex flex-col md:grid grid-cols-2 gap-x-5 gap-y-5">
      <fieldset className="contents" name="expertise">
        <Input label="Areas of Expertise" />
        <Input label="Job Title" />
        <TextArea
          label="Purposed Class Overview"
          styleOverrides={{
            container: cntl`col-span-2`,
          }}
        />
      </fieldset>
      <div className="col-span-2 flex flex-col gap-5">
        <div className="agreement flex flex-row gap-5">
          <Checkbox
            name="agree"
            id="agree"
            className="border-white/30 hover:border-red-600 transition-colors"
            styleOverrides={{
              indicator: cntl`bg-red-600 border-red-600`,
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
          className="w-32"
          mods={['fill-red', 'to-outline-red', 'hover-darker-fill']}
        >
          Submit
        </Button>
      </div>
    </section>
  )
}
