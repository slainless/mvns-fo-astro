import Button from './Button'
import Dialog, { OptionalProps } from './Dialog'
import { DateObj, useDayzed } from 'dayzed'
import { useState } from 'react'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

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

export default function ClassDate(props: OptionalProps) {
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
    monthsToDisplay: 2,
  })

  const startTime = selected[0]?.date.getTime()
  const endTime = selected[1]?.date.getTime()

  return (
    <Dialog
      {...props}
      title="Class Date"
      trigger={<Button>Class Date</Button>}
      className="grid grid-cols-2 gap-y-5 gap-x-10 text-center"
      styleOverrides={{
        card: cntl`max-w-3xl`,
      }}
      onReset={() => setSelected([])}
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
