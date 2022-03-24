import { AspectRatio } from '@radix-ui/react-aspect-ratio'

type Props = HTMLAttr<'div'> & {}
export default function Notice(props: Props) {
  return (
    <div id="notice" className="flex flex-row gap-20 items-center max-w-3xl">
      <div id="notice-illustration" className="flex-shrink-0">
        <img src="/media/sparks/sad.png" className="w-auto h-72"></img>
      </div>
      <div id="notice-content">
        <h1 className="font-heading text-6xl font-bold leading-none">Sorry!</h1>
        <h2 className="text-4xl font-bold text-red-600 leading-none mt-3">
          There is no article yet.
        </h2>
        <h3 className="text-lg text-black/80 mt-1">
          Maybe try another category?
        </h3>
      </div>
    </div>
  )
}
