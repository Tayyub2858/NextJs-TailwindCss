import '../../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className} style={{background:'white', color:'black'}}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
