import { Link } from '@Bits/Button'
import cntl from 'cntl'
import Notice from './Notice'

export default function Notice404() {
  return (
    <div className="container px-12 mx-auto flex justify-center items-center min-h-screen">
      <Notice
        img="/media/sparks/cry.png"
        title="404"
        subtitle="Page not found."
        subsubtitle={
          <Link
            href="/"
            className="text-zinc-400 tracking-normal after:w-[4ch]"
            children="Back to home?"
          />
        }
        styleOverrides={{
          title: cntl`text-9xl`,
          subsubtitle: cntl`text-zinc-500`,
        }}
      />
    </div>
  )
}
