import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const CardContainer = ({ brand, id, name, preview, price }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    name: {
      fontSize: '16px',
      fontWeight: 400,
      letterSpacing: '0.5px',
      color: 'rgb(27, 25, 25)',
      fontFamily: 'Montserrat',
      height: '56px',
    },
    brand: {
      fontSize: '12px',
      color: 'rgb(110, 110, 110)',
      fontFamily: 'Montserrat',
      fontWeight: '600',
    },
    price: {
      marginTop: '10px',
      fontSize: '15px',
      letterSpacing: '2px',
      color: '#009688',
      fontFamily: 'Montserrat',
      fontWeight: '600',
    },
  })
  const classes = useStyles()
  return (
    <Link to={`product/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia component='img' alt={name} image={preview} height='365' />
          <CardContent>
            <Typography
              gutterBottom
              className={classes.name}
              variant='h3'
              component='h3'>
              {name}
            </Typography>
            <Typography variant='h4' className={classes.brand} component='h4'>
              {brand}
            </Typography>
            <Typography variant='h4' className={classes.price} component='h5'>
              Rs {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default CardContainer
