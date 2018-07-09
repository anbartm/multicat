import React, { Fragment } from 'react'

const Catalogue = ({ handleAddToCartClick }) => (
  <Fragment>
    <h2>Catalogue</h2>
    <p>
      <button onClick={ e => { handleAddToCartClick(e, 'scarf') } }>Scarf ($2)</button>
    </p>
    <p>
      <button onClick={ e => { handleAddToCartClick(e, 'mittens') } }>Mittens ($1)</button>
    </p>
  </Fragment>
)

export default Catalogue
