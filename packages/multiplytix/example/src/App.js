import React, { Component } from 'react'

import Multiplytix from 'multiplytix'

const GOOGLE_ANALYTICS_ID     = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
const FACEBOOK_PIXEL_ID       = process.env.REACT_APP_FACEBOOK_PIXEL_ID
const MIXPANEL_ID             = process.env.REACT_APP_MIXPANEL_ID
const MIXPANEL_CUSTOM_LIB_URL = process.env.REACT_APP_MIXPANEL_LIB_URL
const HOTJAR_ID               = process.env.REACT_APP_HOTJAR_ID
const GOOGLE_REMARKETING_TAG  = process.env.REACT_APP_GOOGLE_REMARKETING_TAG
const PINTEREST_ID            = process.env.REACT_APP_PINTEREST_ID
const REDDIT_TRACKING_Q       = process.env.REACT_APP_REDDIT_TRACKING_Q
const REDDIT_TRACKING_S       = process.env.REACT_APP_REDDIT_TRACKING_S
const TWITTER_ID              = process.env.REACT_APP_TWITTER_ID

const multiplytixConfig = {
  google_analytics: GOOGLE_ANALYTICS_ID,
  facebook_pixel: FACEBOOK_PIXEL_ID,
  mixpanel: MIXPANEL_ID,
  // ...
}

const multiplytix = new Multiplytix(multiplytixConfig)

export default class App extends Component {
  componentDidMount() {
    multiplytix.view('/')
  }
  render () {
    return (
      <div>
      </div>
    )
  }
}
