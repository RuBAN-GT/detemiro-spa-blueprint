import type { ReactElement } from 'react'

import { Helmet } from '@modern-js/runtime/head'

const Index = (): ReactElement => (
  <div>
    <Helmet>
      <title>Index Page</title>
    </Helmet>
    Hello World!
  </div>
)

export default Index
