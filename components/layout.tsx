import React from 'react'

import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased">
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
