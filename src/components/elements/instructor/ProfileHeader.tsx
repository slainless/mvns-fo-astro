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
    <section id="profile-header" className="-mb-16">
      <AspectRatio ratio={16 / 3}>
        <div
          id="profile-cover"
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://unsplash.com/photos/Nyvq2juw4_o/download?force=true&w=1920')`,
          }}
        ></div>
      </AspectRatio>
      <div id="profile-main" className="flex flex-row py-5 mx-16 gap-10">
        <div className="w-80 h-80 flex-shrink-0 relative -top-16 border-[1rem] bg-white border-white rounded-lg overflow-hidden">
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
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div id="profile-occupation" className="">
                Illustrator & Artist
              </div>
              {/* <div className="text-white/50 before:content-['•'] before:text-white/50 before:mx-5">
                Instructor
              </div> */}
            </div>
            <div className="flex flex-row items-center gap-5">
              <h1 id="profile-name" className="font-heading font-bold text-4xl">
                Hardy Fowler
              </h1>
              <div className="text-white/50"></div>
            </div>
          </div>
          <div id="profile-desc">
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
          <div id="profile-stats" className="flex flex-row gap-10">
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
          <div id="profile-social" className="flex flex-row gap-2">
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
        </div>
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
