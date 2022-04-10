import { Common as Button } from '@Bits/Button'

export default function Banner() {
  return (
    <aside
      id="banner"
      className="grid grid-cols-1 md:grid-cols-[max-content_auto] items-stretch rounded-lg overflow-hidden relative w-full"
    >
      <div
        id="banner-header"
        className="flex flex-col gap-5 bg-black/30 text-white drop-shadow-md md:text-black w-full md:w-max md:bg-neutral-100 p-10 z-[1]"
      >
        <div id="banner-title" className="font-heading font-bold text-3xl">
          Let's Learn with
          <br />
          our Instructor
        </div>
        <Button
          as="a"
          className="bg-red-600 border-red-600 text-white shadow-md hover:bg-red-600 hover:shadow-red-600/30 w-max"
        >
          Register
        </Button>
      </div>
      <div
        id="banner-bg"
        className="flex-grow bg-cover bg-right absolute md:relative inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/media/stocks/mimi-thian-196FBkoiApU-unsplash.jpg')`,
        }}
      ></div>
    </aside>
  )
}
