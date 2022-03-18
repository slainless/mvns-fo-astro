import Dialog from '@Blocks/Dialog'
import { ReactElement } from 'react'
import { Root as Label } from '@radix-ui/react-label'
import { Common as Input } from '@Bits/Input'
import { Common as Button, Link } from '@Bits/Button'
import { Root as Separator } from '@radix-ui/react-separator'
import cntl from 'cntl'
import { ColoredGoogle, Google, LinkedIn } from '@Bits/Brand'

const FieldsetStyle = cntl`
  flex flex-col gap-2
`

type RegisterProps = Omit<
  Parameters<typeof Dialog>[0],
  'trigger' | 'children'
> & {
  children: ReactElement
}
export default function Register(props: RegisterProps) {
  const { children, ...rest } = props

  return (
    <Dialog
      trigger={children}
      hideTitle={true}
      {...rest}
      className="flex flex-col gap-3 px-3 max-w-sm"
    >
      <h4 className="font-heading text-2xl font-medium">
        Create your free account
      </h4>
      <span className="text-sm">
        See how the world’s best user experiences are created
      </span>
      <form className="flex flex-col gap-2">
        <fieldset className={'grid grid-cols-2 gap-2'}>
          <div className={FieldsetStyle}>
            <Label
              htmlFor="login-first-name"
              className="font-heading text-sm opacity-80 w-max"
            >
              First Name
            </Label>
            <Input
              name="first-name"
              id="login-first-name"
              placeholder="e.g. John"
              className="py-2"
            />
          </div>
          <div className={FieldsetStyle}>
            <Label
              htmlFor="login-last-name"
              className="font-heading text-sm opacity-80 w-max"
            >
              Last Name
            </Label>
            <Input
              name="last-name"
              id="login-last-name"
              placeholder="e.g. Doe"
              className="py-2"
            />
          </div>
        </fieldset>
        <fieldset className={FieldsetStyle}>
          <Label
            htmlFor="login-username"
            className="font-heading text-sm opacity-80 w-max"
          >
            Email Address
          </Label>
          <Input
            name="username"
            id="login-username"
            placeholder="example@gmail.com"
            className="py-2"
          />
        </fieldset>
        <fieldset className={FieldsetStyle}>
          <Label
            htmlFor="login-password"
            className="font-heading text-sm opacity-80 w-max"
          >
            Password
          </Label>
          <Input
            name="username"
            id="login-password"
            placeholder="Enter password"
            type="password"
            className="py-2"
          />
        </fieldset>
        <Button
          className="
          z-[1] bg-red-600 text-white border-red-600 
          hover:bg-red-600 hover:text-white hover:shadow-red-600/30 
          py-2.5 mt-3
        "
        >
          Create your account
        </Button>
      </form>
      <Separator
        className="
        w-full h-[1px] bg-gray-300 relative my-2
        after:content-['OR'] 
        after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 
        after:bg-white after:text-sm
        after:px-3 after:font-heading"
      />
      <div id="alternative-login" className="flex flex-col gap-2 items-stretch">
        <Button
          className="
          z-[1] bg-transparent text-black border-gray-300
          hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-red-600/30 
          py-2 hover:translate-y-0 flex items-center gap-3 group
        "
        >
          <span className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all">
            <ColoredGoogle />
          </span>{' '}
          Sign Up with Google
        </Button>
        <Button
          className="
          z-[1] bg-blue-600 text-white border-blue-600 
          hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-red-600/30 
          py-2 hover:translate-y-0 flex items-center gap-3 group
        "
        >
          <span className="w-6 h-6 invert">
            <LinkedIn />
          </span>{' '}
          Sign Up with LinkedIn
        </Button>
        <span className="text-sm inline-flex items-stretch flex-col gap-1">
          <span className="text-black/80 text-xs">
            By signing up, you agree to our communications and usage terms.
          </span>
          <span className="text-sm text-center w-full">
            Already have an account?{' '}
            <Link className="tracking-normal after:w-0 after:-bottom-0.5">
              Sign up
            </Link>
          </span>
        </span>
      </div>
    </Dialog>
  )
}
