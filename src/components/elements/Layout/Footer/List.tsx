import { Link } from '@Bits/Button'

export default function LinkList(props: {
  title: string
  links: [display: string, link?: string][]
}) {
  const { title, links } = props
  return (
    <div className="footer-links flex flex-col gap-3 w-full sm:w-max justify-self-center pb-5 mb-5 last:pb-0 last:mb-0 border-b-[1px] border-zinc-300 last:border-0 xs:border-0">
      <h4 className="footer-links-title font-bold sm:mb-5">{title}</h4>
      <div className="contents xs:grid grid-cols-2 gap-3 sm:contents">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link[1]}
            className="font-heading text-sm text-black tracking-normal after:w-0 w-max hover:text-red-600"
          >
            {link[0]}
          </Link>
        ))}
      </div>
    </div>
  )
}
