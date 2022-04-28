import { AspectRatio } from '@radix-ui/react-aspect-ratio'

type Props = {
  title?: string
}
export default function Recommendation(props: Props) {
  const { title } = props ?? {}
  return (
    <div
      id="blog-recommendation"
      className="flex flex-col gap-5 lg:w-72 xl:w-80"
    >
      <div className="font-bold text-xl font-heading border-b-2 pb-2">
        {title ?? 'Related Articles'}
      </div>
      <div className="flex sm:grid lg:flex flex-col grid-cols-2 gap-x-5 md:gap-x-10">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div className="recommendation-item flex flex-row gap-5 justify-between py-3 border-b-2 last-of-type:border-b-0 sm:last-of-type:border-b-2">
              <div className="recommendation-title font-bold font-heading text-black/70">
                Everything You Need to Know
              </div>
              <div className="recommendation-image w-32 xs:w-28">
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
  )
}
