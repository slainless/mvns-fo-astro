import Section from '../blocks/Section'

const BACKGROUND_URL = `image/business-banner.png`

export default function BusinessBanner() {
  return (
    <Section.Container id="business-banner">
      <div
        style={`background-image: url('${BACKGROUND_URL}')`}
        class="bg-cover bg-no-repeat h-[36rem] bg-[right_-12rem_top_-4rem] bg-[#FDDC9E]"
      >
        <div class="w-64 flex flex-col justify-center h-full pl-12 gap-2">
          <h1 class="font-bold text-6xl text-red-600 leading-tight">
            Mavens for Business
          </h1>
          <button class="bg-white text-red-600 text-xs tracking-wider py-3 w-64 rounded-md shadow-md drop-shadow-md uppercase">
            Register Business
          </button>
        </div>
      </div>
    </Section.Container>
  )
}
