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
        h-96
        relative
      `}
    >
      <img
        id="hero-image"
        className={cntl`
          absolute top-0
          w-full
          pointer-events-none
          order-1
          lg:order-2
          max-h-[28rem]
          object-cover
          object-top
          z-0
        `}
        src="/media/career-banner.jpg"
      />
      <div
        id="hero-callout"
        className={cntl`
          items-center flex flex-col text-center 
          w-full lg:w-5/12
          order-2
          lg:order-1
          z-[1]
        `}
      >
        <div className="flex flex-col items-center gap-0">
          <h1
            id="hero-title"
            className={cntl`
              text-5xl sm:text-7xl 
              font-display
              font-black
              uppercase
            `}
          >
            Careers
          </h1>
          <h2
            id="hero-subtitle"
            className="font-body mt-3 w-72 opacity-80 sm:text-lg"
          >
            If you want to help make an impact on our members' lives – we want
            to hear from you!
          </h2>
        </div>
        {/* <nav className="font-body mt-4 gap-3 flex flex-col text-sm">
          <Button
            as="a"
            href="/instructor/register"
            className="font-bold px-10 bg-red-600 border-red-600 text-white hover:text-red-600 hover:shadow-red-600/30"
          >
            Register Now
          </Button>
        </nav> */}
      </div>
    </section>
  )
}
