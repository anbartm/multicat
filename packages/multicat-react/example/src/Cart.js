import React, { Fragment } from 'react'
import { withMulticat } from 'multicat-react'

const Cart = ({ cart_items, multicatEvent }) => (
  <Fragment>
    <h2 onMouseOver={ e => multicatEvent('HOVER_CART', {}) }>In cart</h2>
    {cart_items.map((item, i) => (
      <p key={ `item-${i}` }>{ item }</p>
    ))}
  </Fragment>
)

export default withMulticat(Cart)