import Carousel from '@Blocks/Carousel'
import Card from './Card'

export default function TrendingCarousel() {
  return (
    <Carousel.Container id="most-rated-container" class="mt-12">
      <Carousel.PrevButton />
      <Carousel.Content class="hide-scrollbar">
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
        <Card imgSrc="/image/most-rated-card.jpg" class="snap-start" />
        <Card imgSrc="/image/most-rated-card.jpg" class="snap-start" />
        <Card imgSrc="/image/most-rated-card.jpg" class="snap-start" />
        <Card imgSrc="/image/most-rated-card.jpg" class="snap-start" />
        <Card imgSrc="/image/most-rated-card.jpg" class="snap-start" />
      </Carousel.Content>
      <Carousel.NextButton />
    </Carousel.Container>
  )
}
