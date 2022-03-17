import { Common as Card } from '@Blocks/Card'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import { slimCard as Items } from '@Dev/dummy'

export default function Suggestion() {
  return (
    <CardView
      id="class-suggestion"
      swiperOptions={{
        rewind: true,
      }}
      classes={Items}
      title="Class viewed by others"
      styleOverrides={{
        section: {
          container: cntl`mt-24`,
        },
      }}
    />
  )
}
