import { Common as Button } from '@Bits/Button'

export default function Banner() {
  return (
    <aside
      id="banner"
      className="flex flex-row items-stretch rounded-lg overflow-hidden"
    >
      <div id="banner-header" className="flex flex-col gap-5 bg-gray-100 p-10">
        <div id="banner-title" className="font-heading font-bold text-3xl">
          Let's Learn with
          <br />
          our Instructor
        </div>
        <Button
          as="a"
          className="bg-red-600 border-red-600 text-white hover:bg-red-600 hover:shadow-red-600/30 w-max"
        >
          Register
        </Button>
      </div>
      <div
        id="banner-bg"
        className="flex-grow bg-cover bg-right"
        style={{
          backgroundImage: `url('/media/stocks/mimi-thian-196FBkoiApU-unsplash.jpg')`,
        }}
      ></div>
    </aside>
  )
}
