import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ServicePage() {
  return (
    <div>
      <Navbar />

      {/* hero section */}
      <div className='bg-TextColor w-full h-screen text-center flex justify-center items-center my-auto'>
        <span className='text-white capitalize text-9xl '>
            Service Page
        </span>
      </div>
      {/* end hero section */}
      
      <Footer />
    </div>
  )
}

export default ServicePage
