import { Link } from '@Bits/Button'

export default function LinkList(props: {
  title: string
  links: [display: string, link?: string][]
}) {
  const { title, links } = props
  return (
    <div className="footer-links flex flex-col gap-3 w-max justify-self-center">
      <h4 className="footer-links-title font-bold mb-5">{title}</h4>
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
  )
}
