export default function Hero() {
  return (
    <section id="hero" class="w-full flex items-center">
      <img
        id="hero-image"
        class="w-7/12 rounded-r-2xl"
        src="/image/hero-image.jpg"
      ></img>
      <div
        id="hero-callout"
        class="items-center flex flex-col text-center w-5/12"
      >
        <div class="font-heading flex flex-col items-center">
          <h1
            id="hero-title"
            class="text-6xl flex flex-col font-regular gap-1 uppercase"
          >
            <span>They Changed</span>
            <span>the World.</span>
            <span class="text-red-500 text-5xl">Now You.</span>
          </h1>
          <h2 id="hero-subtitle" class="font-body mt-3 w-72">
            Learn from the most inspiring artists, leaders, and icons in the
            world.
          </h2>
        </div>
        <nav class="font-body mt-4 gap-3 flex flex-col text-sm">
          <a
            id="register-link"
            class="dark:bg-white bg-zinc-800 text-red-500 font-poppins uppercase tracking-widest py-2 rounded-md inline-block font-medium"
          >
            Register Now
          </a>
          <div class="flex gap-3">
            <text>Not sure what to learn?</text>
            <a
              id="all-class-link"
              class="tracking-wider text-red-500 underline underline-offset-2"
            >
              View All Classes
            </a>
          </div>
        </nav>
      </div>
    </section>
  )
}
