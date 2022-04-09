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
  price?: number
  quantity?: number
  subtotal?: number
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
        accessor: (row) => (
          <span className="tracking-wider">
            ${row.price}
            <br />
            <span className="inline md:hidden text-white/30 text-sm">
              x&nbsp;<span className="text-white">{row.quantity}</span>
              pcs
            </span>
          </span>
        ),
        id: 'price', // accessor is the "key" in the data
      },
      {
        Header: 'Qty',
        accessor: (row) => (
          <span className="px-2 py-0.5 rounded-md border-2 font-mono bg-white/5 border-white/10">
            {row.quantity}
          </span>
        ),
        id: 'quantity', // accessor is the "key" in the data
      },
      {
        Header: 'Subtotal',
        accessor: (row) => (
          <span className="tracking-wider">${row.subtotal}</span>
        ),
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
      <table
        id="cart-view"
        className="hidden sm:table w-full border-inherit"
        {...getTableProps()}
      >
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
                      'border-b-2 border-inherit py-5 px-2 font-heading w-max',
                      column.id == 'image' ? 'w-20 md:w-24' : '',
                      column.id == 'product' ? '' : '',
                      column.id == 'quantity'
                        ? 'w-0 hidden md:table-cell md:w-12'
                        : '',
                      column.id == 'price' ? 'w-0 sm:w-24' : '',
                      column.id == 'subtotal' ? 'w-0 sm:w-24' : '',
                      column.id == 'actions' ? 'w-0' : '',
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
                    className={twMerge(
                      'border-r-2 last-of-type:border-r-0 py-3 px-3 w-max border-inherit',
                      cell.column.id == 'quantity' ? 'hidden md:table-cell' : ''
                    )}
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
              colSpan={rest.allColumns.length - 4}
              className="border-inherit border-r-2 py-5 px-5"
            ></td>
            <td className="border-inherit py-5 px-2 text-center font-heading font-bold">
              Total
            </td>
            <td
              colSpan={3}
              className="py-5 text-center font-bold tracking-wider"
            >
              $
              {cartItems
                .map((i) => i.subtotal)
                .reduce((a, b) => (a ?? 0) + (b ?? 0))}
            </td>
          </tr>
        </tfoot>
      </table>
      <div id="alt-cart-view" className="flex flex-col sm:hidden">
        <div
          id="alt-header"
          className="border-b-2 py-3 w-full px-2 font-heading border-white/20 text-lg text-center font-bold"
        >
          Products
        </div>
        <div>
          {cartItems.map((item) => {
            return (
              <div className="border-b-2 last:border-b-0 border-white/10 px-2 py-2 flex flex-col gap-1">
                <div className="flex gap-2 xs:gap-5">
                  <div className="w-32 ">
                    <img className="w-full h-auto" src={item.product?.img} />
                  </div>
                  <div className="product-name xs:text-lg">
                    {item.product?.name}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="product-price text-neutral-300 text-sm">
                    <span className="text-neutral-500">Price: </span>
                    <span className="tracking-wider">${item.price}</span>
                  </div>
                  <div className="product-quantity text-neutral-500 font-mono">
                    x&nbsp;
                    <span className="px-1.5 py-0.5 rounded-md border-2 bg-white/5 text-neutral-300 border-white/10 text-xs">
                      {item.quantity}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="product-subtotal text-neutral-300 text-sm">
                    <span className="text-neutral-500">Subtotal: </span>
                    <span className="tracking-wider">
                      ${(item.price ?? 0) * (item.quantity ?? 0)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
