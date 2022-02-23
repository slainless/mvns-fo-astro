// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import { join, resolve } from 'node:path'

const preactCompatPlugin = {
  name: 'preact-compat',
  setup(build) {
    const preact = join(
      process.cwd(),
      'node_modules',
      'preact',
      'compat',
      'dist',
      'compat.module.js'
    )

    build.onResolve({ filter: /^(react-dom|react)$/ }, (args) => {
      return { path: preact }
    })
  },
}

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.


// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable the Preact renderer to support Preact JSX components.
	renderers: ['@astrojs/renderer-preact'],
	vite: {
		optimizeDeps: {
			exclude: ['node:path', 'node:fs', 'node', 'casual', '@fakerjs/faker', 'video.js'],
			esbuildOptions: {
				// plugins: [preactCompatPlugin]
			}
		},
    resolve: {
      alias: {
        // react: 'preact/compat',
        // 'react-dom': 'preact/compat',
        // "@Api": "./src/api",
        // "@Bits": "./src/components/bits",
        // "@Blocks": "./src/components/blocks",
        // "@Elements": "./src/components/elements",
        // "@Functions": "./src/functions",
        // "@Layouts": "./src/layouts",
        // "@Pages": "./src/pages",
        // "@Components": "./src/components",
      }
    }
	}
});
