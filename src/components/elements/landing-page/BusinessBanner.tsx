import Section from '@Blocks/Section'
const BACKGROUND_URL = `/media/business-banner.png`

export default function BusinessBanner() {
  return (
    <Section.Container id="business-banner">
      <div
        style={`background-image: url('${BACKGROUND_URL}')`}
        class={`
          bg-cover bg-no-repeat 
          h-[28rem] lg:h-[36rem] 
          bg-[right_-18rem_bottom_0] sm:bg-[right_-12rem_bottom_-4rem] 
          bg-[#FDDC9E]
        `}
      >
        <div
          class={`
          w-full sm:w-64 
          flex flex-col justify-center 
          h-full 
          px-10 sm:px-0
          sm:pl-12 
          gap-10
        `}
        >
          <h1 class="font-bold text-5xl sm:text-6xl text-white drop-shadow-md sm:text-red-600 leading-tight">
            Mavens for Business
          </h1>
          <button
            class={`
              bg-white text-red-600 text-xs tracking-wider py-3 
              rounded-md shadow-md drop-shadow-md uppercase
              max-w-[16rem]
            `}
          >
            Register Business
          </button>
        </div>
      </div>
    </Section.Container>
  )
}
