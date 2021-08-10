import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { getProduct } from '../../utils/apiData'
import { Grid, CircularProgress, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { addProduct } from '../../reducer/actions'
import { useDispatch, useSelector } from 'react-redux'
import './ProductDetails.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
    marginTop: '52px',
    padding: '4% 8%',
  },
}))

const ProductDetails = () => {
  const classes = useStyles()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [uniqueImageId, setUniqueImageId] = useState(1)
  const [productCount, setProductCount] = useState(2)
  const [loading, setLoading] = useState(true)

  const [prevImage, setPrevImage] = useState('')

  //redux
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  //onclick functionality
  const addToCart = () => {
    let isPresent = false
    let count = 0
    if (cart.length > 0) {
      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          setProductCount((prevCount) => prevCount + 1)
          isPresent = true
        }
      })
      if (!isPresent) {
        count = 1
      } else {
        count = productCount
      }
    } else {
      count = 1
    }
    let productToBeAdded = { ...product, count }
    dispatch(addProduct(productToBeAdded))
  }

  useEffect(() => {
    const getSingleProduct = async () => {
      let { data } = await axios.get(`${getProduct}${id}`)
      setProduct(data)
      setLoading(false)
    }
    getSingleProduct()
  }, [id])

  return (
    <>
      {loading && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '92px',
          }}>
          <CircularProgress
            style={{
              color: '#009866',
            }}
          />
        </div>
      )}
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
        className={classes.root}>
        <Grid item className='imgContainer'>
          <div className='image-wrapper'>
            <img
              src={prevImage.length ? prevImage : product.preview}
              alt={product.name}
            />
          </div>
        </Grid>
        <Grid item className='productDetailsContainer'>
          <Typography variant='h1' component='h1' className='name'>
            {product.name}
          </Typography>
          <Typography variant='h4' component='h4' className='brandName'>
            {product.brand}
          </Typography>
          <Typography
            variant='h2'
            component='h4'
            className='productDetailsHeading'>
            Price: Rs <span className='price'>{product.price}</span>
          </Typography>
          <Typography
            variant='h2'
            component='h4'
            className='productDetailsHeading'>
            Description:
          </Typography>
          <Typography component='p' className='desc'>
            {product.description}
          </Typography>
          <Typography
            variant='h2'
            component='h4'
            className='productDetailsHeading'>
            Product Preview:
          </Typography>
          <Grid container direction='row' alignItems='center'>
            {product.photos?.map((photoUrl, index) => (
              <img
                key={index + 1}
                src={photoUrl}
                alt={`Prev${index}`}
                className={
                  uniqueImageId === index + 1
                    ? `previewImages active`
                    : 'previewImages'
                }
                onClick={(e) => {
                  setUniqueImageId(index + 1)
                  setPrevImage(e.target.src)
                }}
              />
            ))}
          </Grid>
          <Button
            className='addToCartBtn'
            disabled={loading && true}
            size='medium'
            onClick={addToCart}>
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductDetails
