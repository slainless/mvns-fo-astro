import { useSearchStore } from '@Api/search'
import Section from '@Blocks/Section'
import isBrowser from '@Functions/isBrowser'
import { twMerge } from 'tailwind-merge'
import shallow from 'zustand/shallow'

export default function Input() {
  const [result, loading] = useSearchStore(
    (state) => [state.result, state.loading],
    shallow
  )
  const query = isBrowser
    ? new URLSearchParams(window.location.search).get('q')
    : '...'
  const length =
    (result?.blogs.length ?? 0) +
    (result?.courses.length ?? 0) +
    (result?.instructor.length ?? 0)
  return (
    <Section.Container id="input-container">
      <Section.Content className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Search</h1>
        <h2
          className={twMerge(
            !isBrowser || loading
              ? 'h-7 w-64 skeleton-zinc-dark'
              : 'text-xl font-bold'
          )}
        >
          {length} <span className="font-normal">search results for</span> "
          {query ?? '...'}"
        </h2>
        {/* <div className="flex gap-3">
          <input
            id="search-input"
            placeholder="I'm looking for ..."
            className="bg-transparent border-b-2 border-white min-w-[48rem] text-2xl py-2 px-5"
          ></input>
          <button className="bg-red-500 rounded-md text-white py-2 px-7 tracking-widest font-light uppercase text-xs">
            Search
          </button>
        </div> */}
      </Section.Content>
    </Section.Container>
  )
}
