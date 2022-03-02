export default function Search() {
  return (
    <div className="hidden lg:flex justify-center items-center">
      <fieldset className="dark:bg-zinc-900 w-max rounded-full flex py-1.5 px-1.5 text-sm gap-2 shadow-lg">
        <input
          className="bg-transparent w-52 pl-2 placeholder:text-zinc-500 text-sm leading-none"
          placeholder="Start Your Search"
          id="search-input"
        ></input>
        <button
          id="search-submit-button"
          className="flex bg-red-500 rounded-full w-6 h-6 justify-center items-center"
        >
          <span className="material-icons-outlined !text-base">search</span>
        </button>
      </fieldset>
    </div>
  )
}
