import {
  CircledFacebook,
  CircledInstagram,
  CircledLinkedIn,
  CircledYoutube,
} from '@Bits/Brand'
import { Common as Info } from '@Bits/Info'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import cntl from 'cntl'
import Markdown from 'react-markdown'
import { twMerge } from 'tailwind-merge'

export default function Header() {
  return (
    <section id="profile-header">
      <div className="w-full h-48 sm:h-56 lg:h-72">
        <div
          id="profile-cover"
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://unsplash.com/photos/Nyvq2juw4_o/download?force=true&w=1920')`,
          }}
        ></div>
      </div>
      <div
        id="profile-main"
        className="flex flex-col sm:flex-row py-5 mx-5 xs:mx-7 sm:mx-16 gap-y-0 gap-x-10"
      >
        <div
          className={twMerge(
            'w-48 md:w-56 lg:w-64 h-auto border-8 lg:border-[1rem] self-center sm:self-start',
            'flex-shrink-0 relative -top-16 -mb-10 bg-white border-white rounded-lg overflow-hidden'
          )}
        >
          <AspectRatio ratio={1}>
            <div
              id="profile-picture"
              className="w-full h-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/media/stocks/IMG_1441.JPG')`,
              }}
            ></div>
          </AspectRatio>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <div className="flex flex-col order-first items-center sm:items-start">
            <div id="profile-occupation" className="flex flex-row items-center">
              <span className="text-sm lg:text-base">Illustrator & Artist</span>
              {/* <div className="text-white/50 before:content-['•'] before:text-white/50 before:mx-5">
                Instructor
              </div> */}
            </div>
            <div id="profile-name" className="flex flex-row items-center gap-5">
              <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl">
                Hardy Fowler
              </h1>
              {/* <div className="text-white/50"></div> */}
            </div>
          </div>
          <div
            id="profile-stats"
            className="flex flex-row gap-5 lg:gap-10 -order-3 lg:-order-2"
          >
            <Info
              icon="school"
              styleOverrides={{
                text: cntl`text-base`,
                icon: cntl`text-yellow-500`,
              }}
            >
              125 Students
            </Info>
            <Info
              icon="class"
              styleOverrides={{
                text: cntl`text-base`,
                icon: cntl`text-yellow-500`,
              }}
            >
              16 Classes
            </Info>
          </div>
          <div
            id="profile-social"
            className="flex flex-row gap-2 -order-2 lg:order-1"
          >
            <SocialButton className="fill-white">
              <CircledFacebook />
            </SocialButton>
            <SocialButton className="fill-white">
              <CircledInstagram />
            </SocialButton>
            <SocialButton className="fill-white">
              <CircledYoutube />
            </SocialButton>
            <SocialButton className="fill-white">
              <CircledLinkedIn />
            </SocialButton>
          </div>

          <div id="profile-desc" className="-order-4 hidden lg:flex">
            {/* prettier-ignore */}
            <Markdown className="prose prose-invert max-w-full">
{`
I am a photo artist and art director from
Munich. Last year I was chosen to be one of the nine Adobe
Creative Residents in 2019/2020. My pictures are widely known for
their colorful, surrealistic touch. by books, lyrics and words in
total, I am able to abstract and visualize them into new artworks.
`}
            </Markdown>
          </div>
        </div>
      </div>
      <div
        id="profile-desc-alt"
        className="mt-5 sm:mt-0 -order-1 lg:-order-2 mx-5 xs:mx-7 sm:mx-16 lg:hidden"
      >
        {/* prettier-ignore */}
        <Markdown className="prose prose-invert">
{`
I am a photo artist and art director from
Munich. Last year I was chosen to be one of the nine Adobe
Creative Residents in 2019/2020. My pictures are widely known for
their colorful, surrealistic touch. by books, lyrics and words in
total, I am able to abstract and visualize them into new artworks.
`}
            </Markdown>
      </div>
    </section>
  )
}

type ButtonProps = HTMLAttr<'a'>
function SocialButton(props: ButtonProps) {
  const { className, ...rest } = props
  return (
    <a
      className={twMerge(
        'w-8 h-8 cursor-pointer hover:fill-red-600 transition-colors',
        className
      )}
      {...rest}
    ></a>
  )
}
