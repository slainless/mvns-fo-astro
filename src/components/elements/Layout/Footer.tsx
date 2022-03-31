import { Facebook, Instagram, LinkedIn, Tiktok, Youtube } from '@Bits/Brand'
import List from './Footer/List'

export default function Footer() {
  return (
    <footer id="footer" className="bg-white text-black px-20 py-10">
      <div
        id="footer-links"
        className="grid grid-cols-5 border-b-2 border-b-zinc-300 pb-20"
      >
        {/* <List
          title="Support"
          links={[['Privacy & Policy', '/privacy'], ['Term of Condition']]}
        />
        <List
          title="Classes"
          links={[['Feature'], ['Trending'], ['Popular'], ['Coming Soon']]}
        />
        <List
          title="About"
          links={[['Blog'], ['Mavens dot live', '/about-us']]}
        />
        <List title="FAQ" links={[['Student'], ['Instructor'], ['Business']]} /> */}
        <List
          title="Mavensdotlive"
          links={[
            ['About Us', '/about-us'],
            ['For Business', '/business'],
            ['Become a Partner', '/partner'],
            ['Become an Instructor', '/instructor'],
            ['Careers', '/career'],
          ]}
        ></List>
        <hr className="invisible"></hr>
        <List
          title="Classes"
          links={[
            ['Online', '/class/all'],
            ['Physical', '/class/all'],
            ['Video', '/class/all'],
            ['Certification', '/class/all'],
          ]}
        ></List>
        <hr className="invisible"></hr>
        <List
          title="More"
          links={[
            ['FAQs', '/faq'],
            ['Terms', '/tos'],
            ['Privacy', '/privacy-policy'],
            ['Blog', '/blog/all'],
            ['Sitemap', '/sitemap'],
            ['Contact', '/contact'],
          ]}
        ></List>
      </div>
      <div className="grid grid-cols-2 pt-6">
        <span id="copyright" className="font-heading text-zinc-500 text-sm">
          © 2022, Mavensdotlive Sdn Bhd. All right reserved.
        </span>
        <div className="flex justify-end gap-7">
          {/* <div className="flex gap-16">
            <span id="language" className="!text-sm flex items-center">
              <span className="material-icons !text-lg">language</span>
              <span></span>
            </span>
            <span id="currency" className="!text-sm flex items-center">
              <span className="material-icons !text-lg">attach_money</span>
              <span className="underline">USD</span>
            </span>
          </div> */}
          <div id="social-media" className="flex text-2xl gap-3">
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              className="w-6 h-6"
            >
              <Tiktok />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              className="w-6 h-6"
            >
              <Facebook />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              className="w-6 h-6"
            >
              <Youtube />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              className="w-6 h-6"
            >
              <Instagram />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              className="w-6 h-6"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
