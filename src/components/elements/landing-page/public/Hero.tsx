import cntl from 'cntl'
import { Common as Button, Link } from '@Bits/Button'
import { useUserStore } from '@Api/user'

export default function Hero() {
  const user = useUserStore((state) => state.user)
  if (user != null) return <></>
  return (
    <section
      id="hero"
      className={cntl`
        w-full flex items-center 
        lg:flex-row flex-col
        gap-10 lg:gap-0
        order-first
      `}
    >
      <img
        id="hero-image"
        className={cntl`
          w-full lg:w-7/12 
          rounded-none lg:rounded-r-2xl 
          pointer-events-none
          max-h-[theme(spacing.72)]
          lg:max-h-[initial]
          object-cover
          object-top
        `}
        src="/media/landing/hero.jpg"
      />
      <div
        id="hero-callout"
        className={cntl`
          items-center flex flex-col text-center 
          w-full lg:w-5/12
        `}
      >
        <div className="flex flex-col items-center gap-3">
          <h1
            id="hero-title"
            className={cntl`
              text-5xl sm:text-6xl lg:text-6xl 
              inline-flex flex-col font-display font-black
              gap-0 
              leading-[85%]
              uppercase
            `}
          >
            <span className="text-8xl sm:text-9xl lg:text-8xl">Get</span>
            <span
              className={cntl`
                text-red-600
              `}
            >
              Certified!
            </span>
          </h1>
          <h2 id="hero-subtitle" className="font-body mt-3 w-72 opacity-80">
            Learn from the most inspiring artists, leaders, and icons in the
            world.
          </h2>
        </div>
        <nav className="font-body mt-4 gap-3 flex flex-col text-sm w-full max-w-[40ch] sm:w-max px-5 items-center">
          <Button
            as="a"
            className="mt-4 px-10 w-max sm:w-full text-center text-red-500 hover:bg-red-600 hover:border-red-600 hover:shadow-red-600/50 hover:text-white font-bold"
          >
            Register Now
          </Button>
          {/* <a
            id="register-link"
            className={`
              bg-white text-red-600 font-poppins uppercase tracking-wide
              py-3 rounded-md inline-block font-medium text-xs
            `}
          >
            Register Now
          </a> */}
          <div className="inline-flex gap-x-3 gap-y-1 flex-col items-center sm:flex-row justify-center">
            <text>Not sure what to learn?</text>
            <Link href="/class/all" className="after:w-0 w-max">
              View All Classes
            </Link>
            {/* <a
              id="all-class-link"
              className="tracking-wider text-red-600 underline underline-offset-2"
            >
              View All Classes
            </a> */}
          </div>
        </nav>
      </div>
    </section>
  )
}
