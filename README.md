# Mavens Front-end FO

## State

Uploaded for archival purpose.

It was originally created for the Mavensdotlive project but was later scrapped and migrated to a NextJS project.

This version of the project is using an old beta version (0.x) of Astro.

There were several issues that led to this version of the project being dropped. During mid-development, there were problems (bugs) with the hydration of the components (React) due to the use of SSR and Astro's island pattern. Additionally, the Vite HMR was not working as expected and would always reload the page, making development tedious and slow. There were also issues with the build process, sometimes resulting in permission errors.

It's important to note that these issues were not Astro's fault, but rather a result of the decision to use Astro while it was still in its beta state. With Astro now at version 2, it's likely that these problems have been resolved.

On a side note, the version that using NextJS is completely overhauled, using Stitches as CSS solution instead of tailwind, and built using WorkOS's design system as the base.

---

## Archived...

Build with Astro + React for [mavensdotlive](https://mavens.live).

With enough time & resources, this project can be made dark-mode compatible since it's using `tailwindcss`. [tailwindcss: Dark Mode](https://tailwindcss.com/docs/dark-mode)

This project is using `Prettier` as formatter. It's recommended to use `esbenp.prettier-vscode` extension
from VS Code to format code on save. Settings included in `.vscode`. [Why prettier?](https://prettier.io/docs/en/why-prettier.html)

---

## Tech Stack

- Main & JAMStack Framework: [Astro](https://astro.build)
- Front-end Framework: [React](https://preactjs.com)
- UI Framework: [tailwindcss](https://tailwindcss.com)
- Build Tool: [Vite](https://vitejs.dev/)
- Compiler: [Astro](https://astro.build)
- [Typescript](https://www.typescriptlang.org)

---

## Dependencies

This project depends on:

- **Radix UI** and **Headless UI** for majority of the building blocks of the app
- **Zustand**, to manage state across the app
- **ahooks**, for many hook utilities
- **class-transformer/validator**, to validate or transform data into a structured object (class)
- **tailwind**, for CSS solution

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
