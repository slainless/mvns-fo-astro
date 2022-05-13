import { useCourseStore } from '@Api/course'
import { useEffect } from 'react'

export default function GetCourse() {
  const getCourse = useCourseStore((state) => state.getCourse)
  useEffect(() => {
    const params = new URL(window.location.href).searchParams
    const id = params.get('id')
    if (id != null) getCourse(id)
  }, [])
  return <></>
}
