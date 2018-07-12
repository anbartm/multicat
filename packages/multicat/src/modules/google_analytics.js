import ReactGA from 'react-ga'

// TODO: Lazy load
// let ReactGA
// if (isProduction && !isServerSide) {
//   ReactGA = require('react-ga')
// }

class GoogleAnalytics {
  
  view(pathname) {
    ReactGA.pageview(pathname)
  }

  event(event, properties) {
    // TODO: Add properties
    ReactGA.event({
      category: 'Default',
      action: event,
      label: event,
    })  
  }

  constructor(
    id,
    gaOptions: {
      cookieDomain: 'auto',
    }
  ) {

    ReactGA.initialize({
      trackingId: id,
      gaOptions
    })

  }

}

export default GoogleAnalytics
