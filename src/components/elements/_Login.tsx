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

type LoginProps = Omit<Parameters<typeof Dialog>[0], 'trigger' | 'children'> & {
  children: ReactElement
}
export default function Login(props: LoginProps) {
  const { children, ...rest } = props

  return (
    <Dialog
      trigger={children}
      hideTitle={true}
      {...rest}
      className="flex flex-col gap-5 px-3 max-w-sm"
    >
      <h4 className="font-heading text-3xl font-medium">Hello! Welcome back</h4>
      <span>
        Log in with your data that you entered during your registration
      </span>
      <form className="flex flex-col gap-3">
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
          />
        </fieldset>
        <fieldset className={FieldsetStyle}>
          <div className="flex flex-row justify-between text-sm">
            <Label
              htmlFor="login-password"
              className="font-heading opacity-80 w-max"
            >
              Password
            </Label>
            <Link className="after:w-0 after:-bottom-0.5 tracking-normal">
              Forgot password?
            </Link>
          </div>
          <Input
            name="username"
            id="login-password"
            placeholder="Enter password"
            type="password"
          />
        </fieldset>
        <Button
          className="
          z-[1] bg-red-600 text-white border-red-600 
          hover:bg-red-600 hover:text-white hover:shadow-red-600/30 
          py-4 mt-3
        "
        >
          Start now!
        </Button>
      </form>
      <Separator
        className="
        w-full h-[1px] bg-gray-300 relative my-1
        after:content-['OR'] 
        after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 
        after:bg-white 
        after:px-3 after:font-heading"
      />
      <div id="alternative-login" className="flex flex-col gap-2 items-stretch">
        <Button
          className="
          z-[1] bg-transparent text-black border-gray-300
          hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-red-600/30 
          py-3 hover:translate-y-0 flex items-center gap-3 group
        "
        >
          <span className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all">
            <ColoredGoogle />
          </span>{' '}
          Sign In with Google
        </Button>
        <Button
          className="
          z-[1] bg-blue-600 text-white border-blue-600 
          hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-red-600/30 
          py-3 hover:translate-y-0 flex items-center gap-3 group
        "
        >
          <span className="w-7 h-7 invert">
            <LinkedIn />
          </span>{' '}
          Sign In with LinkedIn
        </Button>
        <span className="text-center text-sm font-heading">
          Don't have an account?{' '}
          <Link className="tracking-normal after:w-0">Sign up</Link>
        </span>
      </div>
    </Dialog>
  )
}
