# Mavens Front-end FO

Build with Astro + Preact for [mavensdotlive](https://mavens.live).

~~This project is dark mode compatible ([CSS: @prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)),~~ subject to change. **TURN ON** dark mode for now.
(TODO: revert dark mode to use only dark theme by default)

This project is using `Prettier` as formatter. It's recommended to use `esbenp.prettier-vscode` extension
from VS Code to format code on save. Settings included in `.vscode`. [Why prettier?](https://prettier.io/docs/en/why-prettier.html)

Typescript `strict` mode disabled, allowing contributions with untyped syntax (vanilla/normal JS syntax in TSX/TS)

---

## Stack

- Main & JAMStack Framework: [Astro](https://astro.build)
- Front-end Framework: [Preact](https://preactjs.com)
- UI Framework: [tailwindcss](https://tailwindcss.com)
- Build Tool: [Snowpack](https://www.snowpack.dev)
- Bundler: [esbuild](https://esbuild.github.io), [Vite](https://vitejs.dev)
- Compiler: [Astro](https://astro.build)
- [Typescript](https://www.typescriptlang.org)

This particular stack is selected as the backbone of the project for reasons:

- Faster build time and development using `snowpack + esbuild/vite + @astro/compiler`
- `Astro` supports multiple JS UI Framework
- `Astro` supports [Partial Hydration](https://docs.astro.build/en/core-concepts/component-hydration/)
- `Astro` supports `Typescript`
- `Typescript` is productive, fault-preventive/safe, and scalable in JS project. [AirBnB case](https://www.youtube.com/watch?v=P-J9Eg7hJwE&t=702s)
- `Typescript` for more stricter coding standard and tighter integration with IDE
- `Preact` instead of `React` for smaller bundle size with same functionality
- `tailwindcss` for maximum compatibility with server-side hydration, extensible, while staying native
  (as in native static css since it's processed only at build time with `PostCSS`)

---

## Quick Start

It's pretty straightforward, clone the repo, then:

1. Install the packages, preferably with `yarn`
2. Run `yarn start` to start development, OR
3. Run `yarn build` then serve `./dist` as static site.

---

## Project Structure

```
.
├── dist/
├── docs/
├── node_modules/
├── public/
│   └── image/
├── resources
└── src/
    ├── api/
    ├── functions/
    ├── layouts/
    ├── pages/
    ├── styles/
    └── components/
        ├── bits/
        ├── blocks/
        └── elements/
```

General folders:

- `dist/`: Distribution folder, contains product of static site generation. Can be serve directly, recommended to use `ritwickdey.LiveServer` extension to serve from VS Code directly for development purpose. Config is provided in `.vscode`
- `public/`: Static files which will be copied directly to `dist`
- `resources/`: Resource that is not affecting source code directly, like example components, references, etc.
- `docs/`: General documentation & knowledge base, TBA.

Source folders (`src/`):

- `api/`: Contains DTO contracts, data parser, DTO type definition, etc.
- `functions/`: Contains common core/utility functions
- `layouts/`: Contains common layout for pages
- `pages/`: Contains individual pages
- `styles/`: Contains style-related files
- `components/`: Contains building blocks for the projects
  - `bits/`: Contains small repeatable components
  - `blocks/` Contains bigger (bigger as in bigger scale than bits or composed of multiple bits components) repeatable components
  - `elements`: Contains unique (per page) element, e.g. `Hero.tsx` element should not be used twice on the same page

---

## References

- Astro documentation: [https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/)
- Astro component syntax: [https://docs.astro.build/en/core-concepts/astro-components/](https://docs.astro.build/en/core-concepts/astro-components/)
- Preact: [https://preactjs.com](https://preactjs.com)
- React Hooks documentation: [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
- Astro + Preact template: [https://astro.new/framework-preact?on=stackblitz](https://astro.new/framework-preact?on=stackblitz)
- tailwindcss documentation: [https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)
