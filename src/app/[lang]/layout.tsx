
import type { Metadata } from 'next'
import { alfaFont, playfairFont } from '@/fonts'
import './globals.css'
import { StoreProvider } from '@/providers'

export const metadata: Metadata = {
  title: 'Soundle',
  description: 'Soundle description',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <body 
        className={`${playfairFont.variable} ${alfaFont.variable}`}
      >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
