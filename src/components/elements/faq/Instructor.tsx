import Accordion from './Accordion'
import Markdown from 'react-markdown'
// import { Markdown } from 'astro/components'

export default function Instructor() {
  return (
    <Accordion.Container title="Instructor" type="single" collapsible={true}>
      <Accordion.Item title="How do I sign up as an instructor?">
        {/* prettier-ignore */}
        <Markdown>
          If you have already registered and an account, you can register
          through the Become An Instructor page in the menu. 

          If you are not already logged in, you are required to login first in 
          order to become an instructor.

          In the become an instructor page, you are displayed the Become An
          Instructor and Instructor’s Agreement guidelines and the Registration
          form. This form includes your username, email, phone number and
          message. Your instructor registration form requires the moderation
          team’s approval.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How does an instructor add/edit/delete a course?">
        {/* prettier-ignore */}
        <Markdown>
          Go to Account &gt; Instructor’s Guide and refer to the Instructor’s manual guide.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to edit instructor's profile?">
        {/* prettier-ignore */}
        <Markdown>
          Instructor’s profile is the same as other registered users, the difference 
          is the learning profile which instructors have the control to view his list 
          of students and courses.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="Would it possible for instructors to enroll in other instructors' class?">
        <Markdown>
          Yes, it would be possible to enroll in other instructors’ classes.
        </Markdown>
      </Accordion.Item>
    </Accordion.Container>
  )
}
