import Swiper, { Navigation, SwiperOptions } from 'swiper'
import { useEffect, useMemo, useRef } from 'preact/hooks'
import { ComponentChild } from 'preact'
import { twMerge } from 'tailwind-merge'
import { nanoid } from 'nanoid'

// import 'swiper/css'
// import 'swiper/css/navigation'

type CommonProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  options?: SwiperOptions
}
export const Common: FunctionComponent<CommonProps> = (props) => {
  const { children, class: cls, id, options, ...rest } = props
  // const randomId = useMemo(() => nanoid(5), [])
  const swiperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (swiperRef.current == null) return
    const swiper = new Swiper(swiperRef.current, {
      direction: 'horizontal',
      loop: false,
      modules: [Navigation],

      navigation: {
        nextEl: `#next-${id}`,
        prevEl: `#prev-${id}`,
      },

      slidesPerView: 4,
      spaceBetween: 25,
      slidesPerGroup: 4,

      breakpoints: {},
      ...options,
    })
  }, [swiperRef])

  return (
    <div class="swiper-container relative" id={`carousel-${id}`}>
      <div class="swiper-button-prev" id={`prev-${id}`}></div>
      <div
        {...rest}
        class={twMerge('swiper w-full rounded-lg', cls)}
        ref={swiperRef}
      >
        <div class="swiper-wrapper">{children}</div>
      </div>
      <div class="swiper-button-next" id={`next-${id}`}></div>
    </div>
  )
}
