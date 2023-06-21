import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='text-center fixed bottom-0 w-full justify-center flex'>
      <div className='border-t p-2 border-solid border-white  items-center align-center justify-center text-center'>
        <Link className='hover:scale-50 hover:opacity-60' href="https://hooker-hill-studios.vercel.app.app">Hooker Hill Studios © 2023</Link>
      </div>
    </div>
  )
}

export default Footer