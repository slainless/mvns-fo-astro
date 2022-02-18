import Section from '../blocks/Section'

export default function Featured() {
  return (
    <Section.Container id="featured-class">
      <Section.Title class="mx-10">
        New Classes added every month.
      </Section.Title>
      <div id="featured-container" class="mt-12 relative">
        <img id="featured-image" src="/image/featured-image.png"></img>
        <div class="absolute right-0 top-0 h-full w-96 flex flex-col items-center justify-center text-center">
          <span class="badge dark:bg-white dark:text-black text-xs py-1 px-3 rounded-full font-regular">
            New
          </span>
          <h3 id="featured-title" class="font-heading text-3xl uppercase mt-4">
            Developing Entrepreneurial Mindset
          </h3>
          <hr class="w-4 mx-auto border-2 my-3 mt-7 border-white" />
          <h4 id="featured-subtitle" class="leading-none">
            Chai Li
          </h4>
          <a class="mt-4 button flex items-center dark:bg-white dark:text-black font-medium tracking-widest text-xs py-3 px-5 rounded-lg uppercase">
            <span class="material-icons mr-2 !text-xl">play_arrow</span> Watch
            Trailer
          </a>
        </div>
      </div>
    </Section.Container>
  )
}
