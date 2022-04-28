import { useBlogStore } from '@Api/blog'
import { useEffect } from 'react'

export default function BlogGetArticle() {
  const getArticle = useBlogStore((state) => state.getArticle)
  useEffect(() => {
    const params = new URL(window.location.href).searchParams
    const id = params.get('id')
    if (id != null) getArticle(id)
  }, [])
  return <></>
}
