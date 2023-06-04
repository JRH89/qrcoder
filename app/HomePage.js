import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('url');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [foreground, setForeground] = useState('#000000');
  const [background, setBackground] = useState('#FFFFFF');
  const [qrValue, setQrValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    let qrValue;

    if (inputType === 'url' || inputType === 'text') {
      qrValue = inputValue;
    }

    // Generate QR code based on input value and type
    setQrValue(qrValue);
    setQrCodeUrl(qrValue);
    setInputValue('');
  };

  return (
    <div className='flex select-none flex-col bg- h-screen justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col text-center items-center justify-center'>

        <div className="flex justify-evenly mb-2">
          <label className="flex items-center mr-4">
            <input className='mr-2' type="checkbox" name="inputType" value="url" checked={inputType === 'url'} onChange={() => setInputType('url')} />
            URL
          </label>
          <h1>or</h1>
          <label className="flex items-center ml-4">
            <input className='mr-2' type="checkbox" name="inputType" value="text" checked={inputType === 'text'} onChange={() => setInputType('text')} />
            Text
          </label>
        </div>
        <div className="flex justify-center">
          <input autoComplete='url' className='rounded-md w-60 py-2 px-4 mb-4 text-black text-center' type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder='Enter URL or text' />
        </div>
        <div className='flex flex-col gap-4 mb-4'>
          <label className='mr-2'>
            Foreground Color:
            <input type='color' value={foreground} onChange={(event) => setForeground(event.target.value)} className='ml-2' />
          </label>
          <label>
            Background Color:
            <input type='color' value={background} onChange={(event) => setBackground(event.target.value)} className='ml-2' />
          </label>
        </div>
        <button className='py-2 px-4 border border-white shadow-lg shadow-black hover:scale-90 hover:opacity-50 duration-300 w-60 text-center place-items-center font-bold bg-black text-white rounded-md mt-2' type='submit'>CREATE</button>
      </form>

      {qrCodeUrl && (
        <div className='mt-8'>
          <div className='bg-white p-4 rounded-md shadow-md' id='qrContainer'>
            <QRCode value={qrValue} size={256} fgColor={foreground} bgColor={background} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClientHome() {
  return <Home />;
}
