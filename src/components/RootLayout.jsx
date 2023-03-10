import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

const RootLayout = () => {
   return (
      <>
         <Navigation />
         <main></main>
         <Footer />
      </>
   )
}

export default RootLayout
