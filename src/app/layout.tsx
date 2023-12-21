import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Provider from "../theme/Providers";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Groww',
  description: 'A web app for checkout experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={
        inter.className +
        "w-screen min-h-screen overflow-y-scroll overflow-x-hidden bg-white text-black dark:bg-black dark:text-white"
      }>
        <Toaster position="bottom-center" />
        <ChakraProvider><Provider>
          <Navbar />
          {children}
        </Provider>
        </ChakraProvider>

      </body>
    </html>
  )
}
