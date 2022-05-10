import Dialog from '@Blocks/Dialog'
import { ReactElement, useEffect, useState } from 'react'
import { Root as Label } from '@radix-ui/react-label'
import { Input } from '@Blocks/Form'
import { Common as Button, Link } from '@Bits/Button'
import { Common as Icon } from '@Bits/Icon'
import { Root as Separator } from '@radix-ui/react-separator'
import { ColoredGoogle, Google, LinkedIn } from '@Bits/Brand'
import cntl from 'cntl'
import UserAPI, { useUserStore } from '@Api/user'
import { useRequest } from 'ahooks'
import { useForm } from 'react-hook-form'
import APIResponse from '@Class/response'
import { UserResponse } from '@Class/user'
import toast from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'
import { isEmpty } from 'lodash-es'
import openLoginWindow from '@Functions/login-window'

const FieldsetStyle = cntl`
  flex flex-col gap-2
`

type Feedback = {
  message: string
  type: 'error' | 'warning' | 'ok'
}
const feedbackIcon: Record<Feedback['type'], string> = {
  ok: 'check_circle',
  warning: 'warning',
  error: 'error',
}

type RegisterProps = Omit<
  Parameters<typeof Dialog>[0],
  'trigger' | 'children'
> & {
  children: ReactElement
}
export default function Register(props: RegisterProps) {
  const { children, ...rest } = props

  const [open, setOpen] = useState(false)

  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const {
    data: result,
    loading,
    error,
    run,
  } = useRequest(UserAPI.register, {
    manual: true,
  })

  const {
    register: reg,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    console.log(errors)
    setFeedback(null)
    run(data)
  }
  const [user, setUser] = useUserStore(
    (state) => [state.user, state.setUser] as const
  )

  useEffect(() => {
    const { data } = result ?? {}
    if (data == null) {
      setFeedback(null)
      return
    }
    if (data instanceof APIResponse.InternalError) {
      // NOTE: backend need to document this
      if (data.message.indexOf('users.users_email_unique') != -1)
        setFeedback({
          type: 'error',
          message: 'Email already registered',
        })
      else
        setFeedback({
          type: 'error',
          message: 'Internal server error',
        })
      return
    }

    if (data instanceof UserResponse.Register) {
      // setFeedback({
      //   type: 'ok',
      //   message: 'Register success!',
      // })
      setFeedback(null)
      // setTimeout(() => {
      //   setOpen(false)
      // }, 500)
      setOpen(false)
      toast.success(`User registered.`)
      reset()
      // location.reload()
      return
    }
  }, [result])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setFeedback({
        type: 'warning',
        message: 'All fields are required!',
      })
    }
  }, [errors])

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      onOpenAutoFocus={(e) => {
        e.preventDefault()
      }}
      trigger={children}
      hideTitle={true}
      {...rest}
      className="flex flex-col gap-5 px-0 xs:px-3 max-w-xs"
      styleOverrides={{
        card: cntl`w-screen xs:w-max shadow-none xs:shadow-md xs:drop-shadow-md drop-shadow-none xs:w-initial min-h-full place-items-center`,
        overlay: cntl`bg-white overflow-x-hidden xs:bg-black/80`,
      }}
    >
      <h4 className="font-heading text-2xl font-medium">
        Create your free account
      </h4>
      <span className="text-sm text-neutral-400">
        See how the world’s best user experiences are created
      </span>
      <form className="contents" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 items-stretch">
          <fieldset className="contents xs:grid grid-cols-2 gap-2">
            <div className={FieldsetStyle}>
              <Label
                htmlFor="login-first-name"
                className="font-heading text-sm opacity-80 w-max"
              >
                First Name
              </Label>
              <Input
                id="login-first-name"
                placeholder="e.g. John"
                mods={['focus-ring', 'darker-border', 'invalid-red-border']}
                className="py-2 ring-offset-2 ring-offset-white"
                aria-invalid={errors.firstname != null}
                {...reg('firstname', { required: true })}
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
                id="login-last-name"
                placeholder="e.g. Doe"
                mods={['focus-ring', 'darker-border', 'invalid-red-border']}
                className="py-2 ring-offset-2 ring-offset-white"
                aria-invalid={errors.lastname != null}
                {...reg('lastname', { required: true })}
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
              id="login-username"
              placeholder="example@gmail.com"
              mods={['focus-ring', 'darker-border', 'invalid-red-border']}
              className="py-2 ring-offset-2 ring-offset-white"
              aria-invalid={errors.email != null}
              {...reg('email', { required: true })}
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
              id="login-password"
              placeholder="Enter password"
              type="password"
              mods={['focus-ring', 'darker-border', 'invalid-red-border']}
              className="py-2 ring-offset-2 ring-offset-white"
              aria-invalid={errors.password != null}
              {...reg('password', { required: true })}
            />
          </fieldset>
          <div
            id="login-feedback"
            className={twMerge(
              'inline-flex text-center gap-1 items-center text-sm self-center',
              feedback?.type == 'error' ? 'text-red-700' : '',
              feedback?.type == 'warning' ? 'text-yellow-700' : '',
              feedback?.type == 'ok' ? 'text-green-700' : '',
              feedback == null || isEmpty(feedback?.message) ? 'hidden' : ''
            )}
          >
            <Icon
              icon={feedbackIcon[feedback?.type ?? 'error']}
              iconClass="!text-lg"
            >
              {feedback?.message}
            </Icon>
          </div>
        </div>
        <Button
          mods={['fill-red', 'to-fill-red', 'disabled-dim']}
          className="z-[1] py-2.5 h-12"
          disabled={loading}
        >
          {loading ? (
            <div className="ball-pulse">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            'Create your account'
          )}
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
          as="a"
          className="
          z-[1] bg-transparent text-black border-gray-300
          hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-red-600/30 
          py-2 hover:translate-y-0 flex items-center gap-3 group
        "
          onClick={async () => {
            const req = await openLoginWindow(
              'https://mavens.upanastudio.com/backend/api/social/google'
            )!
            setUser(req)
            setOpen(false)
            toast.success(`Logged in via Google.`)
            reset()
          }}
        >
          <span className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all">
            <ColoredGoogle />
          </span>{' '}
          Sign Up with Google
        </Button>
        <Button
          as="a"
          className="
            z-[1] bg-blue-600 text-white border-blue-600 
            hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-red-600/30 
            py-2 hover:translate-y-0 flex items-center gap-3 group
          "
          onClick={async () => {
            const req = await openLoginWindow(
              'https://mavens.upanastudio.com/backend/api/social/linkedin'
            )!
            setUser(req)
            setOpen(false)
            toast.success(`Logged in via Google.`)
            reset()
          }}
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
