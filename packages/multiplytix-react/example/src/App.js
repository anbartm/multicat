import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Cart from './Cart'
import Catalogue from './Catalogue'

class App extends Component {
  
  static contextTypes = {
    multiplytixEvent: PropTypes.func,
    multiplytixView: PropTypes.func,
  }

  state = {
    cart_items: [],
  }

  addToCart(item) {
    const { cart_items } = this.state
    
    this.setState({
      cart_items: [...cart_items, item]
    })

  }

  handleAddToCartClick = (e, item) => {
    e.preventDefault()
    this.addToCart(item)
    const { multiplytixEvent } = this.context
    multiplytixEvent('ADD_TO_CARD', { item })
  }

  render () {
    const { cart_items } = this.state

    return (
      <Fragment>
        <Catalogue handleAddToCartClick={ this.handleAddToCartClick } />
        <Cart cart_items={ cart_items } />
      </Fragment>
    )
  }

}

export default App

