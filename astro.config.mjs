import { parse } from 'acorn'
import { transform } from 'cjs-es'
import react from '@astrojs/react'
import dotenv from 'dotenv'
dotenv.config()

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

if(process.env.PUBLIC_API_ROOT == null) {
  throw new Error('Public API path is empty!')
}