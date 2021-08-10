import React, { useState } from 'react'
import { Card, Grid, Typography, Button, IconButton } from '@material-ui/core'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { Redirect } from 'react-router-dom'
import { clearCart, removeFromCart } from '../../reducer/actions'

const Cart = () => {
  //states
  const [redirect, setRedirect] = useState(false)

  //redux
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  //cartCount
  let cartCount = 0
  cart?.forEach((cartItem) => (cartCount += cartItem.count))

  return (
    <div className='container'>
      <Typography component='h1' className='sectionHeading'>
        Checkout:
      </Typography>
      <Typography component='p' className='totalItemsHeading'>
        Total Items: {cartCount}
      </Typography>
      <Grid container justify='space-between' className='cardsWrapper'>
        <Grid item className='leftSection cardContainer'>
          {cart?.map(({ name, count, preview, price, id }) => (
            <Card key={id} className='card productCard'>
              <img src={preview} alt={name} />
              <div className='checkOutDetails'>
                <h4>{name}</h4>
                <h5>X{count}</h5>
                <div>
                  <h6>Total Amount: {count * price} </h6>
                  <IconButton onClick={() => dispatch(removeFromCart(id))}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
        <Grid item className='rightSection cardContainer'>
          <Card className='card'>
            <Typography
              variant='h2'
              component='h2'
              className='totalAmountHeading'>
              Total Amount
            </Typography>
            <Typography component='p' className='totalAmountPara'>
              Total Amount: Rs{' '}
              <span className='totalAmount'>
                {cart?.reduce((acc, item) => acc + item.price, 0)}
              </span>
            </Typography>
            <Button
              className='placeOrderBtn'
              size='medium'
              disabled={cart?.length === 0 && true}
              onClick={() => {
                dispatch(clearCart())
                setRedirect(true)
              }}>
              Place Order
            </Button>
          </Card>
        </Grid>
      </Grid>
      {redirect && <Redirect to='/orderconfirm' />}
    </div>
  )
}

export default Cart
