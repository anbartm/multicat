import React, { Component, Fragment } from 'react'

import Multicat from 'multicat'

const GOOGLE_ANALYTICS_ID     = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
const GOOGLE_REMARKETING_TAG  = process.env.REACT_APP_GOOGLE_REMARKETING_TAG
const MIXPANEL_ID             = process.env.REACT_APP_MIXPANEL_ID
const MIXPANEL_CUSTOM_LIB_URL = process.env.REACT_APP_MIXPANEL_LIB_URL
const HOTJAR_ID               = process.env.REACT_APP_HOTJAR_ID
const FACEBOOK_PIXEL_ID       = process.env.REACT_APP_FACEBOOK_PIXEL_ID
const TWITTER_ID              = process.env.REACT_APP_TWITTER_ID
const PINTEREST_ID            = process.env.REACT_APP_PINTEREST_ID
const REDDIT_PIXEL_Q          = process.env.REACT_APP_REDDIT_PIXEL_Q
const REDDIT_PIXEL_S          = process.env.REACT_APP_REDDIT_PIXEL_S
const LINKEDIN_PARTNER_ID     = process.env.LINKEDIN_PARTNER_ID

const multicatConfig = {
  google_analytics:   GOOGLE_ANALYTICS_ID,
  google_remarketing: GOOGLE_REMARKETING_TAG,
  mixpanel:           MIXPANEL_ID,
  mixpanel_lib:       MIXPANEL_CUSTOM_LIB_URL,
  hotjar:             HOTJAR_ID,
  facebook_pixel:     FACEBOOK_PIXEL_ID,
  twitter_pixel:      TWITTER_ID,
  pinterest_pixel:    PINTEREST_ID,
  reddit_pixel_q:     REDDIT_PIXEL_Q,
  reddit_pixel_s:     REDDIT_PIXEL_S,
  linkedin:           LINKEDIN_PARTNER_ID,
}

const multicat = new Multicat(multicatConfig)

export default class App extends Component {
  
  state = {
    cart_items: [],
  }

  addToCart(item) {
    const { cart_items } = this.state
    
    this.setState({
      cart_items: [...cart_items, item]
    })

    multicat.event('ADD_TO_CARD', { item })
  }

  componentDidMount() {
    multicat.view('/')
  }

  handleAddToCartClick = (e, item) => {
    e.preventDefault()
    this.addToCart(item)
  }

  render () {
    const { cart_items } = this.state

    return (
      <Fragment>
        <div>
          <h2>Items</h2>
          <p>
            <button onClick={ e => { this.handleAddToCartClick(e, 'scarf') } }>Scarf ($2)</button>
          </p>
          <p>
            <button onClick={ e => { this.handleAddToCartClick(e, 'mittens') } }>Mittens ($1)</button>
          </p>
        </div>
        <div>
          <h2>In cart</h2>
          {cart_items.map((item, i) => (
            <p key={ `item-${i}` }>{ item }</p>
          ))}
        </div>
      </Fragment>
    )
  }

}
