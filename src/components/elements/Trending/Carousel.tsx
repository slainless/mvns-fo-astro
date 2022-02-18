import Card from './Card'
import Carousel from '../../blocks/Carousel'

export default function TrendingCarousel() {
  return (
    <Carousel.Container id="trending-container" class="mt-12">
      <Carousel.PrevButton />
      <Carousel.Content class="hide-scrollbar">
        <Card imgSrc="/image/trending-card-1.jpg" class="snap-start" />
        <Card
          imgSrc="/image/trending-card-2.jpg"
          title="Developing Entrepreneurial Mindset"
          subtitle="Chai Li"
          type="Beginner (1 Hour)"
          badgeText="January 2022"
          class="snap-start"
        />
        <Card
          imgSrc="/image/trending-card-2.jpg"
          title="Developing Entrepreneurial Mindset"
          subtitle="Kevin Sanjaya"
          type="Beginner (1 Hour)"
          badgeText="January 2022"
          class="snap-start"
        />
        <Card
          imgSrc="/image/trending-card-2.jpg"
          title="Developing Entrepreneurial Mindset"
          subtitle="Richard Dawkins"
          type="Beginner (1 Hour)"
          badgeText="January 2022"
          class="snap-start"
        />
        <Card imgSrc="/image/trending-card-2.jpg" class="snap-start" />
        <Card imgSrc="/image/trending-card-2.jpg" class="snap-start" />
        <Card imgSrc="/image/trending-card-2.jpg" class="snap-end" />
      </Carousel.Content>
      <Carousel.NextButton />
    </Carousel.Container>
  )
}
