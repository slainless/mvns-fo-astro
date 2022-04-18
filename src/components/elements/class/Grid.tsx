import { Common as Card } from '@Blocks/Card'
import cntl from 'cntl'
import { slimCard as Items } from '@Dev/dummy'

export default function Grid() {
  return (
    <div
      id="classes-grid"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8"
    >
      {Items.slice(0, 8).map((item, key) => (
        <Card
          key={key}
          {...item}
          styleOverrides={{
            card: {
              container: cntl`h-[18rem] sm:h-[24rem] md:h-[24rem] lg:h-[28rem] overflow-visible`,
              overlay: cntl`scale-100 group-hover:scale-[1.05] transition-all rounded-md`,
              background: cntl`scale-100 group-hover:scale-[1.05] transition-all rounded-md`,
            },
          }}
        ></Card>
      ))}
    </div>
  )
}
