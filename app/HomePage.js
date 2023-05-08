import React, { useState } from 'react'
import Image from 'next/image'
import QRious from 'qrious'
import Header from './Header'
import Footer from './Footer'

function Home() {
  const [inputValue, setInputValue] = useState('')
  const [inputType, setInputType] = useState('url')
  const [qrCodeUrl, setQrCodeUrl] = useState('')
 

  const handleSubmit = (event) => {
    event.preventDefault()
    let qrValue

    if (inputType === 'url' || inputType === 'text') {
      qrValue = inputValue
    }
      
    // Generate QR code based on input value and type
    const qr = new QRious({
      value: qrValue,
      size: 256,
        level: 'H',
      padding: null,
    })
    setQrCodeUrl(qr.toDataURL());

    // Clear input value and image file
    setInputValue('')
   
  }

  return (
    <div className="flex-col pt-2">
      <Header />
      <main className="mx-auto my-auto place-items-center flex-col items-center justify-between">
        <div className='flex-col text-center justify-center'>
          <div className='mx-auto my-auto mt-5 flex align-middle flex-col items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col text-center justify-center'>
              <label className='justify-center align-middle items-centertext-xl mb-2'>ENTER:</label>
              <div className="justify-center pl-2 flex flex-row align-middle place-items-center mb-4">
                <label className="flex justify-center text-center items-center align-middle mr-4">
                  <input className='justify-center text-center items-center' type="radio" name="inputType" value="url" checked={inputType === 'url'} onChange={() => setInputType('url')} />
                  URL
                </label>
                <label className="justify-center flex align-middle text-center items-center mr-4">
                  <input type="radio" name="inputType" value="text" checked={inputType === 'text'} onChange={() => setInputType('text')} />
                  Text
                </label>
                
              </div>
              {inputType !== 'image' && (
                <input className='rounded-md max-w-[60ch] flex flex-col justify-center align-center items-center text-black text-center' type='any' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
              )}
              {inputType === 'image' && (
                <input className='rounded-md max-w-[60ch] flex flex-col justify-center align-center items-center text-black text-center' type='file' onChange={handleFileChange} />
              )}
              <button className='mb-4 border border-solid border-white rounded-md mt-4' type='submit'>CREATE</button>
            </form>
          </div>
          {qrCodeUrl && (
            <div className='align-middle ml-8 mr-8 rounded-md bg-white flex justify-center' id='qrContainer'>
              <Image className='w-90 p-4 flex justify-center items-center' src={qrCodeUrl} alt="QR Code" width={256} height={256} />
            </div>
          )}
        </div>
          </main>
          <Footer />
    </div>
  );
}

export default function ClientHome() {
    return <Home />
}
