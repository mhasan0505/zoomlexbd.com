"use client"
import Footer from '@/components/application/Footer'
import Header from '@/components/application/Header'
import React from 'react'

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