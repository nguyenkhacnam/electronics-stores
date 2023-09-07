import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

const DefaultLayout = ({children}) => {
  return (
    <div className=''>
      <Header />
      <Navigation />
      <div>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout