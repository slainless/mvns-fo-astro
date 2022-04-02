import { Common as Button } from '@Bits/Button'
import Section from '@Blocks/Section'
import cntl from 'cntl'

const OverlayBgStyle = cntl`
  before:content-['']

  before:z-[2]

  before:opacity-0 hover:before:opacity-100 

  before:bg-gradient-to-br
  before:absolute before:inset-0 before:w-full before:h-full
  before:transition-all
  hover:before:from-transparent hover:before:to-red-400
`

export default function BusinessBanner() {
  return (
    <Section.Container id="business-banner">
      <div
        className={`
          relative group
          h-[24rem] sm:h-[28rem] lg:h-[36rem] rounded-lg overflow-hidden

          bg-gradient-to-br from-orange-100 to-orange-300
        `}
      >
        <div className="contents">
          <div
            style={{
              backgroundImage: `url('/media/business-banner.png')`,
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-[right_-14rem_bottom_0] sm:bg-[right_-12rem_bottom_-4rem]"
          />
          <div className="block md:hidden absolute inset-0 w-full h-full bg-gradient-to-b from-red-600/80 to-black/80" />
        </div>
        <div
          className={`
          max-w-[18rem] w-full
          flex flex-col justify-center 
          h-full 
          px-10 sm:px-0
          sm:pl-12 
          gap-10
          z-[1]
        `}
        >
          <h1 className="font-bold text-5xl sm:text-6xl drop-shadow-md text-white md:text-red-600 leading-tight font-display">
            <span>Mavens</span> <span className="font-light text-3xl">for</span>
            <br />
            <span className="font-black">Business</span>
          </h1>
          <Button
            as="a"
            href="/business/"
            className="z-[1] text-red-500 hover:border-red-600 hover:shadow-red-600/30 hover:text-red-500 hover:bg-white shadow-md font-bold"
          >
            Register Business
          </Button>
        </div>
        {/* <div className="overlay absolute inset-0 w-full h-full bg-black z-0"></div> */}
      </div>
    </Section.Container>
  )
}
