import Section from '@Blocks/Section'

export default function Input() {
  return (
    <Section.Container id="input-container">
      <Section.Content className="flex flex-col gap-12">
        <h1 className="text-3xl">Search result for:</h1>
        <div className="flex gap-3">
          <input
            id="search-input"
            placeholder="I'm looking for ..."
            className="bg-transparent border-b-2 border-white min-w-[48rem] text-2xl py-2 px-5"
          ></input>
          <button className="bg-red-500 rounded-md text-white py-2 px-7 tracking-widest font-light uppercase text-xs">
            Search
          </button>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
