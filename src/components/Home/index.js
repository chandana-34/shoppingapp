import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeProductsAPI } from '../../utils/apiData'
import { getProducts } from '../../reducer/actions'
import Slider from '../Slider'
import './Home.css'
import Card from '../Card'
import { CircularProgress } from '@material-ui/core'

const Home = () => {
  //state
  const [loading, setLoading] = useState(true)

  //redux state
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  //get products from API
  const getAllProducts = async () => {
    const res = await axios.get(homeProductsAPI)
    setLoading(false)
    //dispatch action
    dispatch(getProducts(res.data))
  }

  useEffect(() => {
    getAllProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='home'>
      <Slider />
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
      <div className='cards-wrapper'>
        {products &&
          products.map((product) => <Card key={product.id} {...product} />)}
      </div>
    </div>
  )
}

export default Home
