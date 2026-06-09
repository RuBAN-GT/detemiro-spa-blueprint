import { appTools, defineConfig } from '@modern-js/app-tools'
import { bffPlugin } from '@modern-js/plugin-bff'

export default defineConfig({
  plugins: [appTools(), bffPlugin()],
  output: {
    cssModules: {
      auto: (resource) => {
        const isNodeModules = resource.includes('node_modules')
        return !isNodeModules
      },
    },
  },
  source: {
    globalVars: {
      'process.env.NODE_ENV': process.env.NODE_ENV === 'production' || process.env.DYNO ? 'production' : 'development',
    },
  },
})
