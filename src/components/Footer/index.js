import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div>
        <h3 className='footerHeading'>Online Store</h3>
        <a href='/'>Men Clothing</a>
        <a href='/'>Women Clothing</a>
        <a href='/'>Men Accessories</a>
        <a href='/'>Women Accessories</a>
      </div>
      <div>
        <h3 className='footerHeading'>Helpful Links</h3>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
      </div>
      <div>
        <h3 className='footerHeading'>Partners</h3>
        <a href='/'>Zara</a>
        <a href='/'>Pantaloons</a>
        <a href='/'>Levis</a>
        <a href='/'>UCB</a>
        <a href='/'>+ Many More</a>
      </div>
      <div>
        <h3 className='footerHeading'>Address</h3>
        <a href='/'>Building 101</a>
        <a href='/'>Central Avenue</a>
        <a href='/'>LA - 902722</a>
        <a href='/'>United States</a>
      </div>
    </footer>
  )
}

export default Footer
