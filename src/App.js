import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Topbar from './components/Topbar'
import Cart from './components/Cart'
import Footer from './components/Footer'
import OrderConfirm from './components/OrderConfirm'

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product/:id' component={ProductDetails} />
        <Route path='/cart' component={Cart} />
        <Route path='/orderconfirm' component={OrderConfirm} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
