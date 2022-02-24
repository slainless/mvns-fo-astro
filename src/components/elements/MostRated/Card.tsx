import { Card } from '@Blocks/Card'
import cntl from 'cntl'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string
  title?: string
  subtitle?: string
  type?: string
  badgeText?: string

  fav?: boolean
  onFav?: () => void
}
const VideoOnDemandCard: FunctionComponent<CardProps> = (props) => {
  const {
    imgSrc,
    title,
    subtitle,
    type,
    badgeText,
    fav,
    onFav,
    class: cls,
    ...rest
  } = props

  return (
    <div
      {...rest}
      class={cntl`
        most-rated-card w-1/5 flex flex-col flex-grow-1
        gap-2
        ${cls}
      `}
    >
      <Card.Container
        bgImg={imgSrc}
        class="w-full h-72 bg-cover bg-center bg-white rounded-lg"
      >
        <Card.Header class="py-4 px-4 flex justify-between items-center">
          <div
            class="badge dark:bg-white dark:text-black w-max text-xs px-3 py-1 rounded-full h-max "
            hidden={badgeText == null}
          >
            {badgeText}
          </div>
          <button
            class={cntl`
              ${fav ? 'text-red-500' : 'text-black/40'}
              text-2xl inline-flex
            `}
            onClick={onFav}
          >
            <span class="material-icons-outlined">
              {fav ? 'favorite' : 'favorite_border'}
            </span>
          </button>
        </Card.Header>
      </Card.Container>
      <div class="class-info flex flex-col px-2 gap-1">
        <div class="flex text-sm items-center justify-between">
          <span class="quota flex gap-2 text-sm items-center">
            <span class="text-base">
              <span class="material-icons-outlined" aria-label="icon">
                how_to_reg
              </span>
            </span>
            <span>
              <span class="filled">8</span>/
              <span class="limit font-bold">10</span>
            </span>
          </span>

          <span class="date flex gap-2 text-sm items-center">
            <span class="text-base">
              <span class="material-icons-outlined" aria-label="icon">
                event
              </span>
            </span>
            <span>Jan 21-29, 22</span>
          </span>
        </div>

        <h3 class="font-heading-alt text-sm mb-1">
          Everything You Need to Know About Business
        </h3>

        <div class="flex items-center justify-between font-heading-alt">
          <span class="price text-base">
            <span class="font-bold">$49.65</span>
            <span>/classes</span>
          </span>

          {/* <span class="rating flex gap-2 text-sm items-center">
            <span class="text-base">
              <span class="material-icons-outlined" aria-label="icon">
                grade
              </span>
            </span>
            <span>4.5 (120)</span>
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default VideoOnDemandCard
