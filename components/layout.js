import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
      <Script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js" strategy="beforeInteractive"></Script>
      <main>
        {children}
      </main>
    </>
  )
}