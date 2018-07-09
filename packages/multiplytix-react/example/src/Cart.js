import React, { Fragment } from 'react'
import { withMultiplytix } from 'multiplytix-react'

const Cart = ({ cart_items, multiplytixEvent }) => (
  <Fragment>
    <h2 onMouseOver={ e => multiplytixEvent('HOVER_CART', {}) }>In cart</h2>
    {cart_items.map((item, i) => (
      <p key={ `item-${i}` }>{ item }</p>
    ))}
  </Fragment>
)

export default withMultiplytix(Cart)