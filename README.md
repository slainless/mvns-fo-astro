# Mavens Front-end FO

Build with Astro + React for [mavensdotlive](https://mavens.live).

With enough time & resources, this project can be made dark-mode compatible since it's using `tailwindcss`. [tailwindcss: Dark Mode](https://tailwindcss.com/docs/dark-mode)

This project is using `Prettier` as formatter. It's recommended to use `esbenp.prettier-vscode` extension
from VS Code to format code on save. Settings included in `.vscode`. [Why prettier?](https://prettier.io/docs/en/why-prettier.html)

---

## Stack

- Main & JAMStack Framework: [Astro](https://astro.build)
- Front-end Framework: [React](https://preactjs.com)
- UI Framework: [tailwindcss](https://tailwindcss.com)
- Build Tool: [Vite](https://vitejs.dev/)
- Compiler: [Astro](https://astro.build)
- [Typescript](https://www.typescriptlang.org)

This particular stack is selected as the backbone of the project for reasons:

- Faster build time and development using `vite` build tool compared to other frameworks which are still using slower tool (`webpack`)
- `Astro` supports multiple JS UI Framework
- `Astro` supports [Partial Hydration](https://docs.astro.build/en/core-concepts/component-hydration/)
- `Astro` supports `Typescript`
- `Typescript` is productive, fault-preventive/safe, and scalable in JS project. [AirBnB case](https://www.youtube.com/watch?v=P-J9Eg7hJwE&t=702s)
- `Typescript` for more stricter coding standard and tighter integration with IDE
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
│   └── media/
├── resources
└── src/
    ├── api/
    ├── classes/
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

- `api/`: Contains API-specific functions
- `classes/`: Contains type, classes, definition. Mainly for API's DTO classes.
- `functions/`: Contains common core/utility functions
- `layouts/`: Contains common layout for pages
- `pages/`: Contains individual pages
- `styles/`: Contains style-related files
- `components/`: Contains building blocks for the projects
  - `bits/`: Contains small repeatable components
  - `blocks/` Contains bigger (bigger as in bigger scale than bits or composed of multiple bits components) repeatable components
  - `elements`: To be determined. For now, contains page-specific element & repeatable final elements

---

## References

- Astro documentation: [https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/)
- Astro component syntax: [https://docs.astro.build/en/core-concepts/astro-components/](https://docs.astro.build/en/core-concepts/astro-components/)
- React Hooks documentation: [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
- tailwindcss documentation: [https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)
