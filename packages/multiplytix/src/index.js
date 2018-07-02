// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'

import GoogleAnalytics from './modules/google_analytics'
import FacebookPixel from './modules/facebook_pixel'
import Mixpanel from './modules/mixpanel'
// import GoogleRemarketingTag from 'modules/google_remarketing_tag'
// import Twitter from 'modules/twitter'
// import Pinterest from 'modules/pinterest'
// import Reddit from 'modules/reddit'
// import Hotjar from 'modules/hotjar'

export const isServerSide = navigator.userAgent.includes('Node.js')
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'

class Multiplytix {

  modules = []

  event(event, properties = {}) {
    if (!isProduction || isServerSide) {
      console.log('AnalyticsEvent', event, properties)
      return false
    }

    this.modules.forEach(mod => mod.event(event, properties))
  }

  view(event) {
    if (!isProduction || isServerSide) {
      console.log('PageView', event)
      return false
    }

    const { pathname } = window.location
    this.modules.forEach(mod => mod.view(pathname))
  }

  initAnalytics(config) {
    const {
      google_analytics,
      mixpanel,
      facebook_pixel,
    } = config

    google_analytics && this.modules.push(new GoogleAnalytics(google_analytics))
    facebook_pixel && this.modules.push(new FacebookPixel(facebook_pixel))
    mixpanel && this.modules.push(new Mixpanel(mixpanel))

    console.log('Multiplytix: Added', this.modules)
  }

  constructor(config) {
    config && this.initAnalytics(config)
  }
}

export default Multiplytix

