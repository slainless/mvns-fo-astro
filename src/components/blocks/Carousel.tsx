import { Navigation, SwiperOptions } from 'swiper'
import { Swiper } from 'swiper/react'
import { useEffect, useMemo, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { nanoid } from 'nanoid'
import './Carousel.styl'

// import 'swiper/css'
// import 'swiper/css/navigation'

type CommonProps = Parameters<typeof Swiper>[0] & {
  id: string
  styleOverrides?: {
    buttons?: {
      style?: string
      prev?: string
      next?: string
    }
  }
}
export const Common: FunctionComponent<CommonProps> = (props) => {
  const { children, className: cls, id, styleOverrides, ...rest } = props

  const defaultOptions: SwiperOptions = {
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
  }

  return (
    <div className="swiper-container relative" id={`carousel-${id}`}>
      <div
        className={twMerge(
          'swiper-button-prev',
          styleOverrides?.buttons?.style,
          styleOverrides?.buttons?.prev
        )}
        id={`prev-${id}`}
      ></div>
      <Swiper
        className={twMerge('swiper w-full rounded-lg', cls)}
        {...defaultOptions}
        {...rest}
      >
        {children}
      </Swiper>
      <div
        className={twMerge(
          'swiper-button-next',
          styleOverrides?.buttons?.style,
          styleOverrides?.buttons?.next
        )}
        id={`next-${id}`}
      ></div>
    </div>
  )
}
