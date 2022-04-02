import { Link } from '@Bits/Button'
import cntl from 'cntl'
import Notice from './Notice'

export default function Notice404() {
  return (
    <div className="container px-12 mx-auto flex justify-center items-center h-screen -mt-header-sm sm:-mt-header">
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
          subsubtitle: cntl`text-zinc-500`,
        }}
      />
    </div>
  )
}
