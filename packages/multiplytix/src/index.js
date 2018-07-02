import GoogleAnalytics from './modules/google_analytics'
import FacebookPixel from './modules/facebook_pixel'
import Mixpanel from './modules/mixpanel'
import GoogleRemarketingTag from 'modules/google_remarketing_tag'
import Twitter from 'modules/twitter'
import Pinterest from 'modules/pinterest'
import Reddit from 'modules/reddit'
import Hotjar from 'modules/hotjar'

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
      console.log('PageViewEvent', event)
      return false
    }

    const { pathname } = window.location
    this.modules.forEach(mod => mod.view(pathname))
  }

  initAnalytics(config) {
    const {
      google_analytics,
      google_remarketing,
      mixpanel,
      facebook_pixel,
      twitter,
      pinterest,
      reddit,
      hotjar
    } = config

    google_analytics && this.modules.push(new GoogleAnalytics(google_analytics))
    google_remarketing && this.modules.push(new GoogleRemarketingTag(google_remarketing))
    facebook_pixel && this.modules.push(new FacebookPixel(facebook_pixel))
    mixpanel && this.modules.push(new Mixpanel(mixpanel))
    twitter && this.modules.push(new Twitter(twitter))
    reddit && this.modules.push(new Reddit(reddit))
    pinterest && this.modules.push(new Pinterest(pinterest))
    hotjar && this.modules.push(new Hotjar(hotjar))

    console.log('Multiplytix: Added', this.modules)
  }

  constructor(config) {
    config && this.initAnalytics(config)
  }
}

export default Multiplytix

