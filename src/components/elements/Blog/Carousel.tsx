import Carousel from '@Blocks/Carousel'
import Card from './Card'

export default function BlogCarousel() {
  return (
    <Carousel.Container id="blog-container" class="mt-12" detectPartial>
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
