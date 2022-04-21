import { parse } from 'acorn'
import { transform } from 'cjs-es'
import react from '@astrojs/react'
import postcss from './postcss.config.mjs'

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
	integrations: [react()],
  buildOptions: {
    site: 'https://mavens.upanastudio.com/'
  },
	vite: {
    plugins: [
      {
        name: 'cjs-to-esm',
        async transform(code, id) {
          if(/\.cjs$/.test(id)) {
            const { code: result } = await transform({ code, parse })
            return result
          }
          return code
        }
      }
    ],
		optimizeDeps: {
			exclude: ['video.js'],
			esbuildOptions: {
				plugins: [
        ]
			}
		},
    resolve: {
      alias: {
      }
    }
	}
});
