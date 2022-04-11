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
          cntl`text-base sm:after:content-['•'] after:text-white/50 after:mx-2 last:after:content-none`,
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

          <h1 className="text-3xl sm:text-4xl font-bold">
            Introduction to Design Thinking
          </h1>
          <div className="mt-5 items-center flex flex-row justify-between">
            <div className="flex flex-col sm:flex-row gap-x-2">
              <ClassInfo
                id="class-rating"
                icon="star"
                styleOverrides={{
                  icon: cntl`text-yellow-500 !text-xl`,
                  text: cntl`text-base font-bold`,
                }}
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
          </div>
        </div>
        <main id="the-class" className="flex flex-col gap-5">
          <div
            id="class-media"
            className="grid md:grid-cols-[1fr_auto] gap-5 md:-mx-10 lg:mx-0"
          >
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
            <div
              id="class-media-info"
              className="flex flex-col gap-2 lg:gap-5 text-sm lg:text-base flex-shrink-1"
            >
              <div
                id="class-media-actions"
                className="grid grid-cols-2 lg:flex flex-col gap-2"
              >
                {(() => {
                  const MediaActionStyle = cntl`py-3 px-5 w-full bg-zinc-900 text-left rounded-md flex items-center gap-2 leading-none`
                  const IconStyle = cntl`material-icons text-white p-1 bg-red-600 rounded-md inline-flex items-center justify-center`

                  return (
                    <>
                      <button className={MediaActionStyle}>
                        <span className={IconStyle}>play_arrow</span>{' '}
                        <span>Video</span>
                      </button>
                      <button className={MediaActionStyle}>
                        <span className={IconStyle}>collections</span>{' '}
                        <span>Gallery</span>
                      </button>
                    </>
                  )
                })()}
              </div>
              <h4>Lessons</h4>
              <div
                id="class-lessons"
                className="flex-grow relative overflow-auto rounded-lg w-full md:w-64 h-64 md:h-0 lg:w-80"
              >
                <div className="h-full absolute rounded-lg overflow-auto w-full">
                  <ol className="list-decimal list-inside flex flex-col">
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
              </div>
            </div>
          </div>
          <article id="class-desc" className="prose prose-invert">
            <h2 className="font-bold text-xl">
              Learn to Make Human-centric Designs
            </h2>
            {/* <p>
              How do you make the best version of your idea? While there is no
              single answer for a major question – one of the best ways to start
              is to have some clarity on its main purpose, its user and how to
              best adapt your idea to that user. This requires a lot of inquiry,
              trials and errors and immense research. This whole process is
              called ‘Design Thinking’ – all aimed to have your idea provide the
              best experience and outcome for your user.
            </p> */}
            <p>
              Instructing you in this concept is Uwuis Zainal, who will be
              sharing insight on how to design Human Centric Product and Human
              Centric User Experience with the objective to provide participants
              some good understanding how to develop a good product that fits
              for purpose.
            </p>
          </article>
        </main>
      </Section.Content>
    </Section.Container>
  )
}
