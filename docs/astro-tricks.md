# Astro Tricks

## How to setup alias

**Motivation:**

To shorten import path or just aliasing module

**Solution:**

Astro will read `tsconfig.json: compilerOptions.paths` and merge it to it's build system alias so path alias setup is much easier since we only set it up once.

Example:

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@Api/*": ["src/api/*"],
      "@Bits/*": ["src/components/bits/*"],
      "@Blocks/*": ["src/components/blocks/*"],
      "@Elements/*": ["src/components/elements/*"],
      "@Functions/*": ["src/functions/*"],
      "@Layouts/*": ["src/layouts/*"],
      "@Pages/*": ["src/pages/*"],
      "@Components/*": ["src/components/*"],
      "react": ["node_modules/preact/compat/dist/compat.module.js"],
      "react-dom": ["node_modules/preact/compat/dist/compat.module.js"]
    }
  }
}
```

## How to render on browser conditionally and setting up placeholder for static build

**Motivation:**

Sometimes, a component need to be interactive on client-side and also depends on client-side API, while also visible to search engine crawler. Meaning:

- We need to render the default state of the component on server side to satisfy web crawler from search engine
- But we also need the component to be interactive and depends on browser's API and later on will be mutated by our DOM framework (React, Vue, etc.)

Visual example:

- We tell the web crawler that our default navigation is

```html
<nav>
  <!-- This is default navigation -->
  <a>Become Instructor</a>
  <a>For Business</a>
  <a>Log in</a>
  <a>Register</a>
</nav>
```

- On browser instead, those default navigation will be mutated into other form based on state.
  For example, navigation will mutate based on user's role:

```html
<nav>
  <!-- This is student navigation -->
  <a>Cart</a>
  <a>My Learning</a>
  <a>Wishlist</a>
  <a>Log Out</a>
</nav>
```

**Scenario**:

- Component is called with directives other than `client:only`
- Component's default state needs to be rendered on build time
- Component will be mutated on browser (client-side)
- (Optional) Component need to access browser API

**Solution**:

- Set up environment detector. Read: [Environment detection: node.js or browser](https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser)

```ts
const isBrowser: boolean = new Function(`
  try {
    return this === window
  } catch(e) { 
    return false
  }
`)()
```

- Convert it to modules & singleton
- On client-side rendered component, return early for non-browser. For example:

```tsx
import isBrowser from '...'

export default function Navigation() {
  /* return early for non-browser */
  if (!isBrowser) return <span>this is the default value</span>

  /* client side code here */
  // notice that we call localStorage here which is not available for node environment
  // it will throw error if not for our return early logic above
  const [test, setTest] = useState<string | null>(localStorage.getItem('test'))
  return <span>{test}<span>
}
```
