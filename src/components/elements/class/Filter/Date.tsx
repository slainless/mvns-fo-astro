import { Common as Button } from '@Bits/Button'
import TriggerButton from './Button'
import { DateObj, useDayzed } from 'dayzed'
import { useEffect, useState } from 'react'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
import Dialog, { OptionalProps } from '@Blocks/Dialog'
import { useBreakpoint } from '@Functions/tailwind'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function DialogFooter() {
  return (
    <div className="filter-footer justify-between flex gap-10 items-center px-4 py-4 border-t-[1px] ">
      <Button
        className="border-transparent hover:translate-y-0 underline underline-offset-2 font-bold hover:bg-red-600 hover:shadow-red-600/30"
        onClick={() => {}}
      >
        Reset
      </Button>
      <Button className="hover:translate-y-0 bg-black border-black hover:text-white hover:bg-red-600 hover:border-red-600 text-white hover:shadow-red-600/30">
        Filter
      </Button>
    </div>
  )
}

export default function ClassDate(props: OptionalProps) {
  const isDesktop = useBreakpoint('md')
  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [])

  const [selected, setSelected] = useState<DateObj[]>([])
  const { calendars, getBackProps, getDateProps, getForwardProps } = useDayzed({
    selected: selected.map((obj) => obj.date),
    onDateSelected: (neo) => {
      if (selected.length === 0) setSelected([neo])
      else if (selected.length === 1) {
        setSelected((old) => {
          const oldTime = old[0].date.getTime()
          const newTime = neo.date.getTime()

          if (oldTime > newTime) return [neo]
          else if (oldTime === newTime) return [neo, neo]
          return [old[0], neo]
        })
      } else {
        setSelected((old) => {
          const startTime = old[0].date.getTime()
          const endTime = old[1].date.getTime()
          const newTime = neo.date.getTime()

          if (newTime > endTime || (newTime < endTime && newTime > startTime))
            return [old[0], neo]
          else if (newTime === startTime) return [old[0], old[0]]
          else if (newTime < startTime) return [neo]
          return old
        })
      }
    },
    monthsToDisplay: isDesktop ? 2 : 1,
  })

  const startTime = selected[0]?.date.getTime()
  const endTime = selected[1]?.date.getTime()

  return (
    <Dialog
      {...props}
      title="Class Date"
      trigger={<TriggerButton>Class Date</TriggerButton>}
      className="grid md:grid-cols-2 gap-y-5 gap-x-10 text-center"
      styleOverrides={{
        card: cntl`w-screen xs:w-max md:max-w-3xl p-0 sm:p-0 rounded-lg rounded-b-none xs:rounded-2xl animate-enter-slide-up sm:animate-enter-scaled-up`,
        content: cntl`px-5 xs:px-5 sm:px-8 xs:py-4 sm:py-4`,
        overlay: cntl`items-end sm:items-center overflow-hidden`,
        title: cntl`pl-5 sm:pl-8 pt-5 sm:pt-8`,
      }}
      onReset={() => setSelected([])}
      footer={<DialogFooter />}
    >
      <div id="calendar-header" className="contents">
        {calendars.map((calendar, index) => {
          return (
            <div className="relative">
              {index === 0 ? (
                <button
                  className="absolute left-0 text-lg"
                  {...getBackProps({ calendars })}
                >
                  <span className="material-icons-outlined">
                    navigate_before
                  </span>
                </button>
              ) : (
                <></>
              )}
              <span key={index}>{`${monthNames[calendar.month]} ${
                calendar.year
              }`}</span>
              {index === calendars.length - 1 ? (
                <button
                  className="absolute right-0 text-lg"
                  {...getForwardProps({ calendars })}
                >
                  <span className="material-icons-outlined">navigate_next</span>
                </button>
              ) : (
                <></>
              )}
            </div>
          )
        })}
      </div>
      <div className="contents">
        {calendars.map((calendar) => (
          <div
            className="calendar flex flex-col gap-5 max-content"
            key={`${calendar.month}${calendar.year}`}
          >
            <div className="weekdays grid grid-cols-7 text-xs gap-1 text-center font-mono">
              {weekdayNamesShort.map((weekday) => (
                <div key={`${calendar.month}${calendar.year}${weekday}`}>
                  {weekday}
                </div>
              ))}
            </div>
            <div className="days grid grid-cols-7 gap-1 text-sm text-center">
              {calendar.weeks.map((week, weekIndex) => {
                return week.map((dateObj, index) => {
                  const key = `${calendar.month}${calendar.year}${weekIndex}${index}`
                  if (dateObj === '') return <span key={key}></span>

                  const {
                    date,
                    selected: isSelected,
                    selectable: isSelectable,
                    today: isToday,
                  } = dateObj
                  const time = date.getTime()
                  const isInRange =
                    selected.length === 2 && startTime < time && time < endTime

                  return (
                    <button
                      key={key}
                      {...getDateProps({ dateObj })}
                      className={twMerge(
                        `
                        hover:bg-red-500 hover:text-white 
                        rounded-lg flex items-center justify-center w-10 h-10
                        `,
                        isToday ? 'font-bold' : '',
                        isSelected ? 'bg-red-400 text-white' : '',
                        isInRange ? 'bg-red-50 text-red-900' : ''
                      )}
                    >
                      {isSelectable ? date.getDate() : 'X'}
                    </button>
                  )
                })
              })}
            </div>
          </div>
        ))}
      </div>
    </Dialog>
  )
}
