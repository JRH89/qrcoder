"use client"
import ClientHome, {clientHome} from './HomePage'
import React from 'react'


export default function Page() {
  return (
    <main className="mx-auto flex my-auto flex-col items-center justify-between">
      <div className='my-auto mx-auto flex-col text-center justify-center place-items-center align-center'>
        <ClientHome />
      </div>
    </main>
  )
}
