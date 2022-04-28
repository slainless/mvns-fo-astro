import BlogAPI, { useBlogStore } from '@Api/blog'
// import { useRequest } from 'ahooks'
// import { useEffect } from 'react'
// import ReactMarkdown from 'react-markdown'
// import HTMLParser from 'react-html-parser'

export default function Article() {
  const article = useBlogStore((state) => state.article)

  // return <div>{HTMLParser(article?.content ?? '')}</div>
  return <>{article?.content}</>
}
