# Mavens Front-end FO

Build with Astro + Preact for [mavensdotlive](https://mavens.live).

This project is dark mode compatible ([CSS: @prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)). **TURN ON** dark mode, light mode is second class.
(TODO: reverting dark mode, using only dark theme on default)

This project is using `Prettier` as formatter. It's recommended to use `esbenp.prettier-vscode` extension
from VS Code to format code on save. Settings included in `.vscode`.

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
- `tailwindcss` for maximum compatibility with server-side hydration, extensibile, while staying native
  (as in native static css since it's processed only at build time with `PostCSS`)

NB:
_UI Framework used is still subject to change_

---

## Quick Start

It's pretty straightforward, clone the repo, then:

1. Install the packages, preferably with `yarn`
2. Run `yarn start` to start development, OR
3. Run `yarn build` then serve `./dist` as static site.

---

## References

- Astro documentation: [https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/)
- Astro component syntax: [https://docs.astro.build/en/core-concepts/astro-components/](https://docs.astro.build/en/core-concepts/astro-components/)
- Preact: [https://preactjs.com](https://preactjs.com)
- React Hooks documentation: [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
- Astro + Preact template: [https://astro.new/framework-preact?on=stackblitz](https://astro.new/framework-preact?on=stackblitz)
- tailwindcss documentation: [https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)
