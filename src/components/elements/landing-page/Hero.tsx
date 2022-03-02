import cntl from 'cntl'

export default function Hero() {
  return (
    <section
      id="hero"
      class={cntl`
        w-full flex items-center 
        lg:flex-row flex-col
        gap-10 lg:gap-0
      `}
    >
      <img
        id="hero-image"
        class={cntl`
          w-full lg:w-7/12 
          rounded-none lg:rounded-r-2xl 
          pointer-events-none
        `}
        src="/media/hero-image.jpg"
      />
      <div
        id="hero-callout"
        class={cntl`
          items-center flex flex-col text-center 
          w-full lg:w-5/12
        `}
      >
        <div class="flex flex-col items-center gap-3">
          <h1
            id="hero-title"
            class={cntl`
              text-[44px] lg:text-6xl 
              inline-flex flex-col font-heading 
              gap-0 
              leading-[85%]
              uppercase
            `}
          >
            <span>They Changed</span>
            <span>the World.</span>
            <span
              class={cntl`
                text-red-600
              `}
            >
              Now You.
            </span>
          </h1>
          <h2 id="hero-subtitle" class="font-body mt-3 w-72 opacity-80">
            Learn from the most inspiring artists, leaders, and icons in the
            world.
          </h2>
        </div>
        <nav class="font-body mt-4 gap-3 flex flex-col text-sm">
          <a
            id="register-link"
            class={`
              bg-white text-red-600 font-poppins uppercase tracking-wide
              py-3 rounded-md inline-block font-medium text-xs
            `}
          >
            Register Now
          </a>
          <div class="inline-flex gap-3 flex-wrap justify-center">
            <text>Not sure what to learn?</text>
            <a
              id="all-class-link"
              class="tracking-wider text-red-600 underline underline-offset-2"
            >
              View All Classes
            </a>
          </div>
        </nav>
      </div>
    </section>
  )
}
