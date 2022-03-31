import Accordion from './Accordion'
import Markdown from 'react-markdown'
// import { Markdown } from 'astro/components'

export default function Account() {
  return (
    <Accordion.Container
      title="Account/Profile"
      type="single"
      collapsible={true}
    >
      <Accordion.Item title="How do I sign up and sign in?">
        {/* prettier-ignore */}
        <Markdown>
          To sign in, go to www.maves.live/login and enter your required
          details. To sign up, go to www.mavens.live/signup and enter your
          required details to create an account. You would be required to
          activate it through your email address (spam folder). 
          
          You can also use
          your social media to connect with Mavensdotlive without entering
          details and activating.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to edit your Mavensdotlive profile">
        {/* prettier-ignore */}
        <Markdown>
          Once you are already registered, hover over the Account &gt; Settings.
          In the Settings tab, there are four tabs such as general (change email
          and password), email notification, profile visibility, export data and
          delete account.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to upload your Profile Picture?">
        {/* prettier-ignore */}
        <Markdown>
          Go to Account &gt; Profile &gt; Change Profile Photo. You can also change your cover photo.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="What is Learning Profile?">
        <Markdown>
          Profile displays information about your enrolled courses,
          certificates, orders, quizzes and wishlist. However, you cannot edit
          the information, unless the profile settings allows you to modify the
          following information such as your biographical info, first/last name,
          display name publicly, avatar and change password. It is highly
          recommended to change the aforementioned information on your
          **profile** instead of your **learning profile** under the Settings
          tab.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to edit Learning Profile?">
        <Markdown>
          Go to Learning Profile &gt; Settings &gt; General. Enter your bio and
          other info, which can be private in the Privacy tab.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="What is the difference between Learning Profile and Profile?">
        <Markdown>
          The difference between learning profile and user profile is the level
          of information provided. For instance, on your profile page, you are
          allowed to change your profile details, connect with other registered
          users, attend forums, etc. However, learning profile is used to
          provide information about your learning experience.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to change or reset your password?">
        <Markdown>Go to Account &gt; Settings &gt; General.</Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to change your Mavensdotlive Account’s email address?">
        <Markdown>Go to Account &gt; Settings &gt; General.</Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to public and private my user profile from member directory?">
        <Markdown>
          Go to Account &gt; Settings &gt; Profile Visibility.
        </Markdown>
      </Accordion.Item>
      <Accordion.Item title="How to delete my account?">
        <Markdown>Go to Account &gt; Settings &gt; Delete Account.</Markdown>
      </Accordion.Item>
    </Accordion.Container>
  )
}
