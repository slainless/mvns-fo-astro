# Mavens Front-end FO

Build with Astro + Preact for [mavens.live](mavens.live)

---
## Stack

* Main & SSG Framework: [Astro](https://astro.build)
* Front-end Framework: [Preact](https://preactjs.com)
* UI Framework: [MUI](https://mui.com)
* Build Tool: [Snowpack](https://www.snowpack.dev)
* Bundler: [esbuild](https://esbuild.github.io)
* Compiler: [Astro](https://astro.build)
* [Typescript](https://www.typescriptlang.org)


This particular stack is selected as the backbone of the project for reasons:

* Faster build time using `snowpack + esbuild + @astro/compiler`
* `Astro` supports multiple JS UI Framework
* `Astro` supports [Partial Hydration](https://docs.astro.build/en/core-concepts/component-hydration/)
* `Astro` supports `Typescript`
* `Typescript` is productive, fault-preventive/safe, and scalable in JS project. [AirBnB case](https://www.youtube.com/watch?v=P-J9Eg7hJwE&t=702s)
* `Typescript` for more stricter coding standard and tighter integration with IDE
* `Preact` instead of `React` for smaller bundle size with same functionality
* `MUI` for robust and costumizable UI framework based on `emotion`/`styled-component`

NB:
*UI Framework used is still subject to change*

---
## Quick Start

1. Install the packages, preferably with `yarn`
2. Run `yarn build` to build or `yarn start` to start development

---
## References

* Astro documentation: [https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/)
* Astro component syntax: [https://docs.astro.build/en/core-concepts/astro-components/](https://docs.astro.build/en/core-concepts/astro-components/)
* Preact: [https://preactjs.com](https://preactjs.com)
* React Hooks documentation: [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
* Astro + Preact template: [https://astro.new/framework-preact?on=stackblitz](https://astro.new/framework-preact?on=stackblitz)
* MUI documentation: [https://mui.com/getting-started/installation/](https://mui.com/getting-started/installation/)