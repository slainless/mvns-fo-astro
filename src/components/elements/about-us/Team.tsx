import { AspectRatio } from '@radix-ui/react-aspect-ratio'

type Member = {
  name: string
  subtitle: string
  img: string
}
const members: Member[] = [
  {
    name: 'Goh Chai Li',
    subtitle: 'Chief Learning Officer',
    img: '/media/posters/1.jpg',
  },
  {
    name: 'Nazrin Asyraf',
    subtitle: 'Corporate Communication Associate',
    img: '/media/posters/2.jpg',
  },
  {
    name: 'Phatsalin Fon',
    subtitle: 'Chief Creative Officer',
    img: '/media/posters/3.jpg',
  },
]

export default function Team() {
  return (
    <div className="contents not-prose">
      <ul
        id="team"
        className="flex flex-col px-10 xs:px-0 xs:grid xs:grid-cols-2 sm:grid-cols-3 xs:gap-x-8 lg:gap-x-12 gap-y-10"
      >
        {members.map((member) => (
          <li
            className="member !pl-0 flex flex-col gap-5 group"
            key={member.name}
          >
            <AspectRatio ratio={1 / 1.25}>
              <div
                className="
                member-img w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all 
                after:w-0 after:group-hover:w-full after:absolute after:bottom-0 after:h-2 after:bg-red-600
                after:transition-all
              "
                style={{ backgroundImage: `url('${member.img}')` }}
              ></div>
            </AspectRatio>
            <div>
              <div className="member-name font-heading font-bold text-lg">
                {member.name}
              </div>
              <div className="member-position">{member.subtitle}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
