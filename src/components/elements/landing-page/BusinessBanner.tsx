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
          h-[28rem] lg:h-[36rem] rounded-lg

          bg-gradient-to-br from-orange-100 to-orange-300

          transition-all

          after:content-['']
          after:absolute after:inset-0 after:w-full after:h-full

          after:z-[1]

          after:bg-[url('/media/business-banner.png')]
          after:bg-cover after:bg-no-repeat 
          after:transition-all
          after:bg-[right_-18rem_bottom_0] sm:after:bg-[right_-12rem_bottom_-4rem]
        `}
      >
        <div
          className={`
          w-full sm:w-64 
          flex flex-col justify-center 
          h-full 
          px-10 sm:px-0
          sm:pl-12 
          gap-10
          z-[3]
        `}
        >
          <h1 className="font-bold text-5xl sm:text-6xl text-white drop-shadow-md sm:text-red-600 leading-tight font-display">
            <span>Mavens</span> <span className="font-light text-3xl">for</span>
            <br />
            <span className="font-black">Business</span>
          </h1>
          <Button
            href="/business/"
            className="z-[3] text-red-500 hover:border-red-600 hover:shadow-red-600/30 hover:text-red-500 hover:bg-white shadow-md"
          >
            Register Business
          </Button>
        </div>
        {/* <div className="overlay absolute inset-0 w-full h-full bg-black z-0"></div> */}
      </div>
    </Section.Container>
  )
}
