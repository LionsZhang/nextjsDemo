import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/app/navbar";


/**定义在app目录下的layout.tsx文件适用于全部页面。而在admin目录下的只对admin路径下的页面有效。*/
/** layout.tsx用于定义通用的布局*/
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
      <NavBar/>
      <main className="p-5">{children}</main>
      </body>
    </html>
  )
}
