import { blogItems } from '@Dev/dummy'
import cntl from 'cntl'
import { merge } from 'lodash-es'
import Item from './Item'

export default function List() {
  return (
    <div
      id="all-blogs"
      className="flex flex-col sm:grid lg:flex grid-cols-2 gap-10"
    >
      {blogItems.map((item) => {
        return (
          <Item
            {...merge<Partial<typeof item>, typeof item>(
              {
                styleOverrides: {
                  container: cntl`flex lg:flex-row gap-5 lg:gap-10 pb-10 border-b-2 last:border-b-0 sm:last:border-b-2`,
                  content: cntl`lg:w-2/3 pr-0 lg:pr-10`,
                  background: {
                    container: cntl`h-1/4 lg:w-1/3 flex-grow`,
                  },
                  title: cntl`order-2`,
                  tags: { container: cntl`order-1` },
                  desc: cntl`order-3`,
                  info: {
                    container: cntl`order-4`,
                  },
                },
                ratio: 16 / 12,
              },
              item
            )}
          />
        )
      })}
    </div>
  )
}
