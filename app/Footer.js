import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='text-center fixed bottom-0 w-full justify-center flex'>
      <div className='p-2 items-center align-center justify-center text-center'>
        <Link className='hover:scale-50 hover:opacity-60' href="https://www.hookerhillstudios.com">Hooker Hill Studios</Link>
      </div>
    </div>
  )
}

export default Footer