export default function Ads(props: {
  width: number
  height: number
  src: string
}) {
  const { width, height, src } = props
  return (
    <aside className="ads w-full flex items-center justify-center">
      <img
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        src={src}
      ></img>
    </aside>
  )
}
