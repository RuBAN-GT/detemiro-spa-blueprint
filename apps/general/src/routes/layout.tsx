import type { ReactElement } from 'react'

import { Outlet } from '@modern-js/runtime/router'

const Layout = (): ReactElement => (
  <>
    <Outlet />
  </>
)

export default Layout
