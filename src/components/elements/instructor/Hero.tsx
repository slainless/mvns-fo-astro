import cntl from 'cntl'
import { Common as Button } from '@Bits/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className={cntl`
        w-full flex items-center 
        lg:flex-row flex-col
        gap-10 lg:gap-0
      `}
    >
      <img
        id="hero-image"
        className={cntl`
          w-full lg:w-7/12 
          rounded-none lg:rounded-l-2xl 
          pointer-events-none
          order-2
        `}
        src="/media/instructor-hero.jpg"
      />
      <div
        id="hero-callout"
        className={cntl`
          items-center flex flex-col text-center 
          w-full lg:w-5/12
          order-1
        `}
      >
        <div className="flex flex-col items-center gap-0">
          <h1
            id="hero-title"
            className={cntl`
              text-[44px] lg:text-7xl 
              font-display
              font-black
              leading-[85%]
              uppercase
            `}
          >
            Share{' '}
            <span className="relative after:absolute after:-top-2 after:w-0 after:h-2 after:bg-red-600 after:left-0">
              your
            </span>{' '}
            <br />
            <span className="text-red-600">Passion</span>
            {/* <span>Advance Yourself</span> */}
            {/* <span
              className={cntl`
                text-red-600
                text-3xl
              `}
            >
              To be the best instructors.
            </span> */}
          </h1>
          <h2
            id="hero-subtitle"
            className="font-body mt-3 w-72 opacity-80 text-lg"
          >
            Make masters out of students.
          </h2>
        </div>
        <nav className="font-body mt-4 gap-3 flex flex-col text-sm">
          <Button
            as="a"
            href="/instructor/register"
            className="font-bold bg-red-600 border-red-600 text-white hover:text-red-600 hover:shadow-red-600/30"
          >
            Register Now
          </Button>
        </nav>
      </div>
    </section>
  )
}
