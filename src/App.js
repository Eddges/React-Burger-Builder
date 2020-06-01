import React from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route, Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'

class App extends React.Component {
  render() {

    return(
      // <BurgerBuilder />
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
          
        </Switch>
      </Layout>
    )
  }
}

export default App;