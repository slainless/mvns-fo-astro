import { Icon } from '@Bits/Button'
import isBrowser from '@Functions/isBrowser'

const SEARCH_PAGE_PATH = '/search'
export default function Search() {
  return (
    <div className="hidden lg:flex justify-center items-center">
      <form
        className="bg-zinc-800 w-max rounded-full flex items-center pr-1.5 text-sm gap-2 shadow-lg"
        name="search"
        action={SEARCH_PAGE_PATH}
        method="get"
      >
        <input
          className={`
            appearance-none
            transition-all 
            bg-zinc-900
            focus:bg-zinc-900
            placeholder-shown:bg-transparent w-52 px-3 py-1.5

            placeholder:text-zinc-500
            text-sm leading-none font-heading 

            rounded-full
            focus:ring-2 focus:ring-white/40
            outline-none

            autofill:bg-zinc-900

          `}
          placeholder="Start Your Search"
          id="search-input"
          name="q"
          autoComplete="search-mavens"
          defaultValue={
            isBrowser
              ? window.location.pathname === SEARCH_PAGE_PATH
                ? new URLSearchParams(window.location.search).get('q') ?? ''
                : ''
              : ''
          }
        ></input>
        <Icon
          icon="search"
          type="submit"
          className={`
            w-6 h-6 bg-red-600 
            flex text-base items-center justify-center 
            rounded-full

            transition-all

            hover:bg-red-700 hover:shadow-md hover:ring-2 hover:ring-red-500/20
          `}
        />
      </form>
    </div>
  )
}
