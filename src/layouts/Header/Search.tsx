export default function Search() {
  return (
    <div class="flex justify-center items-center">
      <fieldset class="bg-zinc-800 w-max rounded-full flex py-1.5 px-1.5 text-sm gap-2 shadow-lg">
        <input
          class="bg-transparent pl-2 placeholder:text-zinc-500 text-sm"
          placeholder="Start Your Search"
        ></input>
        <button class="flex bg-red-500 rounded-full w-6 h-6 justify-center items-center">
          <span class="material-icons-outlined !text-base">search</span>
        </button>
      </fieldset>
    </div>
  )
}
