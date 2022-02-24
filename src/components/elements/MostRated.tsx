import Section from '@Blocks/Section'
import Card from './MostRated/Card'
import isBrowser from '@Functions/isBrowser'
import { useMemo } from 'preact/hooks'
import { getUser, Role } from '@Api/user'

export default function MostRated() {
  if (!isBrowser) {
    // don't render anything by default
    return <></>
  }

  const user = useMemo(() => getUser(), [])
  if (user == null || user.role.is(Role.NONE)) return <></>

  return (
    <Section.Container id="most-rated">
      <div class="mx-10 flex items-center gap-5">
        <Section.Title class="leading-none">Classes</Section.Title>
        <a id="all-most-rated-link" class="">
          See all
        </a>
      </div>
      <div id="most-rated-class" class="mt-12 flex gap-5">
        <Card
          imgSrc="/image/most-rated-card.jpg"
          class="snap-start"
          badgeText="Live"
        />
        <Card
          imgSrc="/image/most-rated-card.jpg"
          class="snap-start"
          badgeText="Live"
        />
        <Card
          imgSrc="/image/most-rated-card.jpg"
          class="snap-start"
          badgeText="Recording"
        />
        <Card
          imgSrc="/image/most-rated-card.jpg"
          class="snap-start"
          badgeText="Offline"
        />
        <Card
          imgSrc="/image/most-rated-card.jpg"
          class="snap-start"
          badgeText="Live"
          fav={true}
        />
      </div>
    </Section.Container>
  )
}
