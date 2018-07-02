import GoogleAnalytics from './modules/google_analytics'
import FacebookPixel from './modules/facebook_pixel'
import Mixpanel from './modules/mixpanel'
import GoogleRemarketingTag from './modules/google_remarketing_tag'
import TwitterPixel from './modules/twitter_pixel'
import PinterestPixel from './modules/pinterest_pixel'
import RedditPixel from './modules/reddit_pixel'
import Hotjar from './modules/hotjar'

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
      hotjar,
      facebook_pixel,
      twitter_pixel,
      pinterest_pixel,
      reddit_pixel,
    } = config

    google_analytics && this.modules.push(new GoogleAnalytics(google_analytics))
    google_remarketing && this.modules.push(new GoogleRemarketingTag(google_remarketing))
    mixpanel && this.modules.push(new Mixpanel(mixpanel))
    hotjar && this.modules.push(new Hotjar(hotjar))
    facebook_pixel && this.modules.push(new FacebookPixel(facebook_pixel))
    twitter_pixel && this.modules.push(new TwitterPixel(twitter_pixel))
    reddit_pixel && this.modules.push(new RedditPixel(reddit_pixel))
    pinterest_pixel && this.modules.push(new PinterestPixel(pinterest_pixel))

    console.log('Multiplytix: Added', this.modules)
  }

  constructor(config) {
    config && this.initAnalytics(config)
  }
}

export default Multiplytix

