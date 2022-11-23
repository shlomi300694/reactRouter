import React from 'react'
import '../Components/home.css'
const Test = () => {
  return (
    <div className='Main'>
    <div className='section d-flex flex-column align-items-center mt-0'>
      <div className='d-flex flex-column align-items-center mt-4'>
      <h3 className='text-white'>shopify</h3>
        <div className='hedear mt-4 '>
         <h1 className='Top' >Bring your ideas to life $1/month</h1>
         <p className='text-white'>The future of business is yours to shape. Sign up for a free trial and enjoy 3 months of Shopify for $1/month on select plans.</p>
      </div>
      <div className='grid  d-flex justify-content-between' >
        <div className='d-flex justify-content-between'>
          <input className='mainIn' type="text" placeholder='Email addres' />
          <button className='start btn btn-outline-success badge'>Start free trial</button>
          
          </div>
      </div>
      <div className='down'>
          <p>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify. </p>
          </div>
      </div>
      <div className='pic'>
        <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/landers/short-lander/free-trial/incentives-hero-desktop-d4e74bbb76284c154edfcb24e7610847ac8bcefa5602c39f90d7cce8f74ec4fd.png?quality=75" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Test