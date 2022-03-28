import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import { Field, Input, TextArea } from './Form'

export default function Personal() {
  return (
    <section className="grid grid-cols-2 gap-x-10 gap-y-5">
      <fieldset className="contents" name="identification">
        <Input label="First Name" leadingIcon="person" />
        <Input label="Last Name" />
        <Input label="Username" leadingIcon="account_circle" />
        <Input label="Email Address" leadingIcon="email" />
      </fieldset>

      <fieldset className="contents" name="location">
        <TextArea
          label="Address"
          styleOverrides={{
            container: cntl`col-span-2`,
          }}
        />
        <Input label="City" leadingIcon="location_city" />
        <Input label="Country" leadingIcon="flag" />
      </fieldset>

      <fieldset className="contents" name="contact">
        <Input label="Phone Number" leadingIcon="contact_phone" />
        <Input label="Website" leadingIcon="public" />
      </fieldset>

      <fieldset className="contents" name="document">
        <Input
          label="Profile Photo"
          placeholder="Upload your photo here"
          leadingIcon="portrait"
          type="file"
          info="Max. 5KB"
        />
        <Input
          label="Resume"
          placeholder="Upload your CV here"
          leadingIcon="upload_file"
          type="file"
          info="Max. 5KB"
        />
      </fieldset>
    </section>
  )
}
