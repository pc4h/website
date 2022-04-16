import Script from 'next/script'
import { Header } from './header'

export default function Layout({ children }) {
  return (
    <>
      <Script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js" strategy="beforeInteractive"></Script>
      <Header/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      <main>
        {children}
      </main>
    </>
  )
}