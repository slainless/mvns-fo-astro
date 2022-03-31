import Accordion from './Accordion'
import Markdown from 'react-markdown'
// import { Markdown } from 'astro/components'

export default function Enrollment() {
  return (
    <Accordion.Container title="Enrollment" type="single" collapsible={true}>
      <Accordion.Item title="How do I take a Mavensdotlive course?">
        {/* prettier-ignore */}
        <Markdown children={`
Mavensdotlive uses a ‘pre-booking system’. For each class, Instructors
set a minimum number of students for it to be activated. If the class
does not reach its minimum number, the class will simply not take
place. Here’s how it works: 

1.  Go to the Courses page and choose the course of your interest. 
    In the course’s overview tab, it will state the 
    **‘minimum no. of students required to activate class’**. 
2.  Click ‘add to cart’ and then your personal details will be required. 
    Your enrollment is then being processed. 
3.  You then wait for us to email you if the class is activated or not. 
4.  If the class is activated, your enrollment will be accepted and we 
    will require you to pay. 
5.  Now you are able to access all the course’s curriculum.
        `}/>
      </Accordion.Item>
      <Accordion.Item title="What type of courses are offered?">
        <Markdown>
          Mavensdotlive hosts a variety of courses such as Business, Marketing,
          Soft skill courses, Corporate training, Digital art, Mental health
          topics and much more.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="What types of information are displayed in a course page?">
        {/* prettier-ignore */}
        <Markdown>
          Each course has the Overview, Curriculum, Instructor and Review tab.
          The Overview tab contains a brief introduction of the course,
          including the course information, goals, etc. This also has the
          Courses features, which consist of the number of lectures and quizzes,
          duration, skill level, language of instruction, information about
          certification and providing any assessments. 
          
          The Curriculum tab
          contains the teaching materials. The ways in which it organizes
          depends on how an instructor structures his lessons per week or
          session. 
          
          The Instructor tab displays an instructor’s profile and the
          Review tab showcases the reviews made by the registered students.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How do I enrolled in a course after purchasing it?">
        <Markdown>
          Your purchase is currently in progress. You will have to wait until
          the minimum number of students is reached, then you are notified about
          the status of the course. tab.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How much would it cost for enrolling a course?">
        <Markdown>
          Each course’s pricing varies according to the Instructor. On average,
          the price of a course is around BND30.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How can I see the courses I have registered for?">
        <Markdown>Go to Account &gt; Learning &gt; Courses.</Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to save or bookmark a course I am interested in?">
        <Markdown>
          Click the Love icon in the top right corner of your particular course
          image.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="Do I receive anything after I complete a course?">
        <Markdown>
          Upon finishing a class or course, all participants will receive a
          certificate of completion. For some courses from certified
          institutions, you may even receive a full certification.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="What is the medium language of instruction for Mavensdotlive?">
        <Markdown>
          Most of our courses will be taught in English. However, there can be
          instances of code-switching between Malay and English from local
          instructors.
        </Markdown>
      </Accordion.Item>
    </Accordion.Container>
  )
}
