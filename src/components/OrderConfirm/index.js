import React from 'react'
import './OrderConfirm.css'

const OrderConfirm = () => {
  return (
    <div className='thankyouSection'>
      <img
        src={`${process.env.PUBLIC_URL}/images/img_confirm.png`}
        alt='Order Confirmation'
      />
      <h3>Order placed successfully!!!</h3>
      <p>We have sent you an email with the order details.</p>
    </div>
  )
}

export default OrderConfirm
