import Dialog from '@Blocks/Dialog'
import { ReactElement, useEffect, useState } from 'react'
import { Root as Label } from '@radix-ui/react-label'
import { Input } from '@Blocks/Form'
import { Common as Button, Link } from '@Bits/Button'
import { Root as Separator } from '@radix-ui/react-separator'
import cntl from 'cntl'
import { ColoredGoogle, Google, LinkedIn } from '@Bits/Brand'
import { useRequest } from 'ahooks'
import UserAPI, { useAuthUserStore } from '@Api/user'
import { useForm } from 'react-hook-form'
import { Common as Icon } from '@Bits/Icon'
import { twMerge } from './../../functions/tailwind-merge'
import { isEmpty } from 'lodash-es'
import APIResponse from '@Class/response'
import { AuthUserResponse } from '@Class/user'
import toast from 'react-hot-toast'
import openLoginWindow from '@Functions/login-window'
import createDisclosureStore from '@Functions/use-disclosure'
import shallow from 'zustand/shallow'

export const useLoginControl = createDisclosureStore()

const FieldsetStyle = cntl`
  flex flex-col gap-2
`

type Feedback = {
  message?: string
  type: 'error' | 'warning' | 'ok'
}
const feedbackIcon: Record<Feedback['type'], string> = {
  ok: 'check_circle',
  warning: 'warning',
  error: 'error',
}

type LoginProps = Omit<Parameters<typeof Dialog>[0], 'trigger' | 'children'> & {
  children: ReactElement
}
export default function Login(props: LoginProps) {
  const { children, ...rest } = props

  const open = useLoginControl((state) => state.state)
  const setOpen = useLoginControl((state) => state.setOpen)
  // const [open, setOpen] = useState(false)

  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const {
    data: result,
    loading,
    error,
    run,
  } = useRequest(UserAPI.login, {
    manual: true,
  })
  const [user, setUser] = useAuthUserStore(
    (state) => [state.user, state.setUser] as const,
    shallow
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    setFeedback(null)
    run(data)
  }

  useEffect(() => {
    const { data } = result ?? {}
    if (data == null) {
      setFeedback(null)
      return
    }
    if (data instanceof APIResponse.Unauthorized) {
      setFeedback({
        type: 'error',
        message: 'Invalid username or password',
      })
      return
    }
    if (data instanceof AuthUserResponse.Login) {
      if (data.success == false) {
        if (data.data == null) {
          setFeedback({
            type: 'error',
            message: 'Invalid username or password',
          })
          return
        }

        throw new Error(data.message)
      }
      // setFeedback({
      //   type: 'ok',
      //   message: 'Login success!',
      // })
      setFeedback(null)
      setUser(data.data)
      // setTimeout(() => {
      //   setOpen(false)
      // }, 500)
      setOpen(false)
      toast.success(`Logged in.`)
      reset()
      // location.reload()
      return
    }
    if (data instanceof APIResponse.InternalError) {
      const { data } = result ?? {}
      setFeedback({
        type: 'error',
        message: 'Server Error: ' + data?.message ?? '',
      })
      return
    }
  }, [result])

  useEffect(() => {
    if (errors.email != null || errors.password != null) {
      setFeedback({
        type: 'warning',
        message: 'Email and password are required!',
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
      <h4 className="font-heading text-2xl font-medium">Log In</h4>
      <span className="text-sm text-neutral-400">
        Log in with your data that you entered during your registration
      </span>
      <form
        id="login-form"
        className="contents"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3 items-stretch">
          <fieldset className={FieldsetStyle}>
            <Label
              htmlFor="login-username"
              className="font-heading text-sm opacity-80 w-max"
            >
              Email Address
            </Label>
            <Input
              id="login-email"
              placeholder="example@gmail.com"
              mods={['focus-ring', 'darker-border', 'invalid-red-border']}
              className="py-2 ring-offset-2 ring-offset-white"
              aria-invalid={errors.email != null}
              // info={
              //   errors.email ? (
              //     <Icon icon="warning" className="mr-1">
              //       {errors.email.message}
              //     </Icon>
              //   ) : null
              // }
              styleOverrides={{ info: cntl`text-red-800` }}
              {...register('email', {
                required: 'Enter your email!',
              })}
            />
          </fieldset>
          <fieldset className={FieldsetStyle}>
            <div className="flex flex-row justify-between text-sm">
              <Label
                htmlFor="login-password"
                className="font-heading text-sm opacity-80 w-max"
              >
                Password
              </Label>
              <Link className="after:w-0 after:-bottom-0.5 tracking-normal">
                Forgot password?
              </Link>
            </div>
            <Input
              id="login-password"
              placeholder="Enter password"
              type="password"
              mods={['focus-ring', 'darker-border', 'invalid-red-border']}
              className="py-2 ring-offset-2 ring-offset-white"
              aria-invalid={errors.password != null}
              // info={
              //   errors.password ? (
              //     <Icon icon="warning" className="mr-1">
              //       {errors.password.message}
              //     </Icon>
              //   ) : null
              // }
              styleOverrides={{ info: cntl`text-red-800` }}
              {...register('password', {
                required: 'Enter your password!',
              })}
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
            'Log In'
          )}
        </Button>
        <span className="text-center text-sm -mt-4">
          Don't have an account?{' '}
          <Link className="tracking-normal after:w-0 after:-bottom-0.5">
            Sign up
          </Link>
        </span>
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
          href="javascript: void(0);"
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
          Log In with Google
        </Button>
        <Button
          as="a"
          className="
          z-[1] bg-blue-600 text-white border-blue-600 
          hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-red-600/30 
          py-2 hover:translate-y-0 flex items-center gap-3 group
        "
          href="javascript: void(0);"
          onClick={async () => {
            const req = await openLoginWindow(
              'https://mavens.upanastudio.com/backend/api/social/linkedin'
            )!
            setUser(req)
            setOpen(false)
            toast.success(`Logged in via LinkedIn.`)
            reset()
          }}
        >
          <span className="w-6 h-6 invert">
            <LinkedIn />
          </span>{' '}
          Log In with LinkedIn
        </Button>
      </div>
    </Dialog>
  )
}
