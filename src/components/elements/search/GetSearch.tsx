import { useSearchStore } from '@Api/search'
import { useEffect } from 'react'

export default function GetCourse() {
  const search = useSearchStore((state) => state.search)
  useEffect(() => {
    const params = new URL(window.location.href).searchParams
    const q = params.get('q')
    if (q != null) search(q)
  }, [])
  return <></>
}
