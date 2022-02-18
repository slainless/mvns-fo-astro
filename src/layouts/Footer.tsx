import {
  Facebook,
  Instagram,
  Linkedin,
  Tiktok,
  Youtube,
} from 'src/components/bits/Brand'
import List from './Footer/List'

export default function Footer() {
  return (
    <footer class="dark:bg-white dark:text-black px-20 py-10">
      <div
        id="footer-links"
        class="grid grid-cols-4 border-b-2 border-b-zinc-300 pb-20"
      >
        <List
          title="Support"
          links={[['Privacy Policy'], ['Term of Condition']]}
        />
        <List
          title="Classes"
          links={[['Feature'], ['Trending'], ['Popular'], ['Coming Soon']]}
        />
        <List title="About" links={[['Blog'], ['Mavens dot live']]} />
        <List title="FAQ" links={[['Student'], ['Instructor'], ['Business']]} />
      </div>
      <div class="grid grid-cols-2 pt-6">
        <span id="copyright" class="font-heading-alt text-zinc-500 text-sm">
          © 2022, Mavensdotlive Sdn Bhd. All right reserved.
        </span>
        <div class="flex justify-end gap-7">
          <div class="flex gap-16">
            <span id="language" class="!text-sm flex items-center">
              <span class="material-icons !text-lg">language</span>
              <span></span>
            </span>
            <span id="currency" class="!text-sm flex items-center">
              <span class="material-icons !text-lg">attach_money</span>
              <span class="underline">USD</span>
            </span>
          </div>
          <div id="social-media" class="flex text-2xl gap-3">
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              class="w-6 h-6"
            >
              <Tiktok />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              class="w-6 h-6"
            >
              <Facebook />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              class="w-6 h-6"
            >
              <Youtube />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              class="w-6 h-6"
            >
              <Instagram />
            </a>
            <a
              aria-label="tiktok-link"
              id="social-media-tiktok"
              class="w-6 h-6"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
