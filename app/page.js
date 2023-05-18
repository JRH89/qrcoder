"use client"
import ClientHome from './HomePage'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Page() {
  return (
    <div className='flex flex-col place-items-center justify-center'>
    <Header />
    <main  className='flex my-auto mx-auto place-items-center items-center align-middle' > 
      <ClientHome /> 
    </main>
    <Footer />
    </div>
  )
}
