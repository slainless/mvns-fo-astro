import Carousel from '@Blocks/Carousel'
import Card from './Card'

export default function TrendingCarousel() {
  return (
    <Carousel.Container id="vod-container" class="mt-12">
      <Carousel.PrevButton />
      <Carousel.Content class="hide-scrollbar">
        <Card imgSrc="/image/trending-card-2.jpg" class="snap-start" />
        <Card imgSrc="/image/trending-card-2.jpg" class="snap-start" />
        <Card imgSrc="/image/trending-card-2.jpg" class="snap-start" />
        <Card imgSrc="/image/trending-card-2.jpg" class="snap-start" />
      </Carousel.Content>
      <Carousel.NextButton />
    </Carousel.Container>
  )
}
