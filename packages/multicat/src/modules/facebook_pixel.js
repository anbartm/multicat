import ReactPixel from 'react-facebook-pixel'

// TODO: Lazy load
// let ReactPixel
// if (isProduction && !isServerSide) {
//   ReactPixel = require('react-facebook-pixel')
// }

class FacebookPixel {
  
  view() {
    ReactPixel.pageView()
  }

  event(event, properties) {
    // TODO: Add properties
    ReactPixel.trackCustom(event)
  }
  
  constructor(id) {
    ReactPixel.init(id)
  }
}

export default FacebookPixel