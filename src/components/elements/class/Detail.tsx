import Section from '@Blocks/Section'
import { Common as Info } from '@Bits/Info'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import { useEffect } from 'react'
import { Root as AspectRatio } from '@radix-ui/react-aspect-ratio'

type ClassInfoProps = Parameters<typeof Info>[0]
function ClassInfo(props: ClassInfoProps) {
  const { styleOverrides, ...rest } = props
  return (
    <Info
      styleOverrides={{
        container: twMerge(
          cntl`text-md after:content-['•'] after:text-white/50 after:mx-2 last:after:content-none`,
          styleOverrides?.container
        ),
        text: twMerge(cntl`text-sm`, styleOverrides?.text),
        icon: twMerge(cntl``, styleOverrides?.icon),
      }}
      {...rest}
    />
  )
}

export default function Detail() {
  useEffect(() => {
    // // @ts-ignore
    // const videoPlayer = videojs('class-video', {
    //   techOrder: ['youtube'],
    //   sources: [
    //     {
    //       type: 'video/youtube',
    //       src: 'https://www.youtube.com/watch?v=xjS6SftYQaQ',
    //     },
    //   ],
    //   youtube: { iv_load_policy: 1, ytControls: 2 },
    // })
    // videoPlayer.disablePictureInPicture(true)
    // console.log(videoPlayer)
  }, [])
  return (
    <Section.Container id="the-detail">
      <Section.Title id="the-detail-title" className="lg:text-3xl ">
        Detail Class
      </Section.Title>
      <Section.Content className="flex flex-col gap-10">
        <div id="class-info" className="flex flex-col">
          <Info
            id="class-type"
            icon="contactless"
            styleOverrides={{
              container: cntl`text-xl gap-3`,
              text: cntl`text-sm uppercase tracking-widest`,
            }}
          >
            Online Class
          </Info>

          <h1 className="text-4xl font-bold">
            Introduction to Design Thinking
          </h1>
          <div className="mt-5 items-center flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <ClassInfo
                id="class-rating"
                icon="star"
                styleOverrides={{ icon: cntl`text-red-500` }}
              >
                4.8 (31)
              </ClassInfo>
              <ClassInfo id="class-duration" icon="schedule">
                1 Lectures (2 hours)
              </ClassInfo>
              <ClassInfo id="class-category" icon="work_outline">
                Business
              </ClassInfo>
            </div>
            {/* <button>
              <ClassInfo
                id="class-category"
                icon="share"
                styleOverrides={{
                  icon: cntl`no-underline`,
                  text: cntl`underline`,
                }}
              >
                Share
              </ClassInfo>
            </button> */}
          </div>
        </div>
        <div id="class-media" className="flex flex-row gap-5">
          <main id="the-class" className="flex-grow flex flex-col gap-5">
            {/* <video
              id="class-video"
              className="video-js w-full h-full"
              preload="auto"
              data-setup={JSON.stringify({})}
            ></video> */}
            <div id="class-player">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oTKXv191tYU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </div>
            <article id="class-desc" className="inline-flex flex-col gap-3">
              <h2 className="font-bold text-xl">
                Learn to Make Human-centric Designs
              </h2>
              <p className="text-white/70">
                How do you make the best version of your idea? While there is no
                single answer for a major question – one of the best ways to
                start is to have some clarity on its main purpose, its user and
                how to best adapt your idea to that user. This requires a lot of
                inquiry, trials and errors and immense research. This whole
                process is called ‘Design Thinking’ – all aimed to have your
                idea provide the best experience and outcome for your user.
              </p>
              <p className="text-white/70">
                Instructing you in this concept is Uwuis Zainal, who will be
                sharing insight on how to design Human Centric Product and Human
                Centric User Experience with the objective to provide
                participants some good understanding how to develop a good
                product that fits for purpose.
              </p>
            </article>
          </main>
          <div
            id="class-media-info"
            className="flex flex-col gap-5 w-80 flex-shrink-0"
          >
            <div id="class-media-actions" className="flex flex-col gap-2">
              {(() => {
                const MediaActionStyle = cntl`py-3 px-5 w-full text-base bg-zinc-900 text-left rounded-md flex items-center gap-2 leading-none`
                const IconStyle = cntl`material-icons text-white p-0.5 bg-red-600 rounded-full inline-flex items-center justify-center`

                return (
                  <>
                    <button className={MediaActionStyle}>
                      <span className={IconStyle}>play_arrow</span>{' '}
                      <span className="text-base">Class Trailer</span>
                    </button>
                    <button className={MediaActionStyle}>
                      <span className={IconStyle}>play_arrow</span>{' '}
                      <span className="text-base">Class Gallery</span>
                    </button>
                  </>
                )
              })()}
            </div>
            <div id="class-lessons" className="flex flex-col gap-2">
              <h4>Lessons</h4>
              <ol className="list-decimal list-inside flex flex-col max-h-[18rem] overflow-y-auto">
                {[
                  'Meet Your Instructor',
                  'Your First Steps',
                  'Starting Line',
                  'Goal Settings',
                  "Balancing the Runner's Mind",
                  'Running Equipment and Environment',
                  'This is a Placeholder',
                  'This is a Placeholder',
                  'This is a Placeholder',
                ].map((item, index) => (
                  <li
                    key={item + index}
                    className="py-3 bg-zinc-900 px-5 border-b-[1px] border-zinc-800 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            {/* <aside id="recommended-classes">
              <div className="recommended-class flex flex-row gap-3 items-center h-24">
                <div className="w-24">
                  <AspectRatio ratio={1}>
                    <div className="w-full h-full bg-[url('/media/another-thumb.png')] bg-cover bg-center"></div>
                  </AspectRatio>
                </div>
                <div className="recommended-class-info flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-500 leading-none">
                    You might like
                  </span>
                  <h5 className="text-ellipsis line-clamp-2 leading-tight font-bold">
                    Developing Entrepreneurial Mindset
                  </h5>
                  <h6 className="text-sm leading-none">Chai Li</h6>
                </div>
              </div>
            </aside> */}
          </div>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
