# multiplytix

> Unified analytics API

- Mixpanel
- Google Analytics
- Google Remarketing Tag
- Facebook pixel
- Reddit pixel
- Twitter pixel
- Hotjar

Features:

- Unified API
- React Context
- Landen Integration

[![NPM](https://img.shields.io/npm/v/multiplytix.svg)](https://www.npmjs.com/package/multiplytix) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save multiplytix
```

## Usage

### Vanilla

```js
const multiplytixConfig = {
  google_analytics: <GOOGLE_ANALYTICS_ID>,
  google_remarketing: <GOOGLE_REMARKETING_TAG>,
  mixpanel: <MIXPANEL_ID>,
  hotjar: <HOTJAR_ID>,
  facebook_pixel: <FACEBOOK_PIXEL_ID>,
  twitter_pixel: <TWITTER_ID>,
  pinterest_pixel: <PINTEREST_ID>,
  reddit_pixel_q: <REDDIT_PIXEL_Q>,
  reddit_pixel_s: <REDDIT_PIXEL_S>,
}

const multiplytix = new Multiplytix(multiplytixConfig)

multiplytix.event(event, propertes)
multiplytix.view(pathname)
```

### React

```jsx
import React, { Component } from 'react'

import Multiplytix, { Provider, Consumer } from 'multiplytix'

const providers = {
  google: 'UA-XXX-XX',
  mixpanel: 'ae90c9da671e8',
}

class Example extends Component {
  render () {
    return (
      <App>
        <Multiplytix.Provider config={ providers }>
        
          <div className='something'>

            <Multiplytix.Consumer> {(view, event) => (
              <MyComponent analytics={{ view, event }} />
            )} </Multiplytix.Consumer>
          
          </div>
        
        </Multiplytix.Provider>
      </App>
    )
  }
}
```

## License

MIT © [Cofab](https://github.com/cofablab)
