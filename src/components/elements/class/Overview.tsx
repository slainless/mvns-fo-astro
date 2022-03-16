import cntl from 'cntl'
import { Root as Separator } from '@radix-ui/react-separator'
import { Link } from '@Bits/Button'

type ActionProps = {
  icon: string
  text: string
  outlined?: boolean
}
function Action(props: ActionProps) {
  const { icon, text, outlined } = props
  return (
    <a className="overview-action flex flex-col gap-2">
      <span className="action-icon text-xl">
        <span
          className={
            outlined == null || outlined
              ? 'material-icons-outlined'
              : 'material-icons'
          }
        >
          {icon}
        </span>
      </span>
      <span className="action-desc uppercase tracking-widest text-xs font-light">
        {text}
      </span>
    </a>
  )
}

const SectionStyle = cntl`
  w-full flex items-stretch 
  lg:flex-row flex-col
  gap-10
`

const ThumbnailStyle = cntl`
  w-full lg:w-7/12 
  rounded-none lg:rounded-r-2xl 
  pointer-events-none
  bg-[url('/media/class-thumb.png')]
  bg-cover
  order-1
`

const DetailStyle = cntl`
  items-center flex flex-col text-center 
  w-full lg:w-5/12
  order-2
`

const TitleStyle = cntl`
  font-bold text-5xl
`

export default function Overview() {
  return (
    <section id="overview" className={SectionStyle}>
      <div id="overview-thumbnail" className={ThumbnailStyle} />
      <div id="overview-detail" className={DetailStyle}>
        <div className="flex flex-col items-center gap-3 max-w-sm">
          <div className="max-w-sm flex flex-col gap-3 items-center">
            <h1 id="overview-title" className={TitleStyle}>
              Introduction to Design Thinking
            </h1>
            <Separator className="w-4 h-1 bg-white" />
            <h2 id="overview-author" className="text-2xl">
              Uwais Zainal
            </h2>
          </div>
          <p id="overview-description">
            Design thinking is a non-linear, iterative process that teams use to
            understand users, challenge assumptions, redefine problems and
            create innovative solutions to prototype and test.
          </p>
          <div id="overview-actions" className="flex flex-row gap-10 my-8">
            <Action icon="play_arrow" outlined={false} text="Trailer" />
            <Action icon="content_copy" text="Sample" />
            <Action icon="share" text="Share" />
          </div>
          <div
            id="overview-pricing"
            className="rounded-md border-[1px] border-white/10 py-5 px-10 flex flex-row gap-5 items-center"
          >
            <div id="overview-price">
              Prices: <span className="text-red-500 font-bold">$35.00</span>
            </div>
            <Link id="overview-cart" className="mt-0 text-white bg-red-600">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
