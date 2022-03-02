import { getUser, Role } from '@Api/user'
import isBrowser from '@Functions/isBrowser'
import { useMemo } from 'preact/hooks'

const CATEGORIES: [display: string, href?: string][] = [
  ['Food'],
  ['Design & Style'],
  ['Arts & Entertainment'],
  ['Music'],
  ['Business'],
  ['Sports & Gaming'],
  ['Writing'],
  ['Science & Tech'],
  ['Home & Lifestyle'],
  ['Community & Government'],
  ['Wellness'],
]

function Navigation({ hidden = false }) {
  return (
    <section
      id="all-categories"
      class={`relative ${hidden ? 'hidden' : ''}`}
      hidden={hidden}
    >
      <div class="overflow-hidden w-full">
        <video
          class="pointer-events-none h-[1080px]"
          height="1080px"
          id="category-nav-video"
          autoPlay
          loop
          muted
          preload="auto"
          data-setup={JSON.stringify({})}
        >
          <source src="/media/rendition.m3u8" type="application/x-mpegURL" />
        </video>
      </div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="sticky top-0 pt-28 pb-16 container px-12 grid grid-cols-2 gap-10">
          <h2 class="font-heading-alt text-5xl font-bold drop-shadow-md">
            Choose a category to watch a class highlight.
          </h2>
          <nav class="flex flex-col text-3xl font-heading-alt gap-2 pl-10 font-bold">
            {CATEGORIES.map((cat) => (
              <a
                class="hover:before:content-['\__'] hover:before:text-red-500 drop-shadow-md"
                children={cat[0]}
              />
            ))}
          </nav>
        </div>
      </div>
      <script>
        const videoPlayer = videojs('category-nav-video');
        videoPlayer.disablePictureInPicture(true)
      </script>
    </section>
  )
}

export default function CategoryNav() {
  if (!isBrowser) return <Navigation />

  const user = useMemo(() => getUser(), [])
  console.log('cat nav user', user)
  if (user == null || user.role.is(Role.NONE)) return <Navigation />
  else return <Navigation hidden />
}
