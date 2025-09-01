import React from 'react'
import Header from '@/components/application/Header'
import Footer from '@/components/application/Footer'
const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout