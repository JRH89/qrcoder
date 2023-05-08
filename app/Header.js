import React from 'react'

function Header() {
    return (
      <div className='font-extrabold flex flex-col justify-center text-center pr-5 pl-5'>
  
    <h1 className='text-3xl underline top-0 flex flex-col text-center mx-auto my-auto'>
          Welcome to QR Coder
        </h1>
        <h2 className=' mt-2 text-xl'>
          Turn any text or url into a <br></br> QR Code!!!
        </h2>
      </div>
  )
}

export default Header