import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
      <div className='text-center w-full justify-center flex'>
        <div className='mt-4 border-t w-full border-solid border-white absolute mx-auto my-auto items-center align-center justify-center text-center bottom-0'>
          <Link className='hover:scale-50 hover:opacity-60' href="https://jaredsportfolio.netlify.app">Hooker Hill Studios © 2023</Link>
        </div>
      </div>
  )
}

export default Footer