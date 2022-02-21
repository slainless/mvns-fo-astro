import Carousel from '../../blocks/Carousel'
import Card from './Card'

export default function TrendingCarousel() {
  return (
    <Carousel.Container id="trending-container" class="mt-12" detectPartial>
      <Carousel.PrevButton />
      <Carousel.Content class="hide-scrollbar">
        <Card imgSrc="/image/blog-thumb.jpg" class="snap-center" />
        <Card imgSrc="/image/blog-thumb.jpg" class="snap-center" />
        <Card imgSrc="/image/blog-thumb.jpg" class="snap-center" />
        <Card imgSrc="/image/blog-thumb.jpg" class="snap-center" />
      </Carousel.Content>
      <Carousel.NextButton />
    </Carousel.Container>
  )
}
