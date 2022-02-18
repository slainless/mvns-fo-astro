export default function LinkList(props: {
  title: string
  links: [display: string, link?: string][]
}) {
  const { title, links } = props
  return (
    <div class="footer-links flex flex-col gap-3 w-max justify-self-center">
      <h4 class="footer-links-title font-bold mb-5">{title}</h4>
      {links.map((link, i) => (
        <a key={i} href={link[1]} class="font-heading-alt text-sm">
          {link[0]}
        </a>
      ))}
    </div>
  )
}
