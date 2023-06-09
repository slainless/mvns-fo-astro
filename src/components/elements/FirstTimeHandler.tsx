import { useAuthUserStore } from '@Api/user'
import { useEffect, useLayoutEffect } from 'react'

export default function FirstTimeHandler() {
  const user = useAuthUserStore((state) => state.user)
  useEffect(() => {
    if (user == null) return
    const firstTime = user.student_interest.length === 0
    const url = new URL(window.location.href)
    if (
      firstTime &&
      ['/first-time', '/first-time/'].includes(url.pathname) == false
    )
      window.location.href = '/first-time'
  }, [user])

  return <></>
}
