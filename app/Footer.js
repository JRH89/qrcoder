import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='text-center absolute bottom-0 w-full justify-center flex'>
      <div className='mt-4 border-t w-full border-solid border-white mx-auto my-auto items-center align-center justify-center text-center'>
        <Link className='hover:scale-50 hover:opacity-60' href="https://jaredsportfolio.netlify.app">Hooker Hill Studios © 2023</Link>
      </div>
    </div>
  )
}

export default Footer