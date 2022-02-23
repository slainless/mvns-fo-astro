import type { FunctionComponent } from 'preact'
import cntl from 'cntl'
import { createSingleton } from '@Functions/jsx-factory'

module Section {
  export const Container = createSingleton('section', {
    class: cntl`container mx-auto px-12`,
  })

  export const Title = createSingleton('h2', {
    class: cntl`section-title text-3xl font-semibold`,
  })
}

export default Section
