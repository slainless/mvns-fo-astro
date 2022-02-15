export default function Featured() {
  return (
    <section id="featured-class" class="px-24">
      <h2 class="section-title text-3xl ml-10">
        New Classes added every month.
      </h2>
      <div id="featured-container" class="mt-12 relative">
        <img id="featured-image" src="/image/featured-image.png"></img>
        <div class="absolute right-0 top-0 h-full w-96 flex flex-col items-center justify-center text-center">
          <span class="badge dark:bg-white dark:text-black text-xs py-0.5 px-4 rounded-full font-medium">
            New
          </span>
          <h3 id="featured-title" class="font-heading text-3xl uppercase mt-4">
            Developing Entrepreneurial Mindset
          </h3>
          <h4
            id="featured-subtitle"
            class="pt-3 mt-3 border-t-4 border-t-white leading-none"
          >
            CL
          </h4>
          <a class="mt-4 button flex items-center dark:bg-white dark:text-black font-medium tracking-widest !text-xs py-3 px-5 rounded-lg uppercase">
            <span class="material-icons mr-2">play_arrow</span> Watch Trailer
          </a>
        </div>
      </div>
    </section>
  )
}
