import Ads from '@Blocks/Ads'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-16">
      <Ads
        width={300}
        height={600}
        src="/media/sidebar-ad-placeholder.png"
        id="sidebar-ads"
        className="items-start h-max w-max flex-shrink-0"
      />
      <div id="blog-recommendation" className="flex flex-col gap-5">
        <div className="font-bold text-xl font-heading border-b-2 pb-2">
          Top Blog
        </div>
        <div className="flex flex-col">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div className="recommendation-item flex flex-row gap-5 py-3 border-b-2 last-of-type:border-b-0">
                <div className="recommendation-title font-bold font-heading text-black/70">
                  Everything You Need to Know
                </div>
                <div className="recommendation-image w-32">
                  <AspectRatio ratio={4 / 3}>
                    <div
                      className="w-full h-full bg-cover"
                      style={{
                        backgroundImage: `url('/media/blog-thumb.jpg')`,
                      }}
                    ></div>
                  </AspectRatio>
                </div>
              </div>
            ))}
        </div>
      </div>
    </aside>
  )
}
