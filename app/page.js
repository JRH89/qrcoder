"use client"
import ClientHome from './HomePage'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Header />
    <main  className='flex my-auto mx-auto' > 
      <ClientHome /> 
    </main>
    <Footer />
    </div>
  )
}
