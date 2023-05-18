"use client"
import ClientHome from './HomePage'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen place-items-center justify-center'>
    <Header />
    <main  className='flex flex-col justify-center place-items-center items-center align-middle' > 
      <ClientHome /> 
    </main>
    <Footer />
    </div>
  )
}
