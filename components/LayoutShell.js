'use client'

import { usePathname } from 'next/navigation'
import Nav from './Nav'

export default function LayoutShell({ children }) {
  const pathname = usePathname()
  const isAuth = pathname === '/auth'

  if (isAuth) {
    return (
      <>
        <main>{children}</main>
      </>
    )
  }

  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer>
        <div className="container">
          <p>&copy; 2023 ArtHire & Sell. สงวนลิขสิทธิ์.</p>
        </div>
      </footer>
    </>
  )
}
