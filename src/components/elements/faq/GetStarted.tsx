import Accordion from './Accordion'
import Markdown from 'react-markdown'
// import { Markdown } from 'astro/components'

export default function GetStarted() {
  return (
    <Accordion.Container title="Get Started" type="single" collapsible={true}>
      <Accordion.Item title="How does Mavensdotlive work?">
        Mavensdotlive is a live learning marketplace that hosts live learning
        (online and offline) for students and instructors.
      </Accordion.Item>
      <Accordion.Item title="What is a live-streaming services provider used by Mavesdotlive?">
        Zoom
      </Accordion.Item>
      <Accordion.Item title="What does Mavensdotlive offer?">
        {/* prettier-ignore */}
        <Markdown>
          Mavensdotlive offers courses created and managed by the instructor(s).
          These classes are either taught physically (offline) or via Zoom
          (online). The main content of each course is its lectures which can
          consist of videos, slides, text and other forms of media. Instructors
          can also include practical activities such as quizzes, test questions
          and forums. 
          
          Additional information on Mavensdotlive’s platforms and
          features can be seen here.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="Do I have to start my Mavensdotlive course at a certain time? And how long do I have to complete it?">
        {/* prettier-ignore */}
        <Markdown>
          This depends on the course’s requirement: If the course has a
          prerequisite, you must always start from the beginning and If it
          doesn’t, you are free to join at any point. 
          
          The duration for courses
          varies: a one-off class usually takes an hour or two and a course may
          take 3 weeks to 2 months.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="Is Mavensdotlive an accredited institution?">
        <Markdown>
          Mavensdotlive is in the process of being an accredited institution by
          registering as a ‘Lifelong Learning Centre’ (L3C).
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="Can I preview a class?">
        <Markdown>
          You may preview a course if the instructor enables students to do so.
          Please ensure that you are already logged in to Mavensdotlive in order
          to access the preview feature.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How do I pay for a course?">
        <Markdown>
          With Mavensdotlive’s cash on delivery system, online transfer and cash
          is accepted.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="What if I don't like the course I purchased?">
        <Markdown>
          Mavensdotlive currently **does not offer refunds** but instead, you’ll
          be able to attend future classes with your current payment. If you
          have further inquiries, do contact us.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to search for courses?">
        <Markdown>
          To search for courses, you may either click the Search button on the
          top menu bar or browse through courses in the courses page.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="What is Cart in the main menu?">
        <Markdown>
          Cart is a list of the purchase of a course. You do not necessarily
          have to login to use the add to cart feature. However, you would need
          to register first in order to make payment and enroll in a course.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to add a course to my wishlist?">
        <Markdown>
          Wishlist is a feature that allows you to save a course that you are
          likely to attend, but not yet enrolled. Go to Account &gt; Learning
          Profile &gt; Wishlist to view your list of interested courses.
        </Markdown>
      </Accordion.Item>
    </Accordion.Container>
  )
}
