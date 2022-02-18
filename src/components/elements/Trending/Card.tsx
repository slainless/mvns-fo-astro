import { mergeClass } from 'src/functions/jsx-helper'
import { Card } from '../../blocks/Card'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string
  title?: string
  subtitle?: string
  type?: string
  badgeText?: string
}
const TrendingCard: FunctionComponent<CardProps> = (props) => {
  const {
    imgSrc,
    title,
    subtitle,
    type,
    badgeText,
    class: cls,
    ...rest
  } = props

  const style = 'trending-card w-1/4 flex flex-grow-0 flex-shrink-0 p-2'
  return (
    <div {...rest} class={mergeClass(style, cls)}>
      <Card.Container>
        <Card.Image src={imgSrc} />
        <Card.Header class="py-4 px-4">
          <div
            class="badge dark:bg-white dark:text-black w-max text-xs px-3 py-1 rounded-full"
            hidden={badgeText == null}
          >
            {badgeText}
          </div>
        </Card.Header>
        <Card.Content class="p-4 text-center items-center flex flex-col">
          <h4 class="card-title font-heading text-2xl" hidden={title == null}>
            {title}
          </h4>
          <hr
            class="w-4 mx-auto border-2 my-3 border-white"
            hidden={subtitle == null}
          />
          <h5 class="card-subtitle w-max" hidden={subtitle == null}>
            {subtitle}
          </h5>
          <span class="card-minor-info text-xs" hidden={type == null}>
            <span class="material-icons-outlined !text-sm mr-2">
              trending_up
            </span>
            {type}
          </span>
        </Card.Content>
      </Card.Container>
    </div>
  )
}

export default TrendingCard
