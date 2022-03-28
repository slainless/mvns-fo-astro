import { Icon, Common as Button } from '@Bits/Button'
import { Input } from '@Blocks/Form'
import { cartItems } from '@Dev/dummy'
import { omit } from 'lodash-es'
import { useMemo } from 'react'
import { Column, useTable } from 'react-table'
import { twMerge } from 'tailwind-merge'
import cntl from 'cntl'

type Item = {
  product?: {
    img: string
    name: string
  }
  price?: string
  quantity?: number
  subtotal?: string
}

export default function Table() {
  const data: Item[] = useMemo(() => cartItems, [])

  const columns: Column<Item>[] = useMemo(
    () => [
      {
        Header: () => null,
        accessor: (row) => <img src={row.product?.img} className="w-32" />,
        id: 'image', // accessor is the "key" in the data,
      },
      {
        Header: 'Product',
        accessor: (row) => row.product?.name,
        id: 'product', // accessor is the "key" in the data
      },
      {
        Header: 'Price',
        accessor: (row) => row.price,
        id: 'price', // accessor is the "key" in the data
      },
      {
        Header: 'Quantity',
        accessor: (row) => row.quantity,
        id: 'quantity', // accessor is the "key" in the data
      },
      {
        Header: 'Subtotal',
        accessor: (row) => row.subtotal,
        id: 'subtotal', // accessor is the "key" in the data
      },
      {
        Header: () => null,
        accessor: (row) => (
          <div className="flex flex-row gap-1 w-full justify-center">
            <Icon
              icon="close"
              className="transition-colors w-6 h-6 rounded-full flex items-center justify-center text-red-600 border-2 border-red-600 text-base hover:bg-red-600 hover:text-white"
            />
          </div>
        ),
        id: 'actions', // accessor is the "key" in the data
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    rows,
    prepareRow,
    ...rest
  } = useTable({ columns, data })

  return (
    <div className="w-full border-2 border-white/10 rounded-lg">
      <table className="w-full border-inherit" {...getTableProps()}>
        <thead className="border-inherit">
          {headerGroups.map((headerGroup) => (
            <tr
              className="border-white/30"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => {
                const { className, ...rest } = column.getHeaderProps()
                return (
                  <th
                    className={twMerge(
                      'border-b-2 border-inherit py-5 px-2 font-heading',
                      column.id == 'image' ? 'w-32' : '',
                      column.id == 'quantity' ? 'w-32' : '',
                      column.id == 'price' ? 'w-32' : '',
                      column.id == 'subtotal' ? 'w-32' : '',
                      className
                    )}
                    {...rest}
                  >
                    {column.render('Header')}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody className="border-inherit" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr
                className="border-inherit border-b-2 last-of-type:border-b-0"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td
                    className="border-r-2 last-of-type:border-r-0 py-3 px-3 w-max border-inherit"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
        <tfoot className="border-white/30">
          <tr className="border-inherit border-t-2">
            <td
              colSpan={rest.allColumns.length - 3}
              className="border-inherit border-r-2 py-5 px-5"
            ></td>
            <td className="border-inherit py-5 px-2 text-center font-heading font-bold">
              Total
            </td>
            <td colSpan={2} className="py-5 text-center font-bold">
              $248.25
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
