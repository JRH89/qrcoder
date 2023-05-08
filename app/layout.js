import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QR Coder',
  description: 'QR Code Creator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://nextjs-store-chi.vercel.app/" />
        <meta property="og:title" content="QR Coder" />
        <meta property="og:description" content="QR Coder Creator" />
        <meta property="og:image" content="" />
        <meta property="url" content="https://nextjs-store-chi.vercel.app/" />
        <meta property="title" content="QR Coder" />
        <meta property="description" content="E-commerce app made with NextJS 13, TailwindCSS, Stripe, and Zustand" />
        <meta property="image" content="" />
        <link type="image/x-icon" rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
