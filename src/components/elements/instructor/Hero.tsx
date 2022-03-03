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
        <div className="flex flex-col items-center gap-3">
          <h1
            id="hero-title"
            className={cntl`
              text-[44px] lg:text-5xl 
              inline-flex flex-col font-heading 
              gap-0 
              leading-[85%]
              uppercase
            `}
          >
            <span>Inspire, Engage &</span>
            <span>Advance Yourself</span>
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
            className="font-body mt-3 w-72 opacity-80 text-xl"
          >
            To be the best instructor.
          </h2>
        </div>
        <nav className="font-body mt-4 gap-3 flex flex-col text-sm">
          <a
            id="register-link"
            className={`
              bg-red-600 text-white font-poppins uppercase tracking-widest
              py-3 rounded-md inline-block font-medium text-xs px-10
            `}
          >
            Register Now
          </a>
          {/* <div className="inline-flex gap-3 flex-wrap justify-center">
            <text>Not sure what to learn?</text>
            <a
              id="all-class-link"
              className="tracking-wider text-red-600 underline underline-offset-2"
            >
              View All Classes
            </a>
          </div> */}
        </nav>
      </div>
    </section>
  )
}
