import { blogItems } from '@Dev/dummy'
import cntl from 'cntl'
import { merge } from 'lodash-es'
import Item from './Item'

export default function List() {
  return (
    <div id="all-blogs" className="flex flex-col gap-10">
      {blogItems.map((item) => {
        return (
          <Item
            {...merge<Partial<typeof item>, typeof item>(
              {
                styleOverrides: {
                  container: cntl`flex flex-row gap-10`,
                  content: cntl`w-2/3`,
                  background: {
                    container: cntl`w-1/3 flex-grow`,
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
