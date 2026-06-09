import detemiroStrictConfig from 'eslint-config-detemiro/configs/strict.mjs'

export default [
  {
    ignores: ['.commitlintrc.ts', '.prettierrc.js'],
  },
  ...detemiroStrictConfig,
]
