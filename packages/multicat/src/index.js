import GoogleAnalytics from './modules/google_analytics'
import GoogleRemarketingTag from './modules/google_remarketing_tag'
import Mixpanel from './modules/mixpanel'
import Hotjar from './modules/hotjar'
import FacebookPixel from './modules/facebook_pixel'
import PinterestPixel from './modules/pinterest_pixel'
import TwitterPixel from './modules/twitter_pixel'
import RedditPixel from './modules/reddit_pixel'
import LinkedIn from './modules/linkedin'
import RESTEndpoint from './modules/rest_endpoint'

export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'

const log = (...msgs) => {
  if (isDevelopment || window.MULTICAT_LOGGING) {
    console.log('Multicat', ...msgs)
  }
} 

class Multicat {

  modules = []

  event(event, properties = {}) {
    log('AnalyticsEvent', event, properties)

    this.modules.forEach(mod => mod.event && mod.event(event, properties))
  }

  view(pathname) {
    log('PageViewEvent', pathname)

    this.modules.forEach((mod) => (
      mod.view && mod.view(
        (pathname !== undefined)
          ? pathname
          : (window)
            ? window.location.pathname
            : ''
      )
    ))
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
      reddit_pixel_q,
      reddit_pixel_s,
      linkedin,
      rest_endpoint,
    } = config

    google_analytics && this.modules.push(new GoogleAnalytics(google_analytics));
    google_remarketing && this.modules.push(new GoogleRemarketingTag(google_remarketing));
    mixpanel && this.modules.push(new Mixpanel(mixpanel));
    hotjar && this.modules.push(new Hotjar(hotjar));
    facebook_pixel && this.modules.push(new FacebookPixel(facebook_pixel));
    twitter_pixel && this.modules.push(new TwitterPixel(twitter_pixel));
    pinterest_pixel && this.modules.push(new PinterestPixel(pinterest_pixel));
    rest_endpoint && this.modules.push(new RESTEndpoint(rest_endpoint));
    linkedin && this.modules.push(new LinkedIn(linkedin));
    if (reddit_pixel_q && reddit_pixel_s) {
      this.modules.push(new RedditPixel(reddit_pixel_q, reddit_pixel_s));
    }

    log('AddedModules', this.modules)
  }

  constructor(config) {
    config && this.initAnalytics(config)
  }
}

export default Multicat

if (window && !window.Multicat) {
  window.Multicat = Multicat
}
