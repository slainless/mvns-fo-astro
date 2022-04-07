import CardView from '@Elements/CardView'
import cntl from 'cntl'

export type CardViewProps = Partial<Parameters<typeof CardView>[0]>
type Props = CardViewProps
module CardPreset {
  export const Normal: Props = {
    swiperOptions: {
      rewind: true,
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          slidesPerGroup: 1,
          spaceBetween: 15,
        },
        375: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
        },
        475: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    },
    styleOverrides: {
      swiper: {
        style: cntl`rounded-none sm:rounded-lg`,
        buttons: {
          style: cntl`hidden sm:flex`,
        },
      },
      section: {
        content: cntl`-mr-5 xs:-mr-7 sm:mr-0`,
      },
    },
  }

  export const Large: Props = {
    styleOverrides: {
      card: {
        card: {
          header: cntl`xs:p-8`,
        },
        favorite: cntl`xs:text-3xl md:text-4xl xs:w-16 xs:h-16`,
        title: cntl`xs:text-3xl md:text-4xl`,
        price: cntl`xs:text-2xl md:text-3xl`,
      },
      swiper: {
        style: cntl`rounded-none sm:rounded-lg`,
        buttons: {
          style: cntl`hidden sm:flex`,
        },
      },
      section: {
        content: cntl`-mr-5 xs:-mr-7 sm:mr-0`,
      },
    },
    swiperOptions: {
      rewind: true,
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          slidesPerGroup: 1,
          spaceBetween: 15,
        },
        375: {
          slidesPerView: 1.2,
          slidesPerGroup: 1,
        },
        475: {
          slidesPerView: 1.25,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
        },
        1280: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
    },
  }
}

export default CardPreset
