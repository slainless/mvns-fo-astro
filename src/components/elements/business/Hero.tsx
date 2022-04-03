import { Common as Button } from '@Bits/Button'
import cntl from 'cntl'

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
          order-1
          lg:order-2
          max-h-[theme(spacing.72)]
          lg:max-h-[initial]
          object-cover
          object-top
        `}
        src="/media/instructor-hero.jpg"
      />
      <div
        id="hero-callout"
        className={cntl`
          items-center flex flex-col text-center 
          w-full lg:w-5/12
          order-2
          lg:order-1
        `}
      >
        <div className="flex flex-col items-center gap-0">
          <h1
            id="hero-title"
            className={cntl`
              
              font-display
              font-black
              uppercase
            `}
          >
            <span className="text-5xl sm:text-6xl">
              Built <span className="text-red-600">Talents</span>
            </span>
            <br />
            <span className="text-6xl sm:text-7xl">
              that{' '}
              <span className="relative after:absolute after:-bottom-1 after:w-full after:h-2 after:bg-red-600 after:left-0">
                Last
              </span>
            </span>
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
            className="font-body mt-8 w-72 opacity-80 leading-tight"
          >
            Designed for the future of work where workforces can grow and
            thrive.
          </h2>
        </div>
        <nav className="font-body mt-4 gap-3 flex flex-col text-sm">
          <Button
            as="a"
            href="/business/register"
            className="font-bold bg-red-600 border-red-600 text-white hover:text-red-600 hover:shadow-red-600/30"
          >
            Register Now
          </Button>
        </nav>
      </div>
    </section>
  )
}
